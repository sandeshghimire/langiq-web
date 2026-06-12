"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const lines = [
  "U-Boot 2026.01-soccentric (Jun 11 2026 - 11:00:15)",
  "CPU:   Multicore Application Platform Init",
  "DRAM:  Initialize System Memory ... 8 GiB OK",
  "MMC:   Loading partition table ... bootable A/B detected",
  "BOOT:  Uncompressing Kernel Image ... OK",
  "INIT:  Starting systemd init [target: soccentric.target]",
];

export default function BootTerminal({ onComplete }: { onComplete: () => void }) {
  const reducedMotion = useReducedMotion();
  // Typewriter state is only used for the non-reduced-motion path. Under
  // prefers-reduced-motion we render all lines immediately from `lines`
  // and never enter the typewriter at all. This is the structural reason
  // the previous "ref-guard" patch was fragile: the typewriter effect's
  // effect-deps included the state it itself set, so any setState in
  // the effect body re-ran the effect and (via the cleanup) cancelled
  // the wipe timer it had just scheduled. Splitting reducedMotion into
  // a separate effect with `[reducedMotion]` as the sole dep sidesteps
  // the whole problem.
  const [visibleLines, setVisibleLines] = useState<string[]>(() =>
    reducedMotion ? lines : []
  );
  const [currentLineIndex, setCurrentLineIndex] = useState(
    reducedMotion ? lines.length : 0
  );
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isWiping, setIsWiping] = useState(false);

  // Ref to track isWiping for the animation complete callback.
  // The onAnimationComplete handler closes over the render where the
  // motion.div was mounted (isWiping=false), so we need a ref to read
  // the current value when the exit animation actually finishes.
  const isWipingRef = useRef(isWiping);

  // Keep ref in sync with state (must be in effect, not during render)
  useEffect(() => {
    isWipingRef.current = isWiping;
  }, [isWiping]);

  // Reduced-motion fast path: reveal all lines + start the wipe in a
  // dedicated effect whose only dep is `reducedMotion`. This effect
  // runs exactly once (mount) and its cleanup never re-runs because
  // the dep doesn't change. No setState, no infinite loop.
  useEffect(() => {
    if (!reducedMotion) return;
    const hold = setTimeout(() => setIsWiping(true), 200);
    return () => clearTimeout(hold);
  }, [reducedMotion]);

  // Typewriter effect line-by-line. Total runtime:
  //   sum(len(line) * CHAR_MS) + LINES * LINE_GAP_MS + HOLD_MS
  // With 6 lines of ~60 chars each, at 2ms/char: 720ms typing +
  // 6 * 90ms = 540ms gap + 220ms hold = ~1.48s — under the 1.8s spec
  // budget. Only runs when reducedMotion is false (the early return
  // below is the guard against accidentally entering the typewriter
  // when the user has reduce-motion set).
  useEffect(() => {
    if (reducedMotion) return;

    const CHAR_MS = 2;
    const LINE_GAP_MS = 90;
    const HOLD_MS = 220;

    if (currentLineIndex < lines.length) {
      const fullText = lines[currentLineIndex];
      if (currentCharIndex < fullText.length) {
        const charTimeout = setTimeout(() => {
          setVisibleLines((prev) => {
            const copy = [...prev];
            if (!copy[currentLineIndex]) {
              copy[currentLineIndex] = "";
            }
            copy[currentLineIndex] = fullText.slice(0, currentCharIndex + 1);
            return copy;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, CHAR_MS);
        return () => clearTimeout(charTimeout);
      } else {
        const lineTimeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, LINE_GAP_MS);
        return () => clearTimeout(lineTimeout);
      }
    } else {
      const completeTimeout = setTimeout(() => {
        setIsWiping(true);
      }, HOLD_MS);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentLineIndex, currentCharIndex, reducedMotion]);

  // Handle wipe animation complete
  const handleAnimationComplete = () => {
    if (isWipingRef.current) {
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      {!isWiping && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Boot sequence"
          // Pressing Escape or Enter/Space closes the boot overlay so
          // keyboard and AT users are not trapped. (req.md §10: reduced-
          // motion escape.)
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsWiping(true);
            }
          }}
          tabIndex={-1}
          ref={(el) => {
            // Autofocus the dialog so the keydown handler can fire
            // immediately on any key.
            if (el && typeof el.focus === "function") el.focus();
          }}
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: reducedMotion ? 0 : 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          onAnimationComplete={handleAnimationComplete}
          className="fixed inset-0 z-[100] bg-[#16181a] text-[#fafaf8] font-mono text-xs md:text-sm p-8 md:p-16 flex flex-col justify-start gap-2 select-none"
        >
          <div className="max-w-3xl flex flex-col gap-1.5 mt-8">
            {visibleLines.map((line, idx) => (
              <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                {line}
              </div>
            ))}

            {/* Blinking cursor */}
            {currentLineIndex < lines.length && !reducedMotion && (
              <div className="flex items-center gap-1 leading-relaxed">
                <span>{visibleLines[currentLineIndex] || ""}</span>
                <span
                  className="w-2 h-4 cursor-blink inline-block"
                  style={{ backgroundColor: "currentColor" }}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
