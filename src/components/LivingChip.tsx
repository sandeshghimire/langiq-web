"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { platforms } from "@/data/platforms";
import { usePageVisibility } from "@/hooks/usePageVisibility";

interface LivingChipProps {
  platformId: string;
  stage: number; // 1 to 9
}

// Map every Home stage to a platform identity so the chip morphs across
// all nine Home slides (req.md §6: "the chip assembles in the hero, then
// morphs between the six platform identities as the user scrolls").
// S9 is the panel-grid scene — handled separately, not as a platform.
function resolveActivePlatformId(platformId: string, stage: number): string {
  if (platformId !== "home") return platformId;
  if (stage === 1) return "arches";
  if (stage === 2) return "arches";
  if (stage === 3) return "acadia";
  if (stage === 4) return "zion";
  if (stage === 5) return "pinnacle";
  if (stage === 6) return "joshua";
  if (stage === 7) return "sequoia";
  if (stage === 8) return "sequoia";
  return ""; // S9 panel grid
}

// Per-platform middleware protocol set (req.md §6: each platform shows
// the protocols that match its edge).
const PROTOCOLS_BY_PLATFORM: Record<string, string[]> = {
  arches: ["ROS 2", "DDS", "MQTT"],
  acadia: ["MQTT", "DDS"],
  zion: ["DDS", "ROS 2"],
  pinnacle: ["MQTT", "OPC UA", "Modbus"],
  joshua: ["EtherCAT", "PROFINET", "OPC UA"],
  sequoia: ["DDS", "MQTT"],
};

// Coordinate table for hop points on the die, keyed by platform block name.
// Used to render the per-platform boot-chain path on stage 3.
const BOOT_HOP_COORDS: Record<string, Record<string, [number, number]>> = {
  arches: {
    "BootROM": [365, 320],
    "BCT/MB1": [365, 240],
    "MB2": [310, 200],
    "UEFI": [220, 200],
    "kernel": [180, 200],
  },
  acadia: {
    "EEPROM": [365, 320],
    "bootloader": [300, 220],
    "firmware": [220, 220],
    "kernel": [180, 220],
  },
  zion: {
    "BootROM": [365, 320],
    "FSBL": [365, 230],
    "bitstream": [365, 180],
    "U-Boot": [220, 210],
    "kernel": [180, 210],
  },
  pinnacle: {
    "BootROM": [365, 320],
    "SPL": [320, 220],
    "U-Boot": [220, 220],
    "kernel": [180, 220],
  },
  joshua: {
    "BootROM": [365, 320],
    "SPL/MLO": [320, 220],
    "U-Boot": [220, 220],
    "kernel": [180, 220],
  },
  sequoia: {
    "UEFI/coreboot": [365, 320],
    "bootloader": [220, 220],
    "kernel": [180, 220],
  },
};

// Driver modules (stage 4) — name + position outside each die corner that
// they fly in from. Lands at the I/O ring pin coords.
const DRV_MODULES = [
  { id: "I2C", fromX: 60, fromY: 200, pinX: 150, pinY: 200 },
  { id: "SPI", fromX: 60, fromY: 300, pinX: 150, pinY: 300 },
  { id: "ETH", fromX: 540, fromY: 200, pinX: 450, pinY: 200 },
  { id: "GPIO", fromX: 540, fromY: 350, pinX: 450, pinY: 350 },
  { id: "CAN", fromX: 300, fromY: 60, pinX: 300, pinY: 150 },
] as const;

// Stage 7 boot-log lines (type out in sequence on the readout).
const PROBE_LOG_LINES = [
  "> insmod soccentric.ko",
  "> probe 0x4a ...",
  "> init complete",
  "> bridge ready ✓",
] as const;

