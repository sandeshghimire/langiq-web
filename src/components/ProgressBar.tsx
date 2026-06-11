"use client";

import React from "react";
import { useLayoutState } from "./LayoutContext";
import { platforms } from "@/data/platforms";

export default function ProgressBar() {
  const { scrollProgress, platformId } = useLayoutState();

  // Determine active accent color
  const pageItem = platforms.find((p) => p.id === platformId);
  const accentColor = pageItem ? pageItem.accent : "#16181a";

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: accentColor,
        }}
      />
    </div>
  );
}
