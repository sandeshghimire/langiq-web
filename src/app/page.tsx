"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLayoutState } from "@/components/LayoutContext";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SlideDiagram } from "@/components/diagrams/SlideDiagram";

interface HomeSlide {
  stage: number;
  heading: string;
  sub?: string;
  bullets: string[];
  ctaText?: string;
  ctaHref?: string;
}

const homeSlides: HomeSlide[] = [
  {
    stage: 1,
    heading: "From silicon to shipped.",
    sub: "Six embedded platforms. One complete production software stack on every one.",
    bullets: [
      "Reproducible Yocto-based embedded Linux, validated on six silicon families.",
      "BSP, bootloader, kernel, drivers, middleware, OTA, SDK, RTOS — owned end to end.",
      "Industry-specific images, signed and traceable. Customer owns the build.",
      "Skip 6–12 months of platform engineering. Start application work on day one.",
    ],
    ctaText: "Talk to engineering",
    ctaHref: "/contact",
  },
  {
    stage: 2,
    heading: "Arches",
    sub: "Production-Ready Embedded Linux for NVIDIA Jetson — TX2, Xavier NX, Orin, Thor.",
    bullets: [
      "Hardened Yocto build replacing ad-hoc JetPack / L4T images, customer-owned.",
      "Custom BSP, multi-stage boot, kernel, PREEMPT_RT — for your carrier, not the devkit.",
      "Industry images: arches-robotics, arches-iot, arches-automotive, arches-medical, arches-vision.",
      "A/B OTA, signed updates, RTOS on SPE for deterministic control.",
    ],
    ctaText: "Explore Arches →",
    ctaHref: "/arches",
  },
  {
    stage: 3,
    heading: "Acadia",
    sub: "Production-Ready Embedded Linux for Raspberry Pi — CM4, CM5, Pi 4, Pi 5, Pico.",
    bullets: [
      "Minimal, reproducible Yocto build replacing stock Raspberry Pi OS for production.",
      "Custom BSP and carrier-board bring-up for CM4 / CM5 designs.",
      "Industry images: rpi-iot, rpi-industrial, rpi-robotics, rpi-kiosk / hmi.",
      "tryboot A/B OTA, signed boot chain on CM4 / CM5, Pico companions for real-time I/O.",
    ],
    ctaText: "Explore Acadia →",
    ctaHref: "/acadia",
  },
  {
    stage: 4,
    heading: "Zion",
    sub: "Production-Ready Embedded Linux for AMD Xilinx Zynq — 7000, UltraScale+ MPSoC, Versal, Kria.",
    bullets: [
      "Yocto / PetaLinux unifying the full boot chain, kernel, rootfs, and bitstream in one build.",
      "Custom FSBL, ATF, U-Boot, bitstream-aware OTA — Zynq multiboot and golden recovery.",
      "Industry images: zion-robotics, zion-industrial, zion-automotive, zion-medical.",
      "PL drivers (AXI DMA / GPIO / custom IP) and OpenAMP / RPMsg between APU and RPU.",
    ],
    ctaText: "Explore Zion →",
    ctaHref: "/zion",
  },
  {
    stage: 5,
    heading: "Pinnacle",
    sub: "Production-Ready Embedded Linux for NXP i.MX — 8M (Mini / Nano / Plus), 93, 95.",
    bullets: [
      "Validated on i.MX 8M family, i.MX 93 (FRDM), scalable to i.MX 95.",
      "Multi-stage boot: BootROM → SPL → U-Boot → ATF → OP-TEE → Linux.",
      "Industry images: pinnacle-iot, pinnacle-industrial, pinnacle-automotive, pinnacle-medical.",
      "HAB / AHAB secure boot, EdgeLock integration, RTOS on Cortex-M7 / M33 with RPMsg.",
    ],
    ctaText: "Explore Pinnacle →",
    ctaHref: "/pinnacle",
  },
  {
    stage: 6,
    heading: "Joshua",
    sub: "Production-Ready Embedded Linux for TI Sitara — AM335x, AM62x, AM64x.",
    bullets: [
      "Deterministic I/O with PRU-ICSS, industrial networking, long-lifecycle support.",
      "Multi-stage boot: ROM → SPL / tiboot3 → U-Boot → Linux (incl. SYSFW / TIFS on AM6x).",
      "Industry images: joshua-industrial, joshua-iot, joshua-automation, joshua-medical.",
      "EtherCAT / PROFINET on PRU, RTOS on Cortex-M4F / R5F, remoteproc and RPMsg integration.",
    ],
    ctaText: "Explore Joshua →",
    ctaHref: "/joshua",
  },
  {
    stage: 7,
    heading: "Sequoia",
    sub: "Production-Ready Embedded Linux for Intel & AMD x86 — Atom, Core, Ryzen Embedded.",
    bullets: [
      "Custom Yocto for industrial SBCs, COM Express / SMARC modules, and edge servers.",
      "UEFI / coreboot, secure boot with custom keys, TPM 2.0, LUKS + TPM sealing.",
      "Industry images: sequoia-industrial, sequoia-iot / edge, sequoia-vision, sequoia-medical / defense.",
      "KVM / ACRN consolidation, PREEMPT_RT, isolated cores, Xenomai where hard real-time is required.",
    ],
    ctaText: "Explore Sequoia →",
    ctaHref: "/sequoia",
  },
  {
    stage: 8,
    heading: "Stop trying to hire this role.",
    sub: "Everything in your embedded Linux job description — delivered as a senior team.",
    bullets: [
      "Yocto distributions, BSPs, U-Boot, kernel, drivers, device trees — owned end to end.",
      "OTA, A/B updates, secure boot, CI / CD image builds, reproducible releases.",
      "Productive on your hardware in weeks — with documented handoff, not lock-in.",
      "Reproducible builds with SBOMs — ready for ISO 26262, IEC 62304, IEC 61508, DO-178C.",
    ],
    ctaText: "Talk to engineering",
    ctaHref: "/contact",
  },
  {
    stage: 9,
    heading: "One engineering methodology. Six platforms. Customer-owned.",
    sub: "Platform → independent V&V (Polaris) → HIL (Orion) → field data logging (Vela) — via SiliconCentric.",
    bullets: [
      "~90% of the embedded Linux market covered by the six platform families.",
      "Customer owns everything: full source, build system, documentation — no lock-in.",
      "Request an evaluation image for your target platform.",
      "Or schedule a 30-minute platform architecture call.",
    ],
    ctaText: "Talk to engineering",
    ctaHref: "/contact",
  },
];

