"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLayoutState } from "./LayoutContext";
import { platforms } from "@/data/platforms";
import { motion, useReducedMotion } from "framer-motion";

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
  const reducedMotion = useReducedMotion();

  const entries =
    platformId === "home"
      ? homeEntries
      : platformId === "contact"
        ? [{ label: "contact", baseTime: 0.000 }]
        : platformEntries;

  const activeIndex = activeStage - 1;
  const activeEntry = entries[activeIndex] || entries[0];

  // Tick the timestamp upward for the active slide. Skipped under
  // prefers-reduced-motion (req.md §7 #11).
  useEffect(() => {
    if (platformId === "contact") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTickingTime(0);
      return;
    }
    if (reducedMotion) return;

    const base = activeEntry.baseTime;
    timeRef.current = base;
    setTickingTime(base);

    const interval = setInterval(() => {
      timeRef.current += 0.003;
      setTickingTime(timeRef.current);
    }, 50);

    return () => clearInterval(interval);
  }, [activeStage, platformId, activeEntry, reducedMotion]);

  const pageItem = platforms.find((p) => p.id === platformId);
  const accentColor = pageItem ? pageItem.accent : "#16181a";

  const handleEntryClick = (index: number) => {
    if (platformId === "contact") return;
    const target = document.getElementById(`slide-${index + 1}`);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <>
      {/* Full rail — desktop only (req.md §10: rail → dot strip < 768px). */}
      <nav
        aria-label="Section navigation"
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 select-none font-mono text-xs text-[#6b7075]"
      >
        {entries.map((entry, idx) => {
          const isCurrent = idx === activeIndex;
          const isCompleted = idx < activeIndex;
          const displayTime = isCurrent ? tickingTime.toFixed(3) : entry.baseTime.toFixed(3);

          return (
            <button
              type="button"
              key={entry.label}
              onClick={() => handleEntryClick(idx)}
              aria-current={isCurrent ? "step" : undefined}
              aria-label={`Jump to ${entry.label} (stage ${idx + 1} of ${entries.length})`}
              // Touch-friendly target — req.md §10.
              className={`group flex items-center gap-3 cursor-pointer py-2 pr-2 text-right justify-end transition-all duration-200 ${
                isCurrent ? "text-[#16181a] font-medium" : "hover:text-[#16181a]"
              }`}
            >
              <span
                aria-hidden="true"
                className="w-16 tabular-nums opacity-80 group-hover:opacity-100"
              >
                {platformId === "contact" && isContactSubmitted ? (
                  <motion.span
                    initial={reducedMotion ? false : { scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-accent-arches"
                  >
                    ✓ message queued
                  </motion.span>
                ) : isCompleted ? (
                  <motion.span
                    initial={reducedMotion ? false : { scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-inherit"
                  >
                    ✓
                  </motion.span>
                ) : (
                  `[ ${displayTime} ]`
                )}
              </span>

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
            </button>
          );
        })}
      </nav>

      {/* Dot-strip fallback — mobile only (req.md §10). Same targets as the
          desktop rail, but compact. */}
      <nav
        aria-label="Section navigation"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex md:hidden flex-col gap-2"
      >
        {entries.map((entry, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <button
              type="button"
              key={`dot-${entry.label}`}
              onClick={() => handleEntryClick(idx)}
              aria-current={isCurrent ? "step" : undefined}
              aria-label={`Jump to ${entry.label} (stage ${idx + 1} of ${entries.length})`}
              // ≥ 44px tap target.
              className="w-11 h-11 flex items-center justify-center p-2"
            >
              <span
                aria-hidden="true"
                className={`block rounded-full transition-all duration-200 ${
                  isCurrent ? "w-2.5 h-2.5" : "w-1.5 h-1.5 opacity-50"
                }`}
                style={{ backgroundColor: isCurrent ? accentColor : "#6b7075" }}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}
