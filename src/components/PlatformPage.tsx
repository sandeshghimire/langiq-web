"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLayoutState } from "./LayoutContext";
import { PlatformData } from "@/data/platforms";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SlideDiagram } from "./diagrams/SlideDiagram";

interface PlatformPageProps {
  platform: PlatformData;
}

export default function PlatformPage({ platform }: PlatformPageProps) {
  const { activeStage, setActiveStage, setScrollProgress } = useLayoutState();
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Mirror activeStage in a ref so the scroll listener can compare
  // against the latest value without re-binding on every stage change.
  const activeStageRef = useRef(activeStage);
  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

  // Monitor scroll progress and active slide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      const slideHeight = clientHeight;
      const currentSlide = Math.round(scrollTop / slideHeight) + 1;
      const boundedSlide = Math.min(Math.max(currentSlide, 1), 9);

      if (boundedSlide !== activeStageRef.current) {
        setActiveStage(boundedSlide);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [setActiveStage, setScrollProgress]);

  // Relax strict scroll-snap on short viewports.
  const [relaxSnap, setRelaxSnap] = useState(false);
  useEffect(() => {
    const check = () => setRelaxSnap(window.innerHeight < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main id="main" className="relative w-full h-screen overflow-hidden bg-[#fafaf8]">
      <div
        ref={containerRef}
        className="scroll-container w-full h-full relative z-10"
        style={relaxSnap ? { scrollSnapType: "y proximity" } : undefined}
      >
        {platform.slides.map((slide) => {
          // Alternate columns: odd stages = text left / diagram right,
          // even stages = diagram left / text right. The diagram glides
          // across the column gap on each transition, which gives the
          // page a "running" feel without re-mounting either column.
          const diagramFirst = slide.stage % 2 === 0;

          return (
            <div
              key={slide.stage}
              id={`slide-${slide.stage}`}
              className="scroll-slide w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-16"
            >
              {/* Two-column grid. Both columns are siblings in the same
                grid — order is set with `order-` classes per slide. */}
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto items-center gap-10 lg:gap-16">
                {/* Text column: title, summary, bullets. Nothing else. */}
                <div
                  className={`flex flex-col gap-6 w-full relative z-20 ${diagramFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  {/* Title */}
                  <motion.h2
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut" }}
                    className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-[#16181a] tracking-tight leading-[0.95]"
                  >
                    {slide.heading}
                  </motion.h2>

                  {/* Brief summary — only on stage 1 */}
                  {slide.stage === 1 && platform.edgeOneLiner && (
                    <motion.p
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.5,
                        delay: reducedMotion ? 0 : 0.15,
                        ease: "easeOut",
                      }}
                      className="font-sans text-lg text-[#6b7075] max-w-md leading-relaxed"
                    >
                      {platform.edgeOneLiner}
                    </motion.p>
                  )}

                  {/* 4-5 bullets */}
                  <ul className="flex flex-col gap-3 max-w-md mt-2">
                    {slide.bullets.slice(0, 5).map((bullet, idx) => (
                      <motion.li
                        key={`${slide.stage}-${idx}`}
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: reducedMotion ? 0 : 0.4,
                          delay: reducedMotion ? 0 : 0.2 + idx * 0.08,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-3 text-base text-[#16181a] font-sans leading-relaxed"
                      >
                        <span
                          className="font-mono text-sm mt-1 select-none"
                          style={{ color: platform.accent }}
                        >
                          &gt;
                        </span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stage 9: small CTA link, no extra panel */}
                  {slide.stage === 9 && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reducedMotion ? 0 : 0.6 }}
                      className="mt-6"
                    >
                      <Link
                        href="/contact"
                        className="inline-block font-mono text-xs uppercase tracking-wider px-5 py-2.5 bg-[#16181a] text-[#fafaf8] border border-[#16181a] hover:bg-transparent hover:text-[#16181a] transition-all duration-300 font-bold"
                      >
                        Talk to engineering
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Diagram column. Sits inside the grid (real 50/50),
                  not a fixed overlay. Order alternates per slide. */}
                <div
                  className={`w-full aspect-[4/3] relative z-10 flex items-center justify-center ${diagramFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <SlideDiagram platform={platform} stage={slide.stage} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
