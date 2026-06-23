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
    heading: "SoCcentric",
    sub: "You need Yocto BSP, kernel, bootloader, RTOS, OTA, and SDK on your embedded hardware. We build and own the full software stack — across six silicon families — and hand it off to you. No lock-in.",
    bullets: [
      "Embedded Linux platform engineering across NVIDIA Jetson, Raspberry Pi, AMD Zynq, NXP i.MX, TI Sitara, and Intel / AMD x86.",
      "BSP, Yocto, kernel, bootloader, RTOS, middleware, OTA, and SDK — owned end to end.",
      "We work directly with your hardware engineering team from schematic review to production.",
      "You own the full source, build system, and documentation.",
      "Skip 6–12 months of platform engineering. Start application work on day one.",
    ],
    ctaText: "Talk to engineering",
    ctaHref: "/contact",
  },
  {
    stage: 2,
    heading: "Our Offering",
    sub: "You posted a job for a senior embedded Linux engineer. We are the team behind that job description — BSP, Yocto, kernel, drivers, RTOS, OTA, and SDK, delivered across your silicon family and handed off to your team.",
    bullets: [
      "We cover what is in your embedded Linux job description — from schematic review to SDK handoff.",
      "Engagement starts at board bring-up and ends when your team can build, debug, and ship independently.",
      "We work on your hardware, your carrier board, your requirements — not a reference design.",
      "Reproducible builds, full source handover, SBOM — no dependency on us after handoff.",
      "Available for a single platform engagement or across all six silicon families.",
    ],
    ctaText: "Talk to engineering",
    ctaHref: "/contact",
  },
  {
    stage: 3,
    heading: "Our Platform",
    sub: "Every engagement delivers the same full stack — from silicon to application. BSP, Yocto image, bootloader, kernel, RTOS, middleware, OTA, and SDK. Six silicon families, one methodology, one handoff package.",
    bullets: [
      "Board Bring-Up and BSP — schematic review, device tree, peripheral validation.",
      "Yocto and Embedded Linux — reproducible, minimal, locked-down, SBOM-ready.",
      "Bootloader and Boot Optimization — golden boot, failsafe, A/B, boot time targets.",
      "Linux Kernel and Device Drivers — customized for your hardware, not the devkit.",
      "RTOS, Middleware, OTA, and SDK — the full stack, validated and handed off.",
    ],
    ctaText: "Talk to engineering",
    ctaHref: "/contact",
  },
  {
    stage: 4,
    heading: "NVIDIA Jetson",
    sub: "You need a production image on Jetson TX2, Xavier NX, Orin, or Thor. JetPack is not a production OS. We replace ad-hoc JetPack / L4T images with a reproducible Yocto build — CUDA, TensorRT, and DeepStream intact, fully owned by you.",
    bullets: [
      "Yocto BSP on meta-tegra for TX2, Xavier NX, Orin Nano / NX / AGX, Thor.",
      "Replaces JetPack / L4T with a reproducible, auditable, customer-owned build.",
      "CUDA, TensorRT, DeepStream, cuDNN preserved in the Yocto image.",
      "FreeRTOS on the Cortex-R SPE for hard real-time alongside Linux.",
      "Signed boot, A/B OTA, application SDK and eSDK — handed off to your team.",
    ],
    ctaText: "Explore NVIDIA Jetson →",
    ctaHref: "/arches",
  },
  {
    stage: 5,
    heading: "Raspberry Pi",
    sub: "You need a production image for CM4, CM5, Pi 4, or Pi 5. Stock Raspberry Pi OS is not it. We build and own the full software stack — BSP, Yocto, kernel, bootloader, RTOS, OTA — on your carrier board, handed off to you.",
    bullets: [
      "Yocto BSP for CM4, CM5, Pi 4, Pi 5. Pico companion firmware on RP2040 / RP2350.",
      "Replaces stock Raspberry Pi OS with a minimal, reproducible Yocto build.",
      "Custom BSP and device tree for your carrier board — not the IO board.",
      "FreeRTOS or Zephyr on the Pico for hard real-time I/O alongside Linux.",
      "Signed boot on CM4 / CM5, A/B OTA, application SDK and eSDK — handed off to your team.",
    ],
    ctaText: "Explore Raspberry Pi →",
    ctaHref: "/acadia",
  },
  {
    stage: 6,
    heading: "AMD Xilinx Zynq",
    sub: "You need Linux on the processing system and your FPGA design on the programmable logic — versioned, built, and updated together. We deliver the full stack: FSBL, ATF, U-Boot, kernel, rootfs, and bitstream as one owned platform.",
    bullets: [
      "Yocto / PetaLinux BSP for Zynq-7000, UltraScale+ MPSoC, Versal, Kria KV260 / KR260.",
      "PS + PL + RPU firmware versioned and built as one platform — not patched together.",
      "FreeRTOS or Zephyr on the RPU with OpenAMP / RPMsg to Linux.",
      "Bitstream-aware A/B OTA — Linux image and FPGA bitstream updated atomically.",
      "Application SDK, eSDK, and Vivado JTAG debug — handed off to your team.",
    ],
    ctaText: "Explore AMD Xilinx Zynq →",
    ctaHref: "/zion",
  },
  {
    stage: 7,
    heading: "NXP i.MX",
    sub: "You need a secure, production image on i.MX 8M, i.MX 93, or i.MX 95. The NXP BSP is not a product. We build a reproducible Yocto platform with HAB / AHAB secure boot and EdgeLock device identity baked in — fully owned by you.",
    bullets: [
      "Yocto BSP for i.MX 8M Mini / Nano / Plus, i.MX 93, i.MX 95.",
      "HAB / AHAB secure boot and EdgeLock device identity built into the platform.",
      "FreeRTOS or Zephyr on Cortex-M7 / M33 with RPMsg to Linux.",
      "A/B OTA signed and chained to the HAB / AHAB hardware root of trust.",
      "Application SDK, eSDK, and JTAG debug — handed off to your team.",
    ],
    ctaText: "Explore NXP i.MX →",
    ctaHref: "/pinnacle",
  },
  {
    stage: 8,
    heading: "TI Sitara",
    sub: "You need a production image on AM335x, AM62x, or AM64x. The TI Processor SDK is not a product. We build a reproducible Yocto platform with PRU-ICSS for sub-microsecond deterministic I/O and long-lifecycle support for industrial deployments.",
    bullets: [
      "Yocto BSP for AM335x, AM62x, AM64x — BeagleBone and TI EVK ecosystems.",
      "PRU-ICSS firmware for sub-microsecond I/O — EtherCAT, PROFINET, custom protocols.",
      "FreeRTOS or Zephyr on Cortex-M4F / R5F with RPMsg to Linux.",
      "A/B OTA covering kernel, rootfs, and PRU firmware atomically.",
      "Application SDK, eSDK, and CCS JTAG debug — handed off to your team.",
    ],
    ctaText: "Explore TI Sitara →",
    ctaHref: "/joshua",
  },
  {
    stage: 9,
    heading: "Intel / AMD x86",
    sub: "You have an industrial SBC, COM Express module, or edge server on Intel or AMD silicon. Generic Ubuntu or Debian is not a production OS. We build a reproducible Yocto platform — secure boot, TPM 2.0, workload consolidation — fully owned by you.",
    bullets: [
      "Yocto BSP for industrial SBCs, COM Express / SMARC modules, and edge servers.",
      "UEFI / coreboot, secure boot with custom keys, TPM 2.0, LUKS + TPM sealing.",
      "KVM / ACRN consolidation — replace control, HMI, and gateway boxes with one machine.",
      "A/B OTA via RAUC, Mender, or ostree, chained to UEFI secure boot.",
      "Application SDK, eSDK, and eBPF-based profiling — handed off to your team.",
    ],
    ctaText: "Explore Intel / AMD x86 →",
    ctaHref: "/sequoia",
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
