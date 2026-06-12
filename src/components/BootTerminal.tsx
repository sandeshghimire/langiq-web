"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Typewriter effect line-by-line
  useEffect(() => {
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
        }, 3); // Fast type speed
        return () => clearTimeout(charTimeout);
      } else {
        // Move to next line
        const lineTimeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 120); // Delay between lines
        return () => clearTimeout(lineTimeout);
      }
    } else {
      // Completed typing all lines, hold for a brief moment then start wipe
      const completeTimeout = setTimeout(() => {
        setIsWiping(true);
      }, 300);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentLineIndex, currentCharIndex]);

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
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
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
            {currentLineIndex < lines.length && (
              <div className="flex items-center gap-1 leading-relaxed">
                <span>{visibleLines[currentLineIndex] || ""}</span>
                <span className="w-2 h-4 cursor-blink inline-block" style={{ backgroundColor: "currentColor" }} />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