export default function HomePage() {
  const { activeStage, setActiveStage, setScrollProgress } = useLayoutState();
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const activeStageRef = useRef(activeStage);
  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

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

  const [relaxSnap, setRelaxSnap] = useState(false);
  useEffect(() => {
    const check = () => setRelaxSnap(window.innerHeight < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main id="main" className="relative w-full h-screen overflow-hidden bg-[#faf9f5]">
      <div
        ref={containerRef}
        className="scroll-container w-full h-full relative z-10"
        style={relaxSnap ? { scrollSnapType: "y proximity" } : undefined}
      >
        {homeSlides.map((slide) => {
          // Alternate columns per slide. Same pattern as the platform
          // pages: odd stages = text left / diagram right, even stages
          // = diagram left / text right. The visual rhythm carries
          // through the whole scroll.
          const diagramFirst = slide.stage % 2 === 0;
          return (
            <div
              key={slide.stage}
              id={`slide-${slide.stage}`}
              className="scroll-slide w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto items-center gap-10 lg:gap-20">
                {/* Left column: title, summary, bullets. Nothing else. */}
                <div
                  className={`flex flex-col gap-7 w-full relative z-20 ${diagramFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  {/* Kicker / section label. The mono eyebrow stays —
                    Anthropic's pages also use a small mono "tag" for
                    stage metadata above the headline. */}
                  <motion.span
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
                    className="font-mono text-[11px] tracking-[0.18em] text-[#cc785c] uppercase"
                  >
                    {String(slide.stage).padStart(2, "0")} / 09
                  </motion.span>

                  <motion.h1
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut" }}
                    className="font-display font-medium text-5xl md:text-6xl lg:text-7xl text-[#1f1e1c] tracking-[-0.02em] leading-[1.02]"
                    style={{ fontVariationSettings: "'opsz' 36" }}
                  >
                    {slide.heading}
                  </motion.h1>

                  {slide.sub && (
                    <motion.p
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.35 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.5,
                        delay: reducedMotion ? 0 : 0.15,
                        ease: "easeOut",
                      }}
                      className="font-display italic font-normal text-xl md:text-2xl text-[#6f6c66] max-w-md leading-[1.35]"
                    >
                      {slide.sub}
                    </motion.p>
                  )}

                  {slide.bullets.length > 0 && (
                    <ul className="flex flex-col gap-3 max-w-md mt-2">
                      {slide.bullets.slice(0, 5).map((bullet, idx) => (
                        <motion.li
                          key={`${slide.stage}-${idx}`}
                          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.35 }}
                          transition={{
                            duration: reducedMotion ? 0 : 0.4,
                            delay: reducedMotion ? 0 : 0.2 + idx * 0.08,
                            ease: "easeOut",
                          }}
                          className="flex items-start gap-3.5 text-[17px] text-[#1f1e1c] font-sans leading-[1.6]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[14px] block w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "#cc785c" }}
                          />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {slide.ctaText && slide.ctaHref && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.35 }}
                      transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
                      className="mt-6 flex items-center gap-5"
                    >
                      <Link
                        href={slide.ctaHref}
                        className="inline-flex items-center gap-2 font-sans text-[15px] font-medium tracking-tight px-6 py-3 bg-[#cc785c] text-white border border-[#cc785c] hover:bg-[#b5654c] hover:border-[#b5654c] transition-all duration-200 rounded-[3px]"
                      >
                        {slide.ctaText}
                        <span aria-hidden="true" className="text-[15px] leading-none">→</span>
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Right column: the diagram for this slide. Order
                  alternates per slide for visual rhythm. */}
                <motion.div
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
                  className={`w-full aspect-[4/3] relative z-10 flex items-center justify-center ${diagramFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <SlideDiagram platform={null} stage={slide.stage} isHome />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
