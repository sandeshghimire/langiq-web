"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplitFlapCounterProps {
  current: number;
  total: number;
}

export default function SplitFlapCounter({ current, total }: SplitFlapCounterProps) {
  const [prev, setPrev] = useState(current);

  useEffect(() => {
    setPrev(current);
  }, [current]);

  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center gap-1 font-mono text-xs text-[#6b7075] select-none">
      {/* Current Stage Indicator */}
      <div className="relative w-8 h-8 bg-white border border-[#e4e2dd] rounded-[3px] flex items-center justify-center overflow-hidden shadow-sm">
        {/* Horizontal Split Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#e4e2dd] z-10" />

        <AnimatePresence mode="popLayout">
          <motion.span
            key={current}
            initial={{ y: 20, opacity: 0, rotateX: 45 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -20, opacity: 0, rotateX: -45 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 15, // causes overshoot and bounce
            }}
            className="text-sm font-bold text-[#16181a] origin-center block"
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
