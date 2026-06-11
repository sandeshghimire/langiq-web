"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLayoutState } from "./LayoutContext";
import { PlatformData } from "@/data/platforms";
import { motion } from "framer-motion";
import LivingChip from "./LivingChip";
import SplitFlapCounter from "./SplitFlapCounter";
import Link from "next/link";

interface PlatformPageProps {
  platform: PlatformData;
}

export default function PlatformPage({ platform }: PlatformPageProps) {
  const { activeStage, setActiveStage, setScrollProgress } = useLayoutState();
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progress and active slide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      // Calculate current slide based on scroll position
      const slideHeight = clientHeight;
      const currentSlide = Math.round(scrollTop / slideHeight) + 1;
      const boundedSlide = Math.min(Math.max(currentSlide, 1), 9);

      if (boundedSlide !== activeStage) {
        setActiveStage(boundedSlide);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeStage, setActiveStage, setScrollProgress]);

  // The chip alternates left/right per slide.
  const isChipLeft = activeStage % 2 === 0;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#fafaf8]">
      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="scroll-container w-full h-full relative z-10"
      >
        {platform.slides.map((slide) => (
          <div
            key={slide.stage}
            id={`slide-${slide.stage}`}
            className="scroll-slide w-full h-screen flex items-center px-6 md:px-16 lg:px-24"
          >
            {/* Split layout inside each page */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto h-[75%] items-center gap-12">
              {/* Text column - moves left or right depending on slide stage */}
              <div
                className={`flex flex-col gap-6 w-full ${
                  isChipLeft ? "lg:col-start-2" : "lg:col-start-1"
                } relative z-20`}
              >
                {/* Stage Info Header */}
                <div className="flex items-center justify-between border-b border-[#e4e2dd] pb-3 max-w-lg">
                  <TypedEyebrow text={slide.eyebrow} active={activeStage === slide.stage} accent={platform.accent} />
                  <SplitFlapCounter current={slide.stage} total={9} />
                </div>

                {/* Animated Heading */}
                <SweepHeading text={slide.heading} active={activeStage === slide.stage} accent={platform.accent} />

                {/* Bullets List */}
                <StaggeredBullets bullets={slide.bullets} active={activeStage === slide.stage} accent={platform.accent} />

                {/* Bottom CTA Actions */}
                {slide.stage === 9 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={activeStage === 9 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap items-center gap-4 mt-6"
                  >
                    <Link
                      href="/contact"
                      className="font-mono text-xs uppercase tracking-wider px-5 py-2.5 bg-[#16181a] text-[#fafaf8] border border-[#16181a] hover:bg-transparent hover:text-[#16181a] transition-all duration-300 font-bold"
                    >
                      Talk to engineering
                    </Link>
                    {platform.id !== "sequoia" ? (
                      <Link
                        href={`/${getNextPlatform(platform.id)}`}
                        className="font-mono text-xs uppercase tracking-wider text-[#6b7075] hover:text-[#16181a] transition-colors"
                      >
                        Next platform: {getNextPlatformName(platform.id)} →
                      </Link>
                    ) : (
                      <Link
                        href="/"
                        className="font-mono text-xs uppercase tracking-wider text-[#6b7075] hover:text-[#16181a] transition-colors"
                      >
                        Back to platforms →
                      </Link>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Living Chip column: Glides smoothly between Left (0%) and Right (50%) */}
      <div
        className="fixed top-0 bottom-0 z-0 hidden lg:flex items-center justify-center pointer-events-none transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1)"
        style={{
          left: isChipLeft ? "10vw" : "50vw",
          width: "40vw",
        }}
      >
        <LivingChip platformId={platform.id} stage={activeStage} />
      </div>
    </div>
  );
}

// Sub-component: Character-by-character typewriter for eyebrow
function TypedEyebrow({ text, active, accent }: { text: string; active: boolean; accent: string }) {
  return (
    <span className="font-mono text-[10px] tracking-widest font-semibold uppercase" style={{ color: accent }}>
      <TypedText key={`${active ? "on" : "off"}::${text}`} text={text} active={active} />
    </span>
  );
}

function TypedText({ text, active }: { text: string; active: boolean }) {
  // We track only the "current typed length" in state. The visible string is
  // derived from it on every render, so we never have to set state in an
  // effect to reset the display. Re-mount via `key` resets length to 0.
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (!active) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setLength(i);
      if (i >= text.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [text, active]);

  const visible = active ? text.slice(0, length) : "";
  return <>{visible || "\u00A0"}</>;
}

// Sub-component: Heading reveal with sweep scanline
function SweepHeading({ text, active, accent }: { text: string; active: boolean; accent: string }) {
  return (
    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#16181a] tracking-tight relative overflow-hidden select-none py-1">
      {/* Visual slide Heading */}
      <motion.span
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        animate={active ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="block"
      >
        {text}
      </motion.span>
      
      {/* 1px Scanline traveling ahead of reveal */}
      {active && (
        <motion.div
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-[2px] z-10"
          style={{ backgroundColor: accent }}
        />
      )}
    </h2>
  );
}

// Sub-component: Staggered bullets animation
function StaggeredBullets({ bullets, active, accent }: { bullets: string[]; active: boolean; accent: string }) {
  return (
    <ul className="flex flex-col gap-4 max-w-lg mt-2">
      {bullets.map((bullet, idx) => (
        <li key={idx} className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
              duration: 0.4,
              delay: 0.2 + idx * 0.08,
              ease: "easeOut",
            }}
            className="flex items-start gap-3 text-sm md:text-base text-[#6b7075] font-sans leading-relaxed"
          >
            {/* > Prefix types first */}
            <span className="font-mono text-xs mt-1 selection:bg-transparent" style={{ color: accent }}>
              &gt;
            </span>
            <span>{bullet}</span>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}

// Helper methods to resolve next route
const platformIds = ["arches", "acadia", "zion", "pinnacle", "joshua", "sequoia"];
const platformNames = ["Acadia", "Zion", "Pinnacle", "Joshua", "Sequoia", "Home"];

function getNextPlatform(currentId: string): string {
  const idx = platformIds.indexOf(currentId);
  if (idx === -1 || idx === platformIds.length - 1) return "";
  return platformIds[idx + 1];
}

function getNextPlatformName(currentId: string): string {
  const idx = platformIds.indexOf(currentId);
  if (idx === -1 || idx === platformIds.length - 1) return "";
  return platformNames[idx];
}
