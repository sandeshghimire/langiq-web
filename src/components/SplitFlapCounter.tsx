"use client";

import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface SplitFlapCounterProps {
  current: number;
  total: number;
}

export default function SplitFlapCounter({ current, total }: SplitFlapCounterProps) {
  const pad = (num: number) => String(num).padStart(2, "0");
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-1 font-mono text-xs text-[#6b7075] select-none">
      {/* Current Stage Indicator */}
      <div className="relative w-8 h-8 bg-white border border-[#e4e2dd] rounded-[3px] flex items-center justify-center overflow-hidden shadow-sm">
        {/* Faint horizontal split shadow — req.md spec: "The faint flip
            shadow below the digit". Two hairlines stacked, with a subtle
            vertical gradient on top half to suggest the curved flap. */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#e4e2dd] z-10"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 right-0 h-2 -translate-y-2 bg-gradient-to-b from-[#e4e2dd]/40 to-transparent z-0 pointer-events-none"
        />

        <AnimatePresence mode="popLayout">
          <motion.span
            key={current}
            initial={
              reducedMotion
                ? { opacity: 1 }
                : { y: 20, opacity: 0, rotateX: 45 }
            }
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { y: -20, opacity: 0, rotateX: -45 }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 250,
                    damping: 15, // causes overshoot and bounce
                  }
            }
            className="text-sm font-bold text-[#16181a] origin-center block relative z-20"
          >
            {pad(current)}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="mx-1">/</span>

      {/* Total Stages Indicator */}
      <div className="w-8 h-8 bg-[#fafaf8] border border-[#e4e2dd] rounded-[3px] flex items-center justify-center text-sm text-[#6b7075] opacity-60">
        {pad(total)}
      </div>
    </div>
  );
}
