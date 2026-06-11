"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLayoutState } from "./LayoutContext";
import { platforms } from "@/data/platforms";
import { motion } from "framer-motion";

interface RailEntry {
  label: string;
  baseTime: number;
}

const platformEntries: RailEntry[] = [
  { label: "overview", baseTime: 0.000 },
  { label: "bsp", baseTime: 0.412 },
  { label: "bootloader", baseTime: 1.108 },
  { label: "kernel", baseTime: 2.045 },
  { label: "middleware", baseTime: 2.912 },
  { label: "ota", baseTime: 3.804 },
  { label: "sdk", baseTime: 4.567 },
  { label: "performance", baseTime: 5.312 },
  { label: "manufacturing", baseTime: 6.118 },
];

const homeEntries: RailEntry[] = [
  { label: "hero", baseTime: 0.000 },
  { label: "arches", baseTime: 0.500 },
  { label: "acadia", baseTime: 1.000 },
  { label: "zion", baseTime: 1.500 },
  { label: "pinnacle", baseTime: 2.000 },
  { label: "joshua", baseTime: 2.500 },
  { label: "sequoia", baseTime: 3.000 },
  { label: "team", baseTime: 3.500 },
  { label: "closing", baseTime: 4.000 },
];

export default function BootRail() {
  const { platformId, activeStage, isContactSubmitted } = useLayoutState();
  const [tickingTime, setTickingTime] = useState<number>(0);
  const timeRef = useRef<number>(0);

  const entries = platformId === "home" 
    ? homeEntries 
    : platformId === "contact"
      ? [{ label: "contact", baseTime: 0.000 }]
      : platformEntries;

  const activeIndex = activeStage - 1;
  const activeEntry = entries[activeIndex] || entries[0];

  // Tick the timestamp upward for the active slide
  useEffect(() => {
    if (platformId === "contact") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTickingTime(0);
      return;
    }

    // Reset ticker to the base time of the active stage
    const base = activeEntry.baseTime;
    timeRef.current = base;
    setTickingTime(base);

    const interval = setInterval(() => {
      timeRef.current += 0.003; // increment time
      setTickingTime(timeRef.current);
    }, 50);

    return () => clearInterval(interval);
  }, [activeStage, platformId, activeEntry]);

  // Determine active accent color
  const pageItem = platforms.find((p) => p.id === platformId);
  const accentColor = pageItem ? pageItem.accent : "#16181a";

  const handleEntryClick = (index: number) => {
    if (platformId === "contact") return;
    const target = document.getElementById(`slide-${index + 1}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5 select-none font-mono text-xs text-[#6b7075]">
      {entries.map((entry, idx) => {
        const isCurrent = idx === activeIndex;
        const isCompleted = idx < activeIndex;

        // Ticking logic formatting
        const displayTime = isCurrent 
          ? tickingTime.toFixed(3) 
          : entry.baseTime.toFixed(3);

        return (
          <div
            key={entry.label}
            onClick={() => handleEntryClick(idx)}
            className={`flex items-center gap-3 cursor-pointer group py-1 text-right justify-end transition-all duration-200 ${
              isCurrent ? "text-[#16181a] font-medium" : "hover:text-[#16181a]"
            }`}
          >
            {/* Timestamp or check icon */}
            <span className="w-16 tabular-nums opacity-80 group-hover:opacity-100">
              {platformId === "contact" && isContactSubmitted ? (
                <motion.span 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-accent-arches"
                >
                  ✓ message queued
                </motion.span>
              ) : isCompleted ? (
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-inherit"
                >
                  ✓
                </motion.span>
              ) : (
                `[ ${displayTime} ]`
              )}
            </span>

            {/* Label name */}
            <div className="relative pb-0.5">
              <span className="uppercase text-[10px] tracking-widest">{entry.label}</span>
              {isCurrent && (
                <motion.div
                  layoutId="railUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] animate-pulse"
                  style={{ backgroundColor: accentColor }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