export default function LivingChip({ platformId, stage }: LivingChipProps) {
  const resolvedId = resolveActivePlatformId(platformId, stage);
  const activePlatform =
    resolvedId === "" ? null : platforms.find((item) => item.id === resolvedId) ?? null;
  const reducedMotion = useReducedMotion();

  const [otaPulse, setOtaPulse] = useState(0);
  const [bspEnumIndex, setBspEnumIndex] = useState(-1);
  // Probe-log char count for stage 7 readout. Derived from props; reset via
  // `key` on the parent when stage changes. (#19 boot-log readout.)
  const [probeCharCount, setProbeCharCount] = useState(0);
  // #42: pause idle loops (BSP / OTA / probe-log) when the tab is hidden —
  // the browser throttles requestAnimationFrame, so the underlying
  // framer-motion `repeat: Infinity` animations also stall. We just have
  // to stop pushing state updates from setInterval.
  const isVisible = usePageVisibility();

  // OTA stage simulation loops
  useEffect(() => {
    if (stage === 6 && isVisible) {
      const interval = setInterval(() => {
        setOtaPulse((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [stage, isVisible]);

  // BSP enumeration simulation loops. The setBspEnumIndex call is a
  // ref-based reset triggered by an external-system change (stage), so the
  // set-state-in-effect rule doesn't apply here.
  useEffect(() => {
    if (stage !== 2) {
      // External-system reset (stage change) — not a cascading render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBspEnumIndex(-1);
      return;
    }
    setBspEnumIndex(0);
    if (!isVisible) return;
    const interval = setInterval(() => {
      setBspEnumIndex((prev) => (prev + 1) % 6);
    }, 800);
    return () => clearInterval(interval);
  }, [stage, isVisible]);

  // Stage 7 boot-log typing loop. Reset to 0 whenever we leave stage 7
  // (via the bspEnumIndex-style external-system reset pattern).
  useEffect(() => {
    if (stage !== 7) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProbeCharCount(0);
      return;
    }
    if (reducedMotion) {
      setProbeCharCount(PROBE_LOG_LINES.join("\n").length);
      return;
    }
    if (!isVisible) return;
    const total = PROBE_LOG_LINES.join("\n").length;
    let i = 0;
    const interval = setInterval(() => {
      i = Math.min(i + 3, total);
      setProbeCharCount(i);
      if (i >= total) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [stage, reducedMotion, isVisible]);

  // Stage 9 panel grid
  if (!activePlatform && platformId === "home" && stage === 9) {
    return (
      <div className="w-full max-w-[500px] h-[500px] flex items-center justify-center relative select-none">
        <PanelGrid accent="#16181a" reducedMotion={!!reducedMotion} />
      </div>
    );
  }

  if (!activePlatform) {
    return (
      <div className="w-full max-w-[500px] h-[500px] flex items-center justify-center relative select-none">
        <HomeChip reducedMotion={!!reducedMotion} />
      </div>
    );
  }

  const accent = activePlatform.accent;

  // Render SVG base variables
  const isArches = activePlatform.id === "arches";
  const isAcadia = activePlatform.id === "acadia";
  const isZion = activePlatform.id === "zion";
  const isPinnacle = activePlatform.id === "pinnacle";
  const isJoshua = activePlatform.id === "joshua";
  const isSequoia = activePlatform.id === "sequoia";

  const protocols = PROTOCOLS_BY_PLATFORM[activePlatform.id] ?? [];
  const bootHops = activePlatform.bootChain;
  const bootCoords = BOOT_HOP_COORDS[activePlatform.id] ?? {};

  // S9 shrink on platform pages (and the same in the home flow as a
  // visual transition cue) — keep it but fix the origin.
  const dieScale = stage === 9 ? 0.7 : 1;

  return (
    <div className="w-full max-w-[500px] h-[500px] flex items-center justify-center relative select-none font-mono">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full drop-shadow-sm"
        style={{ "--accent-color": accent } as CSSProperties}
      >
        {/* BACKGROUND PIN GRID — extends in on S1 (#52 die-assemble). */}
        <g opacity="0.15">
          {Array.from({ length: 11 }).map((_, i) =>
            Array.from({ length: 11 }).map((_, j) => {
              const rowDelay = 0.05 + i * 0.05;
              const colDelay = 0.05 + j * 0.05;
              return (
                <motion.circle
                  key={`pin-${i}-${j}`}
                  cx={100 + i * 40}
                  cy={100 + j * 40}
                  r="1.5"
                  fill="#16181a"
                  initial={stage === 1 && !reducedMotion ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 0.15 }}
                  animate={{ scale: 1, opacity: 0.15 }}
                  transition={stage === 1 && !reducedMotion ? { delay: rowDelay + colDelay, duration: 0.3 } : { duration: 0 }}
                  style={{ transformOrigin: `${100 + i * 40}px ${100 + j * 40}px`, transformBox: "view-box" }}
                />
              );
            })
          )}
        </g>

        {/* HIGH-SPEED INTERCONNECT LINES — drawn in on S1 (#52). */}
        <g opacity={stage >= 4 ? 0.35 : 0.15} stroke="#16181a" strokeWidth="0.5" fill="none">
          <motion.path
            d="M 150 150 L 450 450"
            initial={stage === 1 && !reducedMotion ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={stage === 1 && !reducedMotion ? { delay: 1.2, duration: 0.6 } : { duration: 0 }}
          />
          <motion.path
            d="M 450 150 L 150 450"
            initial={stage === 1 && !reducedMotion ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={stage === 1 && !reducedMotion ? { delay: 1.4, duration: 0.6 } : { duration: 0 }}
          />
          <motion.path
            d="M 300 100 L 300 500"
            initial={stage === 1 && !reducedMotion ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={stage === 1 && !reducedMotion ? { delay: 1.6, duration: 0.6 } : { duration: 0 }}
          />
          <motion.path
            d="M 100 300 L 500 300"
            initial={stage === 1 && !reducedMotion ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={stage === 1 && !reducedMotion ? { delay: 1.8, duration: 0.6 } : { duration: 0 }}
          />
          {/* Signal pulses moving on grid (stage 4) */}
          {stage === 4 && (
            <g stroke={accent} strokeWidth="1.5">
              <motion.circle r="3" fill={accent}>
                <animateMotion path="M 150 150 L 450 450" dur="1.5s" repeatCount="indefinite" />
              </motion.circle>
              <motion.circle r="3" fill={accent}>
                <animateMotion path="M 450 150 L 150 450" dur="1.8s" repeatCount="indefinite" />
              </motion.circle>
              <motion.circle r="3" fill={accent}>
                <animateMotion path="M 100 300 L 500 300" dur="2s" repeatCount="indefinite" />
              </motion.circle>
            </g>
          )}
        </g>

        {/* MAIN SILICON DIE OUTLINE — scales toward its center on S9 (#32). */}
        <motion.rect
          x="140"
          y="140"
          width="320"
          height="320"
          rx="6"
          fill="#ffffff"
          stroke="#16181a"
          strokeWidth="1.5"
          initial={stage === 1 && !reducedMotion ? { scale: 0.6, opacity: 0 } : { scale: 0.8, opacity: 0 }}
          animate={{ scale: dieScale, opacity: 1 }}
          transition={
            stage === 1 && !reducedMotion
              ? { delay: 0.2, type: "spring", stiffness: 100, damping: 20 }
              : { type: "spring", stiffness: 100, damping: 20 }
          }
          style={{ transformOrigin: "300px 300px", transformBox: "view-box" }}
        />

        {/* POWER RAIL heartbeat (stage 1) — slow idle pulse after assembly. */}
        {stage === 1 && (
          <motion.rect
            x="136"
            y="136"
            width="328"
            height="328"
            rx="8"
            fill="none"
            stroke={accent}
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ delay: 2.4, duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* CORE PLATFORM LAYOUT BLOCKS — fly in on S1 (#52). */}
        <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={0.6}>
          {/* 1. CPU Cluster (top-left) */}
          <motion.g animate={{ opacity: stage === 9 ? 0.5 : 1 }}>
            <rect
              x="160"
              y="160"
              width="120"
              height="100"
              rx="4"
              fill="#fafaf8"
              stroke="#16181a"
              strokeWidth="1"
            />
            <text x="170" y="185" className="text-[10px] font-bold fill-[#16181a]">
              CPU CLUSTER
            </text>
            <text x="170" y="200" className="text-[8px] fill-[#6b7075] uppercase">
              {isSequoia ? "X86 x16 Cores" : "ARM Cortex-A"}
            </text>

            {/* Performance Heatspot (stage 8) — heats, then cools. (#20) */}
            {stage === 8 && (
              <motion.rect
                x="161"
                y="161"
                width="118"
                height="98"
                rx="4"
                fill={accent}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.05, 0.5, 0.4, 0.1, 0.05] }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.5, 0.8, 1] }}
              />
            )}

            {/* Oscilloscope waveform overlaid on the CPU cluster (#20) */}
            {stage === 8 && (
              <g stroke={accent} strokeWidth="1" fill="none" opacity="0.85">
                <motion.polyline
                  points="170,225 185,210 200,235 215,205 230,225 245,200 260,230 275,220"
                  initial={!reducedMotion ? { pathLength: 0 } : { pathLength: 1 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </g>
            )}
          </motion.g>
        </S1FlyIn>

        {/* Arches: GPU + DLA dominate the die (#25).
            Replaces the small 120x150 GPU block with a 200x180 centered
            accelerator region split into CUDA + DLA sub-blocks. CPU cluster
            shrinks to a corner. */}
        {isArches && (
          <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={0.8}>
            <g>
              {/* Accelerator region (dominant) */}
              <rect
                x="190"
                y="200"
                width="220"
                height="180"
                rx="4"
                fill="#fafaf8"
                stroke="#16181a"
                strokeWidth="1.5"
              />
              <text x="200" y="225" className="text-[11px] font-bold fill-[#16181a]">
                GPU & ACCELERATORS
              </text>
              {/* CUDA sub-block */}
              <rect
                x="200"
                y="240"
                width="100"
                height="130"
                rx="3"
                fill="#ffffff"
                stroke="#16181a"
                strokeWidth="1"
              />
              <text x="250" y="265" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">
                CUDA
              </text>
              <text x="250" y="280" className="text-[7px] fill-[#6b7075]" textAnchor="middle">
                TENSOR CORES
              </text>
              {/* DLA sub-block */}
              <rect
                x="305"
                y="240"
                width="100"
                height="130"
                rx="3"
                fill="#ffffff"
                stroke="#16181a"
                strokeWidth="1"
              />
              <text x="355" y="265" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">
                DLA
              </text>
              <text x="355" y="280" className="text-[7px] fill-[#6b7075]" textAnchor="middle">
                NVDLA
              </text>

              {/* Per-block heat during stage 8 (#20) — both sub-accelerators
                  glow with the same hotspot-then-cool pattern. */}
              {stage === 8 && (
                <>
                  <motion.rect
                    x="201"
                    y="241"
                    width="98"
                    height="128"
                    rx="3"
                    fill={accent}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.05, 0.45, 0.4, 0.1, 0.05] }}
                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.5, 0.8, 1] }}
                  />
                  <motion.rect
                    x="306"
                    y="241"
                    width="98"
                    height="128"
                    rx="3"
                    fill={accent}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.05, 0.45, 0.4, 0.1, 0.05] }}
                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.55, 0.8, 1], delay: 0.2 }}
                  />
                  {/* Oscilloscope trace over the accelerator block */}
                  <g stroke={accent} strokeWidth="1" fill="none" opacity="0.85">
                    <motion.polyline
                      points="210,355 230,335 250,360 270,330 290,355 310,325 330,355 350,330 370,350 390,330 400,360"
                      initial={!reducedMotion ? { pathLength: 0 } : { pathLength: 1 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                    />
                  </g>
                </>
              )}
            </g>
          </S1FlyIn>
        )}

        {/* Acadia: Memory controller + basic peripherals (top-right) */}
        {isAcadia && (
          <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={0.8}>
            <g>
              <rect
                x="300"
                y="160"
                width="140"
                height="130"
                rx="4"
                fill="#fafaf8"
                stroke="#16181a"
                strokeWidth="1"
              />
              <text x="310" y="185" className="text-[10px] font-bold fill-[#16181a]">
                LPDDR5 CTRL
              </text>
              <text x="310" y="200" className="text-[8px] fill-[#6b7075]">
                VPU / DISPLAY ENGINE
              </text>
            </g>
          </S1FlyIn>
        )}

        {/* Zion: FPGA Fabric (half the die) + R5 lockstep pair (#28). */}
        {isZion && (
          <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={0.8}>
            <g>
              <rect
                x="300"
                y="160"
                width="140"
                height="210"
                rx="4"
                fill="#ffffff"
                stroke="#16181a"
                strokeWidth="1"
                strokeDasharray={stage === 6 ? "none" : "3,3"}
              />
              <pattern id="fpgaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" fill="none" stroke="#e4e2dd" strokeWidth="0.5" />
                <circle cx="5" cy="5" r="0.7" fill="#6b7075" />
              </pattern>
              <rect x="300" y="160" width="140" height="210" rx="4" fill="url(#fpgaGrid)" />

              <text x="310" y="185" className="text-[10px] font-bold fill-[#16181a]">
                FPGA FABRIC
              </text>
              <text x="310" y="200" className="text-[8px] fill-[#6b7075] uppercase">
                PL Gates / DSPs
              </text>

              {/* Bitstream sweep animation (stage 6) */}
              {stage === 6 && (
                <motion.g>
                  <motion.line
                    x1="300"
                    y1="160"
                    x2="300"
                    y2="370"
                    stroke={accent}
                    strokeWidth="2"
                    animate={{ x: [300, 440, 300] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.rect
                    x="300"
                    y="160"
                    width="140"
                    height="210"
                    fill={accent}
                    opacity="0.1"
                    animate={{ width: [0, 140, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.g>
              )}

              {/* R5 lockstep pair — split into two cores (#28). */}
              <g>
                {/* Highlighted accent overlay that breathes on S1. */}
                {stage === 1 && (
                  <motion.rect
                    x="308"
                    y="308"
                    width="124"
                    height="54"
                    rx="2"
                    fill="none"
                    stroke={accent}
                    strokeWidth="1.5"
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {/* R5_0 */}
                <rect
                  x="310"
                  y="310"
                  width="60"
                  height="50"
                  rx="2"
                  fill="#fafaf8"
                  stroke="#16181a"
                  strokeWidth="1"
                />
                <text x="340" y="332" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">
                  R5_0
                </text>
                <text x="340" y="348" className="text-[6px] fill-[#6b7075]" textAnchor="middle">
                  LOCKSTEP
                </text>
                {/* R5_1 */}
                <rect
                  x="372"
                  y="310"
                  width="60"
                  height="50"
                  rx="2"
                  fill="#fafaf8"
                  stroke="#16181a"
                  strokeWidth="1"
                />
                <text x="402" y="332" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">
                  R5_1
                </text>
                <text x="402" y="348" className="text-[6px] fill-[#6b7075]" textAnchor="middle">
                  LOCKSTEP
                </text>
              </g>
            </g>
          </S1FlyIn>
        )}

        {/* Pinnacle: Peripheral block + stamped longevity seal (#26). */}
        {isPinnacle && (
          <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={0.8}>
            <g>
              <rect
                x="300"
                y="200"
                width="130"
                height="170"
                rx="4"
                fill="#fafaf8"
                stroke="#16181a"
                strokeWidth="1"
              />
              <text x="310" y="225" className="text-[10px] font-bold fill-[#16181a]">
                PERIPHERALS
              </text>
              <text x="310" y="245" className="text-[8px] fill-[#6b7075]">
                Display/PCIe/CAN-FD
              </text>

              {/* Longevity Seal — stamps in on S1 (#26). */}
              {stage === 1 && (
                <motion.g
                  initial={reducedMotion ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { delay: 1.6, type: "spring", stiffness: 250, damping: 12 }}
                  style={{ transformOrigin: "365px 320px", transformBox: "view-box" }}
                >
                  <circle cx="365" cy="320" r="22" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="3,3" />
                  <text x="365" y="318" className="text-[6px] text-center fill-[#16181a] font-bold" textAnchor="middle">15 YEAR</text>
                  <text x="365" y="327" className="text-[5px] text-center fill-[#16181a]" textAnchor="middle">GUARANTEE</text>
                </motion.g>
              )}
            </g>
          </S1FlyIn>
        )}

        {/* Joshua: Peripheral bus + twin PRU cores with pin taps (#27). */}
        {isJoshua && (
          <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={0.8}>
            <g>
              <rect
                x="300"
                y="200"
                width="130"
                height="170"
                rx="4"
                fill="#fafaf8"
                stroke="#16181a"
                strokeWidth="1"
              />
              <text x="310" y="225" className="text-[10px] font-bold fill-[#16181a]">
                PERIPHERAL BUS
              </text>

              {/* Twin PRU Cores with direct pin taps to the I/O ring. */}
              <g>
                {/* PRU_0 */}
                <rect x="310" y="260" width="50" height="40" rx="2" fill="#ffffff" stroke="#16181a" strokeWidth="1" />
                <text x="335" y="284" className="text-[9px] font-bold fill-[#16181a]" textAnchor="middle">PRU_0</text>
                {/* PRU_1 */}
                <rect x="370" y="260" width="50" height="40" rx="2" fill="#ffffff" stroke="#16181a" strokeWidth="1" />
                <text x="395" y="284" className="text-[9px] font-bold fill-[#16181a]" textAnchor="middle">PRU_1</text>

                {/* Direct pin taps — short lines from each PRU to the I/O
                    ring pins on the left and right of the die. */}
                <g stroke={accent} strokeWidth="1" fill="none">
                  <line x1="310" y1="270" x2="150" y2="280" />
                  <line x1="310" y1="290" x2="150" y2="340" />
                  <line x1="370" y1="270" x2="450" y2="280" />
                  <line x1="370" y1="290" x2="450" y2="340" />
                </g>

                {/* Tap firing animation on S4 / S8: small pulse circles
                    ride the tap lines from PRU → I/O ring. */}
                {(stage === 4 || stage === 8) && (
                  <g>
                    <motion.circle r="2.5" fill={accent}>
                      <animateMotion path="M 310 270 L 150 280" dur="0.6s" repeatCount="indefinite" />
                    </motion.circle>
                    <motion.circle r="2.5" fill={accent}>
                      <animateMotion path="M 310 290 L 150 340" dur="0.6s" begin="0.15s" repeatCount="indefinite" />
                    </motion.circle>
                    <motion.circle r="2.5" fill={accent}>
                      <animateMotion path="M 370 270 L 450 280" dur="0.6s" begin="0.3s" repeatCount="indefinite" />
                    </motion.circle>
                    <motion.circle r="2.5" fill={accent}>
                      <animateMotion path="M 370 290 L 450 340" dur="0.6s" begin="0.45s" repeatCount="indefinite" />
                    </motion.circle>
                  </g>
                )}
              </g>

              {/* Cycle-exact pulse trains at the bottom of the bus. */}
              {(stage === 4 || stage === 8) && (
                <g stroke={accent} strokeWidth="1" fill="none">
                  <path d="M 305 360 L 315 360 L 315 350 L 325 350 L 325 360 L 335 360" />
                  <path d="M 365 360 L 375 360 L 375 350 L 385 350 L 385 360 L 395 360 L 395 350 L 405 350 L 405 360 L 415 360" />
                </g>
              )}
            </g>
          </S1FlyIn>
        )}

        {/* Sequoia: Large L3 cache block + PCIe fan-out from one edge (#31). */}
        {isSequoia && (
          <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={0.8}>
            <g>
              <rect
                x="300"
                y="160"
                width="130"
                height="130"
                rx="4"
                fill="#fafaf8"
                stroke="#16181a"
                strokeWidth="1"
              />
              <text x="310" y="185" className="text-[10px] font-bold fill-[#16181a]">
                L3 CACHE
              </text>
              <text x="310" y="205" className="text-[8px] fill-[#6b7075]">
                64MB SHARED
              </text>

              {/* PCIe lane fan-out from the right edge of the die (#31).
                  8 curved lanes emerging from (450, 300) and reaching
                  connector pads outside the die outline. */}
              <g stroke="#16181a" strokeWidth="0.75" fill="none" opacity="0.7">
                {Array.from({ length: 8 }).map((_, i) => {
                  const yTarget = 240 + i * 18;
                  return (
                    <path
                      key={`pcie-${i}`}
                      d={`M 450 300 Q 500 300 520 ${yTarget}`}
                    />
                  );
                })}
                {Array.from({ length: 8 }).map((_, i) => (
                  <rect
                    key={`pad-${i}`}
                    x="520"
                    y={240 + i * 18 - 3}
                    width="10"
                    height="6"
                    fill="#ffffff"
                    stroke="#16181a"
                    strokeWidth="0.5"
                  />
                ))}
              </g>
              {/* Lane-count label */}
              <text x="455" y="320" className="text-[8px] font-bold fill-[#16181a]">
                PCIe GEN4 x16 · 64 LANES
              </text>
            </g>
          </S1FlyIn>
        )}

        {/* 3. Boot ROM & Flash Controller (non-Zion, non-Arches which uses
            the die for the accelerator instead) */}
        {!isZion && !isArches && !isAcadia && !isPinnacle && !isJoshua && !isSequoia && (
          <S1FlyIn stage={stage} reducedMotion={!!reducedMotion} delay={1.0}>
            <g>
              <rect
                x="300"
                y="280"
                width="130"
                height="70"
                rx="4"
                fill="#fafaf8"
                stroke="#16181a"
                strokeWidth="1"
              />
              <text x="310" y="305" className="text-[10px] font-bold fill-[#16181a]">
                BOOT ROM
              </text>
              <text x="310" y="325" className="text-[8px] fill-[#6b7075] uppercase">
                Secure key / Flash
              </text>

              {/* Boot ignition (stage 3) */}
              {stage === 3 && (
                <motion.rect
                  x="301"
                  y="281"
                  width="128"
                  height="68"
                  rx="4"
                  fill={accent}
                  animate={{ opacity: [0.1, 0.6, 0.1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </g>
          </S1FlyIn>
        )}

        {/* I/O RING BORDER */}
        <g stroke="#16181a" strokeWidth="1" fill="none">
          <rect x="150" y="150" width="300" height="300" rx="4" />
        </g>

        {/* BSP enumeration (stage 2) */}
        {stage === 2 && (
          <g className="text-[8px]" fill="#16181a">
            <circle cx="150" cy="200" r="3" fill={bspEnumIndex >= 0 ? accent : "#16181a"} />
            <text x="115" y="203">UART</text>
            <circle cx="150" cy="300" r="3" fill={bspEnumIndex >= 1 ? accent : "#16181a"} />
            <text x="123" y="303">SPI</text>
            <circle cx="300" cy="150" r="3" fill={bspEnumIndex >= 2 ? accent : "#16181a"} />
            <text x="290" y="140">I2C</text>
            <circle cx="450" cy="250" r="3" fill={bspEnumIndex >= 3 ? accent : "#16181a"} />
            <text x="460" y="253">PCIe</text>
            <circle cx="450" cy="350" r="3" fill={bspEnumIndex >= 4 ? accent : "#16181a"} />
            <text x="460" y="353">ETH</text>
            <circle cx="350" cy="450" r="3" fill={bspEnumIndex >= 5 ? accent : "#16181a"} />
            <text x="340" y="465">CSI</text>
          </g>
        )}

        {/* Stage 3: per-platform boot-chain path (#17).
            Renders N-1 segments + a lead dot, with a stagger so the dot
            hops along the chain in sequence. */}
        {stage === 3 && bootHops.length > 1 && (
          <BootChainPath hops={bootHops} coords={bootCoords} accent={accent} reducedMotion={!!reducedMotion} />
        )}

        {/* Stage 4: driver modules dock onto the I/O ring (#21). */}
        {stage === 4 && (
          <DriverModules accent={accent} reducedMotion={!!reducedMotion} />
        )}

        {/* Stage 5: middleware pub/sub + per-platform protocol badges (#22). */}
        {stage === 5 && (
          <g>
            <g stroke={accent} strokeWidth="1" fill="none">
              <circle cx="365" cy="210" r="15" />
              <text x="365" y="213" stroke="none" fill={accent} className="text-[7px] text-center" textAnchor="middle">
                {isAcadia || isPinnacle ? "MQTT" : "DDS"}
              </text>
              <circle cx="220" cy="210" r="12" />
              <text x="220" y="213" stroke="none" fill={accent} className="text-[7px] text-center" textAnchor="middle">PUB</text>
              <circle cx="220" cy="350" r="12" />
              <text x="220" y="353" stroke="none" fill={accent} className="text-[7px] text-center" textAnchor="middle">SUB</text>
              <path d="M 232 210 L 350 210" markerEnd="url(#arrow)" />
              <path d="M 353 218 L 232 342" markerEnd="url(#arrow)" />
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={accent} />
                </marker>
              </defs>
            </g>

            {/* Per-platform protocol set (#22) */}
            <g>
              {protocols.map((proto, i) => (
                <motion.g
                  key={proto}
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { delay: 0.2 + i * 0.15, duration: 0.3 }}
                >
                  <rect
                    x={180 + i * 70}
                    y={380}
                    width="62"
                    height="20"
                    rx="3"
                    fill="#ffffff"
                    stroke={accent}
                    strokeWidth="1"
                  />
                  <text
                    x={211 + i * 70}
                    y={393}
                    className="text-[8px] font-bold"
                    textAnchor="middle"
                    fill={accent}
                  >
                    {proto}
                  </text>
                </motion.g>
              ))}
            </g>
          </g>
        )}

        {/* Stage 6: OTA split representation */}
        {stage === 6 && (
          <g>
            <line x1="298" y1="140" x2="298" y2="460" stroke="#16181a" strokeWidth="1" strokeDasharray="5,5" />
            <text x="250" y="130" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">SYS_A</text>
            <text x="350" y="130" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">SYS_B</text>
            <rect
              x={otaPulse === 0 ? "142" : "302"}
              y="142"
              width="156"
              height="316"
              rx="4"
              fill={accent}
              opacity="0.08"
            />
            {otaPulse === 1 && (
              <g className="text-[8px]" stroke="none" fill={accent}>
                <text x="350" y="250" textAnchor="middle" className="font-bold">WRITING IMAGE...</text>
                <line x1="320" y1="260" x2="380" y2="260" stroke={accent} strokeWidth="1.5" strokeDasharray="5,5" />
              </g>
            )}
            {otaPulse === 2 && (
              <g className="text-[8px]" stroke="none" fill="green">
                <text x="350" y="250" textAnchor="middle" className="font-bold">✓ VERIFIED</text>
                <text x="350" y="265" textAnchor="middle" className="text-[6px]">SWAP ACTIVE</text>
              </g>
            )}
          </g>
        )}

        {/* Stage 7: magnifier sweep + code-bracket glyphs + boot-log readout (#19). */}
        {stage === 7 && (
          <g>
            <motion.g
              animate={{ x: [0, 150, -100, 0], y: [0, 80, -40, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx="300" cy="300" r="50" fill="none" stroke={accent} strokeWidth="1.5" />
              <line x1="300" y1="250" x2="300" y2="350" stroke={accent} strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="250" y1="300" x2="350" y2="300" stroke={accent} strokeWidth="0.5" strokeDasharray="2,2" />
              <path d="M 235 285 L 235 270 L 250 270" fill="none" stroke={accent} strokeWidth="1" />
              <path d="M 365 285 L 365 270 L 350 270" fill="none" stroke={accent} strokeWidth="1" />
              <path d="M 235 315 L 235 330 L 250 330" fill="none" stroke={accent} strokeWidth="1" />
              <path d="M 365 315 L 365 330 L 350 330" fill="none" stroke={accent} strokeWidth="1" />
              <rect x="255" y="235" width="90" height="12" rx="2" fill="#16181a" opacity="0.8" />
              <text x="300" y="243" fill="#ffffff" className="text-[6px] text-center" textAnchor="middle">
                PROBE_LOG: OK
              </text>
            </motion.g>

            {/* Code-bracket glyphs on three block anchors (#19). */}
            {[
              { x: 180, y: 200, glyph: "{}" },
              { x: 360, y: 320, glyph: "</>" },
              { x: 230, y: 350, glyph: "fn()" },
            ].map((g, i) => (
              <motion.text
                key={g.glyph}
                x={g.x}
                y={g.y}
                className="text-[12px] font-bold"
                fill={accent}
                initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + i * 0.2, type: "spring", stiffness: 250, damping: 16 }}
                style={{ transformOrigin: `${g.x}px ${g.y}px`, transformBox: "view-box" }}
              >
                {g.glyph}
              </motion.text>
            ))}

            {/* Streaming boot-log readout (#19). */}
            <g>
              <rect x="320" y="180" width="120" height="60" rx="2" fill="#16181a" opacity="0.92" />
              <ProbeLogText charCount={probeCharCount} />
            </g>
          </g>
        )}

        {/* Stage 8: bar meters at the bottom of the die (#20). */}
        {stage === 8 && (
          <g>
            {[
              { x: 175, h: 28, delay: 0 },
              { x: 200, h: 36, delay: 0.1 },
              { x: 225, h: 24, delay: 0.2 },
              { x: 250, h: 32, delay: 0.3 },
              { x: 275, h: 20, delay: 0.4 },
            ].map((bar) => (
              <motion.rect
                key={`bar-${bar.x}`}
                x={bar.x}
                y={460 - bar.h}
                width="14"
                height={bar.h}
                fill={accent}
                initial={reducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={reducedMotion ? { duration: 0 } : { delay: bar.delay, duration: 0.4 }}
                style={{ transformOrigin: `${bar.x + 7}px 460px`, transformBox: "view-box" }}
              />
            ))}
            {/* Optimization wave passes over the hotspot (#20) — drawn at
                t=0.5s; then the hotspot fill decays to ~0.05 by t=2s. */}
            <motion.line
              x1="140"
              y1="210"
              x2="460"
              y2="210"
              stroke={accent}
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ x1: 140, x2: 140, opacity: 0 }}
              animate={{ x1: 460, x2: 460, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </g>
        )}

        {/* SATELLITE CHIPS — only Arches and Acadia per spec; no satellite
            MCU for Zion/Pinnacle/Joshua/Sequoia. (#31, §6 platform notes) */}
        {isArches && (
          <g>
            <motion.path
              d="M 450 300 H 510"
              stroke="#16181a"
              strokeWidth="1.5"
              fill="none"
            />
            {(stage === 2 || stage === 4 || stage === 8) && (
              <motion.circle r="3" fill={accent}>
                <animateMotion path="M 450 300 H 510" dur="1s" repeatCount="indefinite" />
              </motion.circle>
            )}
            <rect
              x="510"
              y="260"
              width="60"
              height="80"
              rx="4"
              fill="#ffffff"
              stroke="#16181a"
              strokeWidth="1.5"
            />
            <text x="540" y="285" className="text-[8px] font-bold fill-[#16181a]" textAnchor="middle">
              STM32
            </text>
            <text x="540" y="300" className="text-[6px] fill-[#6b7075]" textAnchor="middle">
              MCU
            </text>
            <text x="540" y="315" className="text-[5px] fill={accent}" textAnchor="middle">
              RPMSG
            </text>
          </g>
        )}

        {isAcadia && (
          <g>
            <motion.path
              d="M 450 300 H 510"
              stroke="#16181a"
              strokeWidth="1.5"
              fill="none"
            />
            <rect
              x="510"
              y="260"
              width="60"
              height="80"
              rx="4"
              fill="#ffffff"
              stroke="#16181a"
              strokeWidth="1.5"
            />
            <path d="M 540 255 L 540 245" stroke="#16181a" strokeWidth="1" />
            <path d="M 535 248 Q 540 243 545 248" fill="none" stroke="#16181a" strokeWidth="1" />
            <text x="540" y="280" className="text-[7px] font-bold fill-[#16181a]" textAnchor="middle">
              PICO W
            </text>
            <text x="540" y="295" className="text-[6px] fill-[#6b7075]" textAnchor="middle">
              RP2040
            </text>
            <text x="540" y="310" className="text-[5px] fill={accent}" textAnchor="middle">
              I/O LINK
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

// S1 fly-in wrapper — staggers block appearance on S1, no-op on other
// stages. (#52 die-assemble fly-in.)
function S1FlyIn({
  stage,
  reducedMotion,
  delay,
  children,
}: {
  stage: number;
  reducedMotion: boolean;
  delay: number;
  children: React.ReactNode;
}) {
  if (stage !== 1) return <>{children}</>;
  if (reducedMotion) return <>{children}</>;
  return (
    <motion.g
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformOrigin: "300px 300px", transformBox: "view-box" }}
    >
      {children}
    </motion.g>
  );
}

// Per-platform boot-chain path. (#17)
function BootChainPath({
  hops,
  coords,
  accent,
  reducedMotion,
}: {
  hops: string[];
  coords: Record<string, [number, number]>;
  accent: string;
  reducedMotion: boolean;
}) {
  // Build a list of waypoints from the hop names. Fall back to a generic
  // diagonal path if a hop is missing from the coord table.
  const waypoints: [number, number][] = hops
    .map((name, i) => coords[name] ?? (i === 0 ? [365, 320] : [180 + i * 30, 220]));

  if (waypoints.length < 2) return null;

  // Path string: straight line segments between waypoints.
  const pathD = waypoints
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");

  return (
    <g>
      {waypoints.slice(0, -1).map((_, i) => {
        const [x1, y1] = waypoints[i];
        const [x2, y2] = waypoints[i + 1];
        return (
          <motion.line
            key={`seg-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={accent}
            strokeWidth="2"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={reducedMotion ? { duration: 0 } : { delay: i * 0.4, duration: 0.5 }}
          />
        );
      })}

      {/* Hop labels at each waypoint. */}
      {waypoints.map(([x, y], i) => (
        <motion.text
          key={`label-${i}`}
          x={x + 8}
          y={y - 8}
          fill={accent}
          stroke="none"
          className="text-[7px] font-bold"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reducedMotion ? { duration: 0 } : { delay: i * 0.4 + 0.4, duration: 0.3 }}
        >
          {hops[i]}
        </motion.text>
      ))}

      {/* Lead dot hopping along the chain. */}
      <motion.circle r="4" fill={accent}>
        <animateMotion
          path={pathD}
          dur={`${hops.length * 0.8}s`}
          repeatCount="indefinite"
        />
      </motion.circle>
    </g>
  );
}

// Driver modules (stage 4) — fly in from off-edge and snap to the I/O
// ring pin coords. (#21)
function DriverModules({ accent, reducedMotion }: { accent: string; reducedMotion: boolean }) {
  return (
    <g>
      {DRV_MODULES.map((m, i) => {
        const deltaX = m.pinX - m.fromX;
        const deltaY = m.pinY - m.fromY;
        return (
          <motion.g
            key={m.id}
            initial={reducedMotion ? { x: deltaX, y: deltaY, opacity: 1, scale: 1 } : { x: 0, y: 0, opacity: 0, scale: 0.6 }}
            animate={{ x: deltaX, y: deltaY, opacity: 1, scale: [0.6, 1.2, 1] }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    delay: i * 0.12,
                    duration: 0.5,
                    times: [0, 0.7, 1],
                  }
            }
          >
            <rect
              x={m.fromX - 22}
              y={m.fromY - 8}
              width="44"
              height="16"
              rx="2"
              fill="#ffffff"
              stroke={accent}
              strokeWidth="1"
            />
            <text
              x={m.fromX}
              y={m.fromY + 3}
              className="text-[7px] font-bold"
              textAnchor="middle"
              fill={accent}
            >
              DRV: {m.id}
            </text>
          </motion.g>
        );
      })}
    </g>
  );
}

// Stage 7 boot-log readout — types a multi-line string char-by-char.
// (#19)
function ProbeLogText({ charCount }: { charCount: number }) {
  const full = PROBE_LOG_LINES.join("\n");
  const visible = full.slice(0, charCount);
  // Split into lines so each is rendered on its own y coordinate.
  const lines = visible.split("\n");
  return (
    <g>
      {lines.map((line, i) => (
        <text
          key={i}
          x="326"
          y={195 + i * 12}
          fill="#fafaf8"
          className="text-[7px] font-mono"
        >
          {line}
        </text>
      ))}
      {/* Blinking caret at the end of the last visible line. */}
      {charCount < full.length && (
        <rect
          x={326 + (lines[lines.length - 1]?.length ?? 0) * 4}
          y={186 + (lines.length - 1) * 12}
          width="5"
          height="8"
          fill="#fafaf8"
        />
      )}
    </g>
  );
}

// Panel grid (S9 manufacturing scene) — the die multiplies into a grid
// of copies, each stamping `✓ PROVISIONED` in sequence. (#18)
function PanelGrid({ accent, reducedMotion }: { accent: string; reducedMotion: boolean }) {
  // 4x3 panel.
  const cols = 4;
  const rows = 3;
  const cellW = 110;
  const cellH = 110;
  const startX = 60;
  const startY = 80;

  return (
    <svg viewBox="0 0 600 500" className="w-full h-full max-w-[500px]">
      <g>
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const idx = row * cols + col;
            const x = startX + col * cellW;
            const y = startY + row * cellH;
            return (
              <motion.g
                key={`cell-${idx}`}
                initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={reducedMotion ? { duration: 0 } : { delay: idx * 0.08, duration: 0.4 }}
                style={{ transformOrigin: `${x + 50}px ${y + 50}px`, transformBox: "view-box" }}
              >
                <rect
                  x={x}
                  y={y}
                  width={cellW - 10}
                  height={cellH - 10}
                  rx="4"
                  fill="#ffffff"
                  stroke="#16181a"
                  strokeWidth="1"
                />
                {/* Inner block hint */}
                <rect x={x + 8} y={y + 8} width="40" height="30" rx="2" fill="#fafaf8" stroke="#16181a" strokeWidth="0.5" />
                <rect x={x + 52} y={y + 8} width="40" height="30" rx="2" fill="#fafaf8" stroke="#16181a" strokeWidth="0.5" />
                <rect x={x + 8} y={y + 42} width="84" height="30" rx="2" fill="#fafaf8" stroke="#16181a" strokeWidth="0.5" />
                {/* ✓ PROVISIONED stamp, staggered. */}
                <motion.text
                  x={x + 50}
                  y={y + 88}
                  className="text-[7px] font-bold"
                  textAnchor="middle"
                  fill={accent}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={reducedMotion ? { duration: 0 } : { delay: idx * 0.08 + 0.5, duration: 0.3 }}
                >
                  ✓ PROVISIONED
                </motion.text>
              </motion.g>
            );
          })
        )}
      </g>
    </svg>
  );
}

// HomeChip — the static fallback used when no platform resolves. Renders
// a CORE/SYS_IO/SOCCENTRIC die with a center pulse. (#23, #32: the
// 120s rotation was imperceptible and has been removed; the pulse is
// now scaled around the circle's own fill-box origin so it does not
// drift.)
function HomeChip({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <svg viewBox="0 0 600 600" className="w-full h-full max-w-[450px]">
      <g opacity="0.1">
        {Array.from({ length: 8 }).map((_, i) =>
          Array.from({ length: 8 }).map((_, j) => (
            <circle key={`grid-${i}-${j}`} cx={120 + i * 50} cy={120 + j * 50} r="1.5" fill="#16181a" />
          ))
        )}
      </g>

      <motion.rect
        x="150"
        y="150"
        width="300"
        height="300"
        rx="8"
        fill="#ffffff"
        stroke="#16181a"
        strokeWidth="2"
        style={{ transformOrigin: "300px 300px", transformBox: "view-box" }}
      />

      <circle cx="300" cy="300" r="140" fill="none" stroke="#e4e2dd" strokeWidth="1" />

      <rect x="180" y="180" width="100" height="100" rx="4" fill="#fafaf8" stroke="#16181a" strokeWidth="1" />
      <text x="230" y="235" className="text-[10px] font-display font-bold fill-[#16181a]" textAnchor="middle">CORE</text>

      <rect x="320" y="180" width="100" height="100" rx="4" fill="#fafaf8" stroke="#16181a" strokeWidth="1" />
      <text x="370" y="235" className="text-[10px] font-display font-bold fill-[#16181a]" textAnchor="middle">SYS_IO</text>

      <rect x="180" y="320" width="240" height="100" rx="4" fill="#fafaf8" stroke="#16181a" strokeWidth="1" />
      <text x="300" y="375" className="text-[12px] font-display font-bold fill-[#16181a]" textAnchor="middle">SOCCENTRIC</text>

      {/* Center pulse — scaled around the circle's own fill-box so it
          does not drift toward (600, 600) on each pulse. (#32) */}
      <circle cx="300" cy="300" r="12" fill="#16181a" />
      <motion.circle
        cx="300"
        cy="300"
        r="4"
        fill="#6b7075"
        animate={reducedMotion ? { r: 4, opacity: 0.6 } : { scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={reducedMotion ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "300px 300px", transformBox: "fill-box" }}
      />
    </svg>
  );
}
