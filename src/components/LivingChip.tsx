"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { platforms, PlatformData } from "@/data/platforms";

interface LivingChipProps {
  platformId: string;
  stage: number; // 1 to 9
}

export default function LivingChip({ platformId, stage }: LivingChipProps) {
  const [activePlatform, setActivePlatform] = useState<PlatformData | null>(null);
  const [otaPulse, setOtaPulse] = useState(0);
  const [bspEnumIndex, setBspEnumIndex] = useState(-1);

  useEffect(() => {
    let currentId = platformId;
    if (platformId === "home") {
      if (stage === 2) currentId = "arches";
      else if (stage === 3) currentId = "acadia";
      else if (stage === 4) currentId = "zion";
      else if (stage === 5) currentId = "pinnacle";
      else if (stage === 6) currentId = "joshua";
      else if (stage === 7) currentId = "sequoia";
    }
    const p = platforms.find((item) => item.id === currentId) || null;
    setActivePlatform(p);
  }, [platformId, stage]);

  // OTA stage simulation loops
  useEffect(() => {
    if (stage === 6) {
      const interval = setInterval(() => {
        setOtaPulse((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [stage]);

  // BSP enumeration simulation loops
  useEffect(() => {
    if (stage === 2) {
      setBspEnumIndex(0);
      const interval = setInterval(() => {
        setBspEnumIndex((prev) => (prev + 1) % 6);
      }, 800);
      return () => clearInterval(interval);
    } else {
      setBspEnumIndex(-1);
    }
  }, [stage]);

  if (!activePlatform) {
    // If it's the home page or contact page, we can show a general chip that represents SoCcentric
    return (
      <div className="w-full max-w-[500px] h-[500px] flex items-center justify-center relative select-none">
        <HomeChip stage={stage} />
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

  return (
    <div className="w-full max-w-[500px] h-[500px] flex items-center justify-center relative select-none font-mono">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full drop-shadow-sm"
        style={{ ["--accent-color" as any]: accent }}
      >
        {/* BACKGROUND PIN GRID GRID */}
        <g opacity="0.15">
          {Array.from({ length: 11 }).map((_, i) =>
            Array.from({ length: 11 }).map((_, j) => (
              <circle
                key={`pin-${i}-${j}`}
                cx={100 + i * 40}
                cy={100 + j * 40}
                r="1.5"
                fill="#16181a"
              />
            ))
          )}
        </g>

        {/* HIGH-SPEED INTERCONNECT LINES (Hairline mesh background) */}
        <g opacity={stage >= 4 ? 0.35 : 0.15} stroke="#16181a" strokeWidth="0.5" fill="none">
          <path d="M 150 150 L 450 450" />
          <path d="M 450 150 L 150 450" />
          <path d="M 300 100 L 300 500" />
          <path d="M 100 300 L 500 300" />
          {/* Signal pulses moving on grid */}
          {stage === 4 && (
            <g stroke={accent} strokeWidth="1.5">
              <motion.circle r="3" fill={accent}>
                <animateMotion
                  path="M 150 150 L 450 450"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </motion.circle>
              <motion.circle r="3" fill={accent}>
                <animateMotion
                  path="M 450 150 L 150 450"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </motion.circle>
              <motion.circle r="3" fill={accent}>
                <animateMotion
                  path="M 100 300 L 500 300"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </g>
          )}
        </g>

        {/* MAIN SILICON DIE OUTLINE */}
        <motion.rect
          x="140"
          y="140"
          width="320"
          height="320"
          rx="6"
          fill="#ffffff"
          stroke="#16181a"
          strokeWidth="1.5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: stage === 9 ? 0.7 : 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {/* POWER RAIL heartbeat (stage 1) */}
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
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* CORE PLATFORM LAYOUT BLOCKS */}
        {/* 1. CPU Cluster */}
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
          
          {/* Performance Heatspot (stage 8) */}
          {stage === 8 && (
            <motion.rect
              x="161"
              y="161"
              width="118"
              height="98"
              rx="4"
              fill={accent}
              animate={{ opacity: [0.05, 0.4, 0.05] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.g>

        {/* 2. Secondary Core / Accelerator / Memory controller */}
        {/* Arches: Dominant GPU + DLA */}
        {isArches && (
          <g>
            <rect
              x="160"
              y="280"
              width="120"
              height="150"
              rx="4"
              fill="#fafaf8"
              stroke="#16181a"
              strokeWidth="1"
            />
            <text x="170" y="305" className="text-[10px] font-bold fill-[#16181a]">
              GPU & ACCEL
            </text>
            <text x="170" y="325" className="text-[8px] fill-[#6b7075]">
              CUDA / DLA / NVDLA
            </text>
            
            {/* Pulsing accelerator (stage 8) */}
            {stage === 8 && (
              <motion.rect
                x="161"
                y="281"
                width="118"
                height="148"
                rx="4"
                fill={accent}
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
              />
            )}
          </g>
        )}

        {/* Acadia: Memory controller + basic peripherals */}
        {isAcadia && (
          <g>
            <rect
              x="160"
              y="280"
              width="120"
              height="150"
              rx="4"
              fill="#fafaf8"
              stroke="#16181a"
              strokeWidth="1"
            />
            <text x="170" y="305" className="text-[10px] font-bold fill-[#16181a]">
              LPDDR5 CONTROLLER
            </text>
            <text x="170" y="325" className="text-[8px] fill-[#6b7075]">
              VPU / DISPLAY ENGINE
            </text>
          </g>
        )}

        {/* Zion: FPGA Fabric (half the die) */}
        {isZion && (
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
            {/* Checkerboard Pattern for FPGA Fabric */}
            <pattern id="fpgaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="none" stroke="#e4e2dd" strokeWidth="0.5" />
              <circle cx="5" cy="5" r="0.7" fill="#6b7075" />
            </pattern>
            <rect x="300" y="160" width="140" height="210" rx="4" fill="url(#fpgaGrid)" />

            <text x="310" y="185" className="text-[10px] font-bold fill-[#16181a] bg-white">
              FPGA FABRIC
            </text>
            <text x="310" y="200" className="text-[8px] fill-[#6b7075] uppercase">
              PL Gates / DSPs
            </text>

            {/* Bitstream sweep animation (stage 6) */}
            {stage === 6 && (
              <motion.div>
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
              </motion.div>
            )}

            {/* R5 cores */}
            <rect x="310" y="310" width="120" height="50" rx="2" fill="#fafaf8" stroke="#16181a" strokeWidth="0.5" />
            <text x="315" y="325" className="text-[8px] font-bold fill-[#16181a]">LOCKSTEP R5 CORES</text>
            <text x="315" y="338" className="text-[6px] fill-[#6b7075]">SAFETY PLATFORM</text>
          </g>
        )}

        {/* Pinnacle: Peripheral Ring / Mainline Longevity Seal */}
        {isPinnacle && (
          <g>
            <rect
              x="160"
              y="280"
              width="120"
              height="150"
              rx="4"
              fill="#fafaf8"
              stroke="#16181a"
              strokeWidth="1"
            />
            <text x="170" y="305" className="text-[10px] font-bold fill-[#16181a]">
              PERIPHERALS
            </text>
            <text x="170" y="325" className="text-[8px] fill-[#6b7075]">
              Display/PCIe/CAN-FD
            </text>
            
            {/* Longevity Seal (stage 1) */}
            {stage === 1 && (
              <g transform="translate(195, 360)">
                <circle cx="25" cy="25" r="22" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="3,3" />
                <text x="25" y="23" className="text-[6px] text-center fill-[#16181a] font-bold" textAnchor="middle">15 YEAR</text>
                <text x="25" y="32" className="text-[5px] text-center fill-[#16181a]" textAnchor="middle">GUARANTEE</text>
              </g>
            )}
          </g>
        )}

        {/* Joshua: PRU Cores */}
        {isJoshua && (
          <g>
            <rect
              x="160"
              y="280"
              width="120"
              height="150"
              rx="4"
              fill="#fafaf8"
              stroke="#16181a"
              strokeWidth="1"
            />
            <text x="170" y="305" className="text-[10px] font-bold fill-[#16181a]">
              PERIPHERAL BUS
            </text>
            
            {/* Twin PRU Cores */}
            <g transform="translate(170, 320)">
              <rect x="0" y="0" width="48" height="40" rx="2" fill="#ffffff" stroke="#16181a" strokeWidth="0.5" />
              <text x="24" y="24" className="text-[8px] font-bold fill-[#16181a]" textAnchor="middle">PRU_0</text>
              <rect x="52" y="0" width="48" height="40" rx="2" fill="#ffffff" stroke="#16181a" strokeWidth="0.5" />
              <text x="76" y="24" className="text-[8px] font-bold fill-[#16181a]" textAnchor="middle">PRU_1</text>
              
              {/* Pulse Train (stage 4 & 8) */}
              {(stage === 4 || stage === 8) && (
                <g stroke={accent} strokeWidth="1">
                  <path d="M 5 -10 L 15 -10 L 15 -2 L 25 -2 L 25 -10 L 35 -10" fill="none" />
                  <path d="M 57 -10 L 67 -10 L 67 -2 L 77 -2 L 77 -10 L 87 -10" fill="none" />
                </g>
              )}
            </g>
          </g>
        )}

        {/* Sequoia: Large cache blocks & PCIe Lanes */}
        {isSequoia && (
          <g>
            <rect
              x="160"
              y="280"
              width="120"
              height="150"
              rx="4"
              fill="#fafaf8"
              stroke="#16181a"
              strokeWidth="1"
            />
            <text x="170" y="305" className="text-[10px] font-bold fill-[#16181a]">
              L3 CACHE / MEM
            </text>
            <text x="170" y="320" className="text-[8px] fill-[#6b7075]">
              64MB SHARED
            </text>

            {/* PCIe Lane Fan-out lines fanning out to the bottom */}
            <g stroke="#16181a" strokeWidth="0.75" opacity="0.6">
              <line x1="220" y1="430" x2="180" y2="480" />
              <line x1="220" y1="430" x2="200" y2="480" />
              <line x1="220" y1="430" x2="220" y2="480" />
              <line x1="220" y1="430" x2="240" y2="480" />
              <line x1="220" y1="430" x2="260" y2="480" />
            </g>
          </g>
        )}

        {/* 3. Boot ROM & Flash Controller */}
        {!isZion && (
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
        )}

        {/* 4. Peripheral Hub / Memory Controller */}
        {!isZion && (
          <g>
            <rect
              x="300"
              y="160"
              width="130"
              height="100"
              rx="4"
              fill="#fafaf8"
              stroke="#16181a"
              strokeWidth="1"
            />
            <text x="310" y="185" className="text-[10px] font-bold fill-[#16181a]">
              RAM CTRL
            </text>
            <text x="310" y="200" className="text-[8px] fill-[#6b7075]">
              DDR PHY / MEM BUS
            </text>
          </g>
        )}

        {/* I/O RING BORDER (Enum tags - Stage 2) */}
        <g stroke="#16181a" strokeWidth="1" fill="none">
          <rect x="150" y="150" width="300" height="300" rx="4" />
        </g>

        {stage === 2 && (
          <g className="text-[8px]" fill="#16181a">
            {/* UART */}
            <circle cx="150" cy="200" r="3" fill={bspEnumIndex >= 0 ? accent : "#16181a"} />
            <text x="115" y="203">UART</text>

            {/* SPI */}
            <circle cx="150" cy="300" r="3" fill={bspEnumIndex >= 1 ? accent : "#16181a"} />
            <text x="123" y="303">SPI</text>

            {/* I2C */}
            <circle cx="300" cy="150" r="3" fill={bspEnumIndex >= 2 ? accent : "#16181a"} />
            <text x="290" y="140">I2C</text>

            {/* PCIe */}
            <circle cx="450" cy="250" r="3" fill={bspEnumIndex >= 3 ? accent : "#16181a"} />
            <text x="460" y="253">PCIe</text>

            {/* ETH */}
            <circle cx="450" cy="350" r="3" fill={bspEnumIndex >= 4 ? accent : "#16181a"} />
            <text x="460" y="353">ETH</text>

            {/* CSI */}
            <circle cx="350" cy="450" r="3" fill={bspEnumIndex >= 5 ? accent : "#16181a"} />
            <text x="340" y="465">CSI</text>
          </g>
        )}

        {/* STAGES SPECIFIC ACTIONS/ANIMATIONS */}

        {/* Stage 3: Bootloader path tracking */}
        {stage === 3 && (
          <g stroke={accent} strokeWidth="2" fill="none">
            {/* Draw active line sequence */}
            <motion.path
              d="M 365 315 L 365 210 L 220 210"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Glowing lead dot */}
            <motion.circle r="4" fill={accent}>
              <animateMotion
                path="M 365 315 L 365 210 L 220 210"
                dur="2s"
                repeatCount="indefinite"
              />
            </motion.circle>

            {/* Boot stages labels flashing in sequence */}
            <g fill={accent} stroke="none" className="text-[7px]">
              <text x="375" y="280">ROM L1</text>
              <text x="375" y="225">STAGE 2</text>
              <text x="230" y="225">OS KERNEL</text>
            </g>
          </g>
        )}

        {/* Stage 5: Middleware DDS Pub/Sub Nodes */}
        {stage === 5 && (
          <g stroke={accent} strokeWidth="1" fill="none">
            <circle cx="365" cy="210" r="15" />
            <text x="365" y="213" stroke="none" fill={accent} className="text-[7px] text-center" textAnchor="middle">
              {isAcadia || isPinnacle ? "MQTT" : "DDS"}
            </text>

            {/* Pub node */}
            <circle cx="220" cy="210" r="12" />
            <text x="220" y="213" stroke="none" fill={accent} className="text-[7px] text-center" textAnchor="middle">PUB</text>

            {/* Sub node */}
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
        )}

        {/* Stage 6: OTA split representation */}
        {stage === 6 && (
          <g>
            {/* Draw dividing dashed line */}
            <line x1="298" y1="140" x2="298" y2="460" stroke="#16181a" strokeWidth="1" strokeDasharray="5,5" />
            
            {/* Partition Labels */}
            <text x="250" y="130" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">SYS_A</text>
            <text x="350" y="130" className="text-[10px] font-bold fill-[#16181a]" textAnchor="middle">SYS_B</text>

            {/* Glow partitions alternately */}
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

        {/* Stage 7: Magnifying Sweep glass */}
        {stage === 7 && (
          <g>
            <motion.g
              animate={{ x: [0, 150, -100, 0], y: [0, 80, -40, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Scan Glass */}
              <circle cx="300" cy="300" r="50" fill="none" stroke={accent} strokeWidth="1.5" />
              <line x1="300" y1="250" x2="300" y2="350" stroke={accent} strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="250" y1="300" x2="350" y2="300" stroke={accent} strokeWidth="0.5" strokeDasharray="2,2" />
              
              {/* Corner brackets indicating scanning HUD */}
              <path d="M 235 285 L 235 270 L 250 270" fill="none" stroke={accent} strokeWidth="1" />
              <path d="M 365 285 L 365 270 L 350 270" fill="none" stroke={accent} strokeWidth="1" />
              <path d="M 235 315 L 235 330 L 250 330" fill="none" stroke={accent} strokeWidth="1" />
              <path d="M 365 315 L 365 330 L 350 330" fill="none" stroke={accent} strokeWidth="1" />

              <rect x="255" y="235" width="90" height="12" rx="2" fill="#16181a" opacity="0.8" />
              <text x="300" y="243" fill="#ffffff" className="text-[6px] text-center" textAnchor="middle">
                PROBE_LOG: OK
              </text>
            </motion.g>
          </g>
        )}

        {/* SATELLITE CHIPS */}
        {/* Arches: STM32 co-processor */}
        {isArches && (
          <g>
            {/* Interconnect trace line */}
            <motion.path
              d="M 450 300 H 510"
              stroke="#16181a"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Communication pulse */}
            {(stage === 2 || stage === 4 || stage === 8) && (
              <motion.circle r="3" fill={accent}>
                <animateMotion
                  path="M 450 300 H 510"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            )}

            {/* STM32 Satellite Chip */}
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

        {/* Acadia: Pico W Satellite (RP2040) */}
        {isAcadia && (
          <g>
            {/* Interconnect line */}
            <motion.path
              d="M 450 300 H 510"
              stroke="#16181a"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Pico W satellite chip */}
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
            {/* Antenna Symbol */}
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

// Separate component for the general Home page / fallback chip representation
function HomeChip({ stage }: { stage: number }) {
  // Animates morphing representations depending on the stage/index
  return (
    <svg viewBox="0 0 600 600" className="w-full h-full max-w-[450px]">
      <g opacity="0.1">
        {Array.from({ length: 8 }).map((_, i) =>
          Array.from({ length: 8 }).map((_, j) => (
            <circle key={`grid-${i}-${j}`} cx={120 + i * 50} cy={120 + j * 50} r="1.5" fill="#16181a" />
          ))
        )}
      </g>
      
      {/* Silicon Core */}
      <motion.rect
        x="150"
        y="150"
        width="300"
        height="300"
        rx="8"
        fill="#ffffff"
        stroke="#16181a"
        strokeWidth="2"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      
      <circle cx="300" cy="300" r="140" fill="none" stroke="#e4e2dd" strokeWidth="1" />

      {/* Internal Blocks */}
      <rect x="180" y="180" width="100" height="100" rx="4" fill="#fafaf8" stroke="#16181a" strokeWidth="1" />
      <text x="230" y="235" className="text-[10px] font-display font-bold fill-[#16181a]" textAnchor="middle">CORE</text>
      
      <rect x="320" y="180" width="100" height="100" rx="4" fill="#fafaf8" stroke="#16181a" strokeWidth="1" />
      <text x="370" y="235" className="text-[10px] font-display font-bold fill-[#16181a]" textAnchor="middle">SYS_IO</text>

      <rect x="180" y="320" width="240" height="100" rx="4" fill="#fafaf8" stroke="#16181a" strokeWidth="1" />
      <text x="300" y="375" className="text-[12px] font-display font-bold fill-[#16181a]" textAnchor="middle">SOCCENTRIC</text>
      
      {/* Signal flow moving circles around the center */}
      <circle cx="300" cy="300" r="12" fill="#16181a" />
      <motion.circle
        cx="300"
        cy="300"
        r="4"
        fill="#6b7075"
        animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
