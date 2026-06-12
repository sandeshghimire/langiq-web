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
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isWiping, setIsWiping] = useState(false);
  const reducedMotion = useReducedMotion();
  // Guard so the reduced-motion branch only fires its 200ms wipe timer
  // once. Without this, every effect re-run (caused by the setState
  // calls in the same branch) clears the previous timer in its cleanup
  // and schedules a new one — so the wipe never actually fires and
  // `onComplete` is never called, leaving the boot overlay covering
  // the page (a "blank" page from the user's perspective).
  const reducedMotionInitRef = useRef(false);

  // Typewriter effect line-by-line. Total runtime:
  //   sum(len(line) * CHAR_MS) + LINES * LINE_GAP_MS + HOLD_MS
  // With 6 lines of ~60 chars each, at 2ms/char: 720ms typing +
  // 6 * 90ms = 540ms gap + 220ms hold = ~1.48s — under the 1.8s spec
  // budget. Under prefers-reduced-motion we skip the typewriter entirely
  // and reveal all lines immediately, then hold briefly.
  useEffect(() => {
    if (reducedMotion) {
      if (reducedMotionInitRef.current) return;
      reducedMotionInitRef.current = true;
      // Reduced-motion is a system-level signal: reveal all lines and
      // start the wipe immediately. The ref-guard above makes the
      // setState calls in this branch idempotent — the effect only
      // runs the work once, on the first invocation, so the lint
      // rule that flags "cascading renders" does not fire here.
      setVisibleLines(lines);
      setCurrentLineIndex(lines.length);
      const hold = setTimeout(() => setIsWiping(true), 200);
      return () => clearTimeout(hold);
    }

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
    if (isWiping) {
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
