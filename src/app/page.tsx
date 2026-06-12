"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLayoutState } from "@/components/LayoutContext";
import { motion, useReducedMotion } from "framer-motion";
import LivingChip from "@/components/LivingChip";
import SplitFlapCounter from "@/components/SplitFlapCounter";
import Link from "next/link";

interface HomeSlide {
  stage: number;
  eyebrow: string;
  heading: string;
  sub?: string;
  bullets: string[];
  tags?: string[];
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

const homeSlides: HomeSlide[] = [
  {
    stage: 1,
    eyebrow: "SOCCENTRIC // EMBEDDED PLATFORMS",
    heading: "From silicon to shipped.",
    sub: "Six embedded platforms. One complete production software stack on every one.",
    bullets: [],
    ctaText: "Explore the platforms ↓",
    ctaHref: "#slide-2",
    secondaryCtaText: "Talk to engineering",
    secondaryCtaHref: "/contact",
  },
  {
    stage: 2,
    eyebrow: "NVIDIA JETSON",
    heading: "Arches",
    bullets: [
      "Inference on the GPU. Control loops on the MCU. One board does the whole robot."
    ],
    tags: ["Robotics", "Drones", "Industrial inspection"],
    ctaText: "Explore Arches →",
    ctaHref: "/arches",
  },
  {
    stage: 3,
    eyebrow: "RASPBERRY PI CM4/CM5",
    heading: "Acadia",
    bullets: [
      "Your prototype already runs on it. Now it survives the factory floor."
    ],
    tags: ["IoT", "Smart buildings", "Kiosks"],
    ctaText: "Explore Acadia →",
    ctaHref: "/acadia",
  },
  {
    stage: 4,
    eyebrow: "XILINX ZYNQ",
    heading: "Zion",
    bullets: [
      "When the deadline is in microseconds, software isn't enough."
    ],
    tags: ["Defense", "Aerospace", "ADAS"],
    ctaText: "Explore Zion →",
    ctaHref: "/zion",
  },
  {
    stage: 5,
    eyebrow: "NXP i.MX",
    heading: "Pinnacle",
    bullets: [
      "Silicon that outlives your product plan. Linux that passes your audit."
    ],
    tags: ["Medical", "Industrial gateways", "Aerospace"],
    ctaText: "Explore Pinnacle →",
    ctaHref: "/pinnacle",
  },
  {
    stage: 6,
    eyebrow: "TI SITARA",
    heading: "Joshua",
    bullets: [
      "FPGA-grade timing. Microcontroller-grade cost. Linux-grade ecosystem."
    ],
    tags: ["Industrial control", "Motor drives", "Energy"],
    ctaText: "Explore Joshua →",
    ctaHref: "/joshua",
  },
  {
    stage: 7,
    eyebrow: "INTEL & AMD x86",
    heading: "Sequoia",
    bullets: [
      "If it only runs on x86, it runs here — with all the I/O it needs."
    ],
    tags: ["Edge servers", "Networking", "Defense compute"],
    ctaText: "Explore Sequoia →",
    ctaHref: "/sequoia",
  },
  {
    stage: 8,
    eyebrow: "STAGE 08 / TEAM",
    heading: "Stop trying to hire this role.",
    bullets: [
      "Everything in your embedded Linux job description — delivered as a senior team.",
      "Yocto distributions, BSPs, U-Boot, kernel, drivers, device trees: owned end to end.",
      "OTA, A/B updates, secure boot, CI/CD image builds, reproducible releases.",
      "Productive on your hardware in weeks — with documented handoff, not lock-in."
    ],
    // req.md §9.1: S8's CTA is the spec sentence verbatim — the "send us
    // your job description" pitch, not "Talk to engineering".
    ctaText: "Send us your job description — we'll send back how we'd deliver it.",
    ctaHref: "/contact",
  },
  {
    stage: 9,
    eyebrow: "boot complete ✓ 0 errors",
    heading: "Pick a platform. We deliver everything between the silicon and your application.",
    bullets: [],
    ctaText: "Talk to engineering",
    ctaHref: "/contact",
    secondaryCtaText: "Send us your schematic — we'll tell you what bring-up looks like.",
  },
];

export default function HomePage() {
  const { activeStage, setActiveStage, setScrollProgress } = useLayoutState();
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  // #46: Mirror activeStage in a ref so the scroll listener can compare
  // against the latest value without re-binding on every stage change.
  const activeStageRef = useRef(activeStage);
  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

  // Update layout context on scroll
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

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isChipLeft = activeStage % 2 === 0;

  // Relax strict scroll-snap on short viewports — req.md §10 "scroll-snap
  // relaxed on short viewports". Detected at mount + on resize.
  const [relaxSnap, setRelaxSnap] = useState(false);
  useEffect(() => {
    const check = () => setRelaxSnap(window.innerHeight < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main id="main" className="relative w-full h-screen overflow-hidden bg-[#fafaf8]">
      {/* Scroll Snap Sections */}
      <div
        ref={containerRef}
        className="scroll-container w-full h-full relative z-10"
        style={relaxSnap ? { scrollSnapType: "y proximity" } : undefined}
      >
        {homeSlides.map((slide, idx) => (
          <div
            key={slide.stage}
            id={`slide-${slide.stage}`}
            ref={(el) => { slidesRef.current[idx] = el; }}
            className="scroll-slide w-full h-screen flex items-center px-6 md:px-16 lg:px-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto h-[75%] items-center gap-12">
              {/* Text Area */}
              <div
                className={`flex flex-col gap-6 w-full ${
                  isChipLeft ? "lg:col-start-2" : "lg:col-start-1"
                } relative z-20`}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#e4e2dd] pb-3 max-w-lg">
                  <TypedEyebrow text={slide.eyebrow} active={activeStage === slide.stage} />
                  <SplitFlapCounter current={slide.stage} total={9} />
                </div>

                {/* Main Headline */}
                <SweepHeading text={slide.heading} active={activeStage === slide.stage} />

                {/* Subheadline (Hero Only) */}
                {slide.sub && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={activeStage === 1 ? { opacity: 1 } : { opacity: 0 }}
                    className="font-sans text-base text-[#6b7075] -mt-2 max-w-md"
                  >
                    {slide.sub}
                  </motion.p>
                )}

                {/* Bullet List */}
                <StaggeredBullets bullets={slide.bullets} active={activeStage === slide.stage} />

                {/* Product Tags */}
                {slide.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {slide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#ffffff] border border-[#e4e2dd] rounded-[3px] text-[#6b7075]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Call To Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={activeStage === slide.stage ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-4 mt-4"
                >
                  <Link
                    href={slide.ctaHref || "#"}
                    onClick={(e) => handleCtaClick(e, slide.ctaHref || "")}
                    className="font-mono text-xs uppercase tracking-wider px-5 py-2.5 bg-[#16181a] text-[#fafaf8] border border-[#16181a] hover:bg-transparent hover:text-[#16181a] transition-all duration-300 font-bold"
                  >
                    {slide.ctaText}
                  </Link>

                  {slide.secondaryCtaText && (
                    <Link
                      href={slide.secondaryCtaHref || "/contact"}
                      className="font-mono text-xs uppercase tracking-wider text-[#6b7075] hover:text-[#16181a] transition-colors"
                    >
                      {slide.secondaryCtaText}
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Centerpiece chip — glides between left and right via
          `transform: translateX` (compositor-friendly, req.md §7 perf
          rules), with a spring easing instead of a CSS cubic-bezier. */}
      <motion.div
        className="fixed top-0 bottom-0 z-0 hidden lg:flex items-center justify-center pointer-events-none"
        style={{ left: "30vw", width: "40vw" }}
        animate={{ x: isChipLeft ? "-20vw" : "20vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <LivingChip platformId="home" stage={activeStage} />
      </motion.div>
    </main>
  );
}

// Reuse Typewriter and Heading reveals for visual consistency
function TypedEyebrow({ text, active }: { text: string; active: boolean }) {
  return (
    <span className="font-mono text-[10px] tracking-widest font-semibold uppercase text-[#16181a]">
      <TypedText key={`${active ? "on" : "off"}::${text}`} text={text} active={active} />
    </span>
  );
}

function TypedText({ text, active }: { text: string; active: boolean }) {
  // Track only the typed length; the visible string is derived. Re-mount via
  // `key` resets the length so we never have to set state in an effect.
  const [length, setLength] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reducedMotion) {
      // Reduced-motion is a system-level signal: snap to the full string
      // immediately when the user has it set. The setState here is a
      // legitimate external-system sync (browser media query), not a
      // cascading render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLength(text.length);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setLength(i);
      if (i >= text.length) clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [text, active, reducedMotion]);

  const visible = active ? text.slice(0, length) : "";
  return <>{visible || "\u00A0"}</>;
}

function SweepHeading({ text, active }: { text: string; active: boolean }) {
  const reducedMotion = useReducedMotion();
  // req.md §7 perf rules: only transform / opacity / stroke-dashoffset /
  // pathLength. The reveal is implemented with a mask-image linear-
  // gradient whose stop position is animated as `x` (transform) on the
  // overlay div — paint-free on the compositor thread.
  return (
    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#16181a] tracking-tight relative overflow-hidden select-none py-1">
      <span
        className="block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 100%, transparent 100%)",
          WebkitMaskSize: "200% 100%",
          WebkitMaskPosition: active ? "0% 0%" : "100% 0%",
          maskImage:
            "linear-gradient(to right, black 0%, black 100%, transparent 100%)",
          maskSize: "200% 100%",
          maskPosition: active ? "0% 0%" : "100% 0%",
          transition: reducedMotion
            ? "none"
            : "mask-position 0.8s ease-in-out, -webkit-mask-position 0.8s ease-in-out",
        }}
      >
        {text}
      </span>
      {active && (
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-[1px] bg-[#16181a] z-10"
        />
      )}
    </h1>
  );
}

function StaggeredBullets({ bullets, active }: { bullets: string[]; active: boolean }) {
  const reducedMotion = useReducedMotion();
  return (
    <ul className="flex flex-col gap-3 max-w-lg mt-1">
      {bullets.map((bullet, idx) => (
        <li key={idx} className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
              duration: reducedMotion ? 0 : 0.4,
              delay: reducedMotion ? 0 : 0.2 + idx * 0.08,
              ease: "easeOut",
            }}
            className="flex items-start gap-3 text-sm md:text-base text-[#6b7075] font-sans leading-relaxed"
          >
            <span className="font-mono text-xs mt-1 text-[#16181a]">
              &gt;
            </span>
            <span>{bullet}</span>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
