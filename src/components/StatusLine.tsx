"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLayoutState } from "./LayoutContext";
import { platforms } from "@/data/platforms";

export default function StatusLine() {
  const { scrollProgress, platformId, activeStage, isContactSubmitted } = useLayoutState();
  const [displayPercent, setDisplayPercent] = useState(0);
  const animationFrameId = useRef<number | null>(null);
  // Hold the latest displayPercent in a ref so the rAF tween can read the
  // current value without capturing a stale closure.
  const latestPercent = useRef<number>(0);

  // Smooth tweening using requestAnimationFrame
  useEffect(() => {
    const startValue = latestPercent.current;
    const endValue = scrollProgress;
    const duration = 250; // ms
    const startTime = performance.now();

    const updateValue = (now: number) => {
      const elapsed = now - startTime;
      const fraction = Math.min(elapsed / duration, 1);

      // Easing function
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedFraction = easeOutQuad(fraction);

      const currentVal = Math.round(startValue + (endValue - startValue) * easedFraction);
      latestPercent.current = currentVal;
      setDisplayPercent(currentVal);

      if (fraction < 1) {
        animationFrameId.current = requestAnimationFrame(updateValue);
      }
    };

    animationFrameId.current = requestAnimationFrame(updateValue);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [scrollProgress]);

  // Determine active platform filename
  const pageItem = platforms.find((p) => p.id === platformId);
  const filename = pageItem ? `${pageItem.id}.img` : "soccentric_os.img";

  const isFinalSlide = activeStage === 9;

  let message = "";
  if (platformId === "contact") {
    message = isContactSubmitted 
      ? "contact — boot complete ✓ 0 errors" 
      : "waiting contact_form.input ...";
  } else if (isFinalSlide && displayPercent >= 98) {
    message = "100% — boot complete ✓ 0 errors";
  } else {
    message = `writing ${filename} … ${displayPercent}%`;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e4e2dd] bg-[#fafaf8]/80 backdrop-blur-md px-6 md:px-12 py-2 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[10px] text-[#6b7075] uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16181a] animate-pulse" />
          <span>system_status: {message}</span>
        </div>
        <div className="hidden sm:block">
          <span>baud_rate: 115200 bps</span>
        </div>
      </div>
    </footer>
  );
}
