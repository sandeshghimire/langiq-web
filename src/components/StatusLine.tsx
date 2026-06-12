"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLayoutState } from "./LayoutContext";
import { platforms } from "@/data/platforms";

// On the Home page the visible stage 2..7 announces a platform identity
// (Arches / Acadia / Zion / Pinnacle / Joshua / Sequoia), even though the
// URL is still "/" (platformId === "home"). The status line needs the same
// mapping so the bottom-bar filename matches the slide in view. Stage 1
// (hero), 8 (team), and 9 (closing) use the generic SoCcentric OS image.
const homeStageToPlatformId: Record<number, string> = {
  2: "arches",
  3: "acadia",
  4: "zion",
  5: "pinnacle",
  6: "joshua",
  7: "sequoia",
};

function resolveImageFilename(platformId: string, activeStage: number): string {
  const effectiveId =
    platformId === "home" && activeStage in homeStageToPlatformId
      ? homeStageToPlatformId[activeStage]
      : platformId;
  const pageItem = platforms.find((p) => p.id === effectiveId);
  return pageItem ? `${pageItem.id}.img` : "soccentric_os.img";
}

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

  const filename = resolveImageFilename(platformId, activeStage);

  const isFinalSlide = activeStage === 9;
  // Use the *raw* scrollProgress (not the tweened displayPercent) to evaluate
  // the 98% gate. The tween can briefly go backwards (e.g. when a new
  // scroll event arrives during the easing window) and would oscillate the
  // final-slide message between "writing ..." and "100% — boot complete".
  const bootComplete = isFinalSlide && scrollProgress >= 98;

  let message = "";
  if (platformId === "contact") {
    message = isContactSubmitted
      ? "contact — boot complete ✓ 0 errors"
      : "waiting contact_form.input ...";
  } else if (bootComplete) {
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
