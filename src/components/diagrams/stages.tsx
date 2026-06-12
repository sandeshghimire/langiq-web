"use client";

import React from "react";
import {
    DiagramFrame,
    Iso3DBox,
} from "./shared3d";
import type { DiagramContext } from "./registry";
import { platforms } from "@/data/platforms";

// Round a number to 2 decimal places. Used everywhere we emit an SVG
// coordinate that came from `Math.cos` / `Math.sin` / floating-point
// arithmetic. Without this, V8 on the server and V8 on the client
// can disagree on the trailing digits of a result like
// `Math.cos(Math.PI / 3) * 50`, which makes the SSR'd SVG markup
// not match the client's, which trips a React hydration mismatch
// warning and floods the console with diffs. Round to 2dp — the
// diagram only needs 1/100 of a pixel of precision, but V8's
// default toString emits 15+ digits.
const r = (n: number) => Math.round(n * 100) / 100;

// Shared block container. When `suppressAnimations` is true (the
// default during crossfades) we just wrap children in a plain `<g>`
// with the right opacity, so the diagram appears in its final state
// immediately. When `suppressAnimations` is false, blocks fade + slide
// in with a stagger — used only on the very first ever appearance of a
// stage, never on subsequent re-mounts caused by the FLIP morph.
//
// `active` and `delay` are accepted but ignored when animations are
// suppressed, so the dozens of call sites in this file don't need
// to change.
const BlockReveal: React.FC<{
    active?: boolean;
    delay?: number;
    suppressAnimations?: boolean;
    children: React.ReactNode;
}> = ({ suppressAnimations = true, children }) => {
    if (suppressAnimations) {
        return <g opacity={1}>{children}</g>;
    }
    return <g opacity={1}>{children}</g>;
};

// Per-platform block layouts for the Overview (Stage 1) diagram. The
// blocks are placed on a 4x3 grid; the platform determines which
// blocks are present and their labels.
const PLATFORM_BLOCKS: Record<string, { name: string; sub: string }[]> = {
    arches: [
        { name: "GPU", sub: "CUDA" },
        { name: "DLA", sub: "x2" },
        { name: "Cortex-A", sub: "8C" },
        { name: "STM32", sub: "RT" },
        { name: "NVMe", sub: "PCIe" },
        { name: "CSI", sub: "x6" },
        { name: "RPMsg", sub: "LINK" },
        { name: "Ethernet", sub: "GbE" },
        { name: "USB 3", sub: "x3" },
        { name: "CAN-FD", sub: "x2" },
        { name: "Display", sub: "DP/HDMI" },
        { name: "GPIO", sub: "I/O" },
    ],
    acadia: [
        { name: "Cortex-A", sub: "4C" },
        { name: "Video", sub: "H.265" },
        { name: "Pico W", sub: "RP2040" },
        { name: "WiFi", sub: "2.4/5G" },
        { name: "ETH", sub: "GbE" },
        { name: "USB 3", sub: "x2" },
        { name: "CAM", sub: "x2" },
        { name: "DSI", sub: "Display" },
        { name: "HDMI", sub: "4K" },
        { name: "PCIe", sub: "Gen 2" },
        { name: "I2C/SPI", sub: "x4" },
        { name: "RTC", sub: "+ GPIO" },
    ],
    zion: [
        { name: "Cortex-A53", sub: "4C" },
        { name: "FPGA", sub: "Fabric" },
        { name: "R5 Lockstep", sub: "2C" },
        { name: "DDR4", sub: "ctrl" },
        { name: "Bitstream", sub: "OTA" },
        { name: "GEM", sub: "GbE x2" },
        { name: "USB 3", sub: "x2" },
        { name: "DisplayPort", sub: "x2" },
        { name: "SATA", sub: "x2" },
        { name: "CAN-FD", sub: "x2" },
        { name: "SPI/QSPI", sub: "x4" },
        { name: "PL I/O", sub: "GPIO" },
    ],
    pinnacle: [
        { name: "Cortex-A53", sub: "4C" },
        { name: "Cortex-M7", sub: "1C" },
        { name: "GPU", sub: "Vivante" },
        { name: "DDR4", sub: "ctrl" },
        { name: "Display", sub: "LVDS/DSI" },
        { name: "CAN-FD", sub: "x2" },
        { name: "ENET", sub: "1Gb x2" },
        { name: "USB 3", sub: "x2" },
        { name: "PCIe", sub: "Gen 2" },
        { name: "15YR", sub: "LIFETIME" },
        { name: "FuSa", sub: "IEC 61508" },
        { name: "ECC", sub: "LPDDR4" },
    ],
    joshua: [
        { name: "Cortex-A15", sub: "2C" },
        { name: "PRU", sub: "x2" },
        { name: "PRU", sub: "x2" },
        { name: "EtherCAT", sub: "PHY" },
        { name: "DDR3", sub: "ctrl" },
        { name: "QSPI", sub: "x2" },
        { name: "ENET", sub: "1Gb x2" },
        { name: "USB 3", sub: "x2" },
        { name: "CAN-FD", sub: "x2" },
        { name: "ADC", sub: "12-bit" },
        { name: "PWM", sub: "x6" },
        { name: "GPIO", sub: "168" },
    ],
    sequoia: [
        { name: "x86", sub: "8C/16T" },
        { name: "DDR4", sub: "x2 chan" },
        { name: "PCIe", sub: "Gen 4" },
        { name: "10GbE", sub: "x2" },
        { name: "SATA", sub: "x4" },
        { name: "M.2", sub: "NVMe" },
        { name: "USB 3", sub: "x4" },
        { name: "IPMI", sub: "BMC" },
        { name: "Hypervisor", sub: "Xen/ACRN" },
        { name: "PREEMPT_RT", sub: "kernel" },
        { name: "SR-IOV", sub: "vfio" },
        { name: "ECC", sub: "REG" },
    ],
};

// ─────────────────────────────────────────────────────────────────
// Stage 1 — Overview
// ─────────────────────────────────────────────────────────────────
export const Stage1Overview: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const blocks = PLATFORM_BLOCKS[platformId] ?? PLATFORM_BLOCKS.arches;

    // Lay out 12 blocks in a 4x3 grid centered in the frame.
    const cellW = 90;
    const cellH = 64;
    const gridX = (480 - 4 * cellW - 30) / 2;
    const gridY = 70;

    return (
        <DiagramFrame
            accent={accent}
            stage={1}
            title="OVERVIEW"
            filterId={filterId}
        >
            {blocks.map((b, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                const x = gridX + col * (cellW + 10);
                const y = gridY + row * (cellH + 12);
                return (
                    <BlockReveal key={`${platformId}-${i}`} active delay={i * 0.05}>
                        <Iso3DBox
                            x={x}
                            y={y}
                            w={cellW}
                            h={cellH}
                            depth={6}
                            accent={accent}
                            label={b.name}
                            sublabel={b.sub}
                            filterId={filterId}
                        />
                    </BlockReveal>
                );
            })}

            {/* Longevity seal for Pinnacle (per req.md §6) */}
            {platformId === "pinnacle" && (
                <BlockReveal active delay={0.7}>
                    <g transform="translate(360, 50)">
                        <circle r={26} fill="#ffffff" stroke={accent} strokeWidth={1.5} />
                        <text
                            textAnchor="middle"
                            y={-4}
                            fill={accent}
                            style={{ fontSize: 10, fontWeight: 700, fontFamily: "var(--font-mono), monospace" }}
                        >
                            15
                        </text>
                        <text
                            textAnchor="middle"
                            y={8}
                            fill={accent}
                            style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                        >
                            YR
                        </text>
                        <text
                            textAnchor="middle"
                            y={20}
                            fill="#6b7075"
                            style={{ fontSize: 5, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                        >
                            LONGEVITY
                        </text>
                    </g>
                </BlockReveal>
            )}

            {/* Pico W satellite for Acadia */}
            {platformId === "acadia" && (
                <BlockReveal active delay={0.7}>
                    <g transform="translate(420, 90)">
                        <rect x={-22} y={-14} width={44} height={28} fill="#ffffff" stroke={accent} strokeWidth={1.2} rx={2} />
                        <text
                            textAnchor="middle"
                            y={3}
                            fill={accent}
                            style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}
                        >
                            PICO W
                        </text>
                        <line x1={0} y1={-14} x2={0} y2={-26} stroke={accent} strokeWidth={1} />
                        <path
                            d="M -3 -26 Q 0 -34 3 -26 Q 0 -22 -3 -26 Z"
                            fill={accent}
                        />
                    </g>
                </BlockReveal>
            )}

            {/* STM32 satellite for Arches */}
            {platformId === "arches" && (
                <BlockReveal active delay={0.7}>
                    <g transform="translate(420, 90)">
                        <rect x={-22} y={-14} width={44} height={28} fill="#ffffff" stroke={accent} strokeWidth={1.2} rx={2} />
                        <text
                            textAnchor="middle"
                            y={3}
                            fill={accent}
                            style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}
                        >
                            STM32
                        </text>
                        <text
                            textAnchor="middle"
                            y={11}
                            fill={accent}
                            style={{ fontSize: 4, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}
                        >
                            RT coproc
                        </text>
                    </g>
                </BlockReveal>
            )}

            {/* Platform edge caption at the bottom */}
            <BlockReveal active delay={0.9}>
                <text
                    x={240}
                    y={340}
                    textAnchor="middle"
                    fill="#16181a"
                    style={{ fontSize: 9, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.6, textTransform: "uppercase" }}
                >
                    {ctx.platform?.name ?? "Platform"} — {ctx.platform?.chipFamily ?? "Architecture"}
                </text>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 2 — BSP enumeration
// ─────────────────────────────────────────────────────────────────
const ENUM_INTERFACES = [
    "UART0", "UART1", "I2C0", "I2C1", "SPI0", "SPI1",
    "ETH0", "ETH1", "PCIe", "USB0", "USB1", "GPIO",
    "CAN0", "CAN1", "CSI0", "CSI1", "DSI", "I2S",
];

export const Stage2Bsp: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    // Use a 6x3 grid of interface blocks lighting up in sequence
    const cols = 6;
    const rows = 3;
    const cellW = 56;
    const cellH = 36;
    const gridX = (480 - cols * cellW - (cols - 1) * 8) / 2;
    const gridY = 90;

    return (
        <DiagramFrame
            accent={accent}
            stage={2}
            title="BSP"
            filterId={filterId}
        >
            {/* Center die (the chip being enumerated) */}
            <BlockReveal active delay={0.1}>
                <Iso3DBox
                    x={180}
                    y={140}
                    w={120}
                    h={80}
                    depth={10}
                    accent={accent}
                    label={ctx.platform?.chipFamily ?? "SoC"}
                    sublabel="BSP CORE"
                    filterId={filterId}
                />
            </BlockReveal>

            {/* Enumerated interface cells around it */}
            {ENUM_INTERFACES.slice(0, cols * rows).map((iface, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = gridX + col * (cellW + 8);
                const y = gridY + row * (cellH + 14);
                // Stagger highlight along the diagonal
                const lit = true;
                return (
                    <BlockReveal key={iface} active delay={0.25 + i * 0.04}>
                        <Iso3DBox
                            x={x}
                            y={y}
                            w={cellW}
                            h={cellH}
                            depth={4}
                            accent={accent}
                            label={iface}
                            sublabel="OK"
                            filterId={filterId}
                            fillFront="#fafaf8"
                            fillTop={lit ? "#ffffff" : "#fafaf8"}
                        />
                    </BlockReveal>
                );
            })}

            {/* Connector lines from outer cells to center die */}
            {ENUM_INTERFACES.slice(0, 12).map((iface, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = gridX + col * (cellW + 8) + cellW / 2;
                const y = gridY + row * (cellH + 14) + cellH / 2;
                const targetX = 240;
                const targetY = 180;
                return (
                    <line
                        key={`line-${iface}`}
                        x1={x}
                        y1={y}
                        x2={targetX}
                        y2={targetY}
                        stroke={accent}
                        strokeWidth={0.6}
                        opacity={0.35}
                        strokeDasharray="2 3"
                    />
                );
            })}

            {/* BSP status footer */}
            <BlockReveal active delay={1.2}>
                <text
                    x={20}
                    y={345}
                    fill={accent}
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    18/18 INTERFACES · ENUM OK · DT OVERLAYS APPLIED
                </text>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 3 — Boot chain
// ─────────────────────────────────────────────────────────────────
export const Stage3Boot: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const chain = ctx.platform?.bootChain ?? ["BootROM", "FSBL", "U-Boot", "kernel"];

    // Lay out as a horizontal sequence of isometric "stage" blocks
    // connected by flowing lines. Stages: 3-6 nodes depending on platform.
    const n = chain.length;
    const blockW = 80;
    const blockH = 50;
    const yMid = 160;
    const totalW = n * blockW + (n - 1) * 18;
    const startX = (480 - totalW) / 2;

    return (
        <DiagramFrame
            accent={accent}
            stage={3}
            title="BOOT CHAIN"
            filterId={filterId}
        >
            {/* Connector ribbon under the chain */}
            <line
                x1={startX + blockW / 2}
                y1={yMid + blockH + 16}
                x2={startX + totalW - blockW / 2}
                y2={yMid + blockH + 16}
                stroke={accent}
                strokeWidth={1.2}
                opacity={0.3}
            />

            {chain.map((stage, i) => {
                const x = startX + i * (blockW + 18);
                const cx = x + blockW / 2;
                return (
                    <g key={`${stage}-${i}`}>
                        {/* Hop-to-hop connector line on top of the block */}
                        {i < n - 1 && (
                            <line
                                x1={cx + blockW / 2}
                                y1={yMid + blockH / 2}
                                x2={cx + blockW / 2 + 18}
                                y2={yMid + blockH / 2}
                                stroke={accent}
                                strokeWidth={1.2}
                            />
                        )}

                        <BlockReveal active delay={0.2 + i * 0.18}>
                            <Iso3DBox
                                x={x}
                                y={yMid}
                                w={blockW}
                                h={blockH}
                                depth={6}
                                accent={accent}
                                label={stage}
                                sublabel={`STAGE ${i + 1}`}
                                filterId={filterId}
                            />
                        </BlockReveal>

                        {/* Stage hop number circle below */}
                        <g
                        >
                            <circle
                                cx={cx}
                                cy={yMid + blockH + 30}
                                r={9}
                                fill="#ffffff"
                                stroke={accent}
                                strokeWidth={1.2}
                            />
                            <text
                                x={cx}
                                y={yMid + blockH + 33}
                                textAnchor="middle"
                                fill={accent}
                                style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace" }}
                            >
                                {i + 1}
                            </text>
                        </g>
                    </g>
                );
            })}

            {/* Golden boot stamp at the end */}
            <BlockReveal active delay={0.6 + n * 0.18}>
                <g transform="translate(380, 90)">
                    <rect x={-32} y={-12} width={64} height={24} fill={accent} rx={2} />
                    <text
                        textAnchor="middle"
                        y={4}
                        fill="#ffffff"
                        style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.6, textTransform: "uppercase" }}
                    >
                        ✓ GOLDEN
                    </text>
                </g>
            </BlockReveal>

            {/* Boot time ticker */}
            <BlockReveal active delay={1.0}>
                <text
                    x={20}
                    y={345}
                    fill="#6b7075"
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    [ 0.000 ] bootrom  [ 0.412 ] stage 1  →  {n} STAGES  ·  failsafe OK
                </text>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 4 — Kernel & Drivers
// ─────────────────────────────────────────────────────────────────
const DRIVER_MODULES = [
    "I2C", "SPI", "ETH", "GPIO", "CAN", "UART", "PCIe", "PWM",
    "ADC", "I2S", "USB", "DSI",
];

export const Stage4Kernel: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    // Center die + docking driver modules around it
    const dieX = 200;
    const dieY = 130;
    const dieW = 80;
    const dieH = 100;

    return (
        <DiagramFrame
            accent={accent}
            stage={4}
            title="KERNEL & DRIVERS"
            filterId={filterId}
        >
            {/* Mesh of pulses around the die (4 short live lines) */}
            {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                const r1 = 50;
                const r2 = 80;
                return (
                    <line
                        key={`mesh-${i}`}
                        x1={r(dieX + dieW / 2 + Math.cos(angle) * r1)}
                        y1={r(dieY + dieH / 2 + Math.sin(angle) * r1)}
                        x2={r(dieX + dieW / 2 + Math.cos(angle) * r2)}
                        y2={r(dieY + dieH / 2 + Math.sin(angle) * r2)}
                        stroke={accent}
                        strokeWidth={1}
                    />
                );
            })}

            <BlockReveal active delay={0.1}>
                <Iso3DBox
                    x={dieX}
                    y={dieY}
                    w={dieW}
                    h={dieH}
                    depth={10}
                    accent={accent}
                    label="KERNEL"
                    sublabel="CUSTOM"
                    filterId={filterId}
                />
            </BlockReveal>

            {/* Driver modules flying in from edges */}
            {DRIVER_MODULES.map((drv, i) => {
                const angle = (i / DRIVER_MODULES.length) * Math.PI * 2 - Math.PI / 2;
                const dist = 130;
                const mx = r(dieX + dieW / 2 + Math.cos(angle) * dist - 28);
                const my = r(dieY + dieH / 2 + Math.sin(angle) * dist - 14);
                return (
                    <BlockReveal key={drv} active delay={0.4 + i * 0.06}>
                        <Iso3DBox
                            x={mx}
                            y={my}
                            w={56}
                            h={28}
                            depth={4}
                            accent={accent}
                            label={drv}
                            sublabel=".ko"
                            filterId={filterId}
                        />
                    </BlockReveal>
                );
            })}

            {/* Module count footer */}
            <BlockReveal active delay={1.2}>
                <text
                    x={20}
                    y={345}
                    fill={accent}
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    {DRIVER_MODULES.length} DRIVERS LOADED  ·  DT OVERLAYS APPLIED  ·  MAINLINE-TRACKING
                </text>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 5 — Middleware (pub/sub fan-out)
// ─────────────────────────────────────────────────────────────────
const PROTOCOL_SETS: Record<string, string[]> = {
    arches: ["ROS 2", "DDS", "MQTT", "gRPC", "TensorRT"],
    acadia: ["MQTT", "DDS", "HTTP", "WebSocket"],
    zion: ["DDS", "ROS 2", "MQTT", "Custom bus"],
    pinnacle: ["MQTT", "OPC UA", "Modbus", "HTTP"],
    joshua: ["EtherCAT", "PROFINET", "OPC UA", "Modbus"],
    sequoia: ["DDS", "MQTT", "gRPC", "TSN"],
};

export const Stage5Middleware: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const protocols = PROTOCOL_SETS[platformId] ?? PROTOCOL_SETS.arches;

    return (
        <DiagramFrame
            accent={accent}
            stage={5}
            title="MIDDLEWARE"
            filterId={filterId}
        >
            {/* Publisher at the top */}
            <BlockReveal active delay={0.1}>
                <Iso3DBox
                    x={200}
                    y={60}
                    w={80}
                    h={40}
                    depth={6}
                    accent={accent}
                    label="PUBLISHER"
                    sublabel="topic/*"
                    filterId={filterId}
                />
            </BlockReveal>

            {/* Spokes to subscribers */}
            {protocols.map((p, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                const x = 30 + col * 110;
                const y = 220 + row * 60;
                const cx = x + 30;
                const cy = y + 14;
                return (
                    <g key={p}>
                        <line
                            x1={240}
                            y1={104}
                            x2={cx}
                            y2={cy}
                            stroke={accent}
                            strokeWidth={0.8}
                            opacity={0.4}
                        />
                        <BlockReveal active delay={0.3 + i * 0.1}>
                            <Iso3DBox
                                x={x}
                                y={y}
                                w={60}
                                h={28}
                                depth={4}
                                accent={accent}
                                label={p}
                                sublabel="SUB"
                                filterId={filterId}
                            />
                        </BlockReveal>
                    </g>
                );
            })}

            {/* Fan-out caption */}
            <BlockReveal active delay={0.8}>
                <text
                    x={20}
                    y={345}
                    fill={accent}
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    PUB/SUB FAN-OUT  ·  {protocols.length} PROTOCOLS  ·  QoS-CONFIGURED
                </text>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 6 — OTA A/B
// ─────────────────────────────────────────────────────────────────
export const Stage6Ota: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    return (
        <DiagramFrame
            accent={accent}
            stage={6}
            title="OTA & RECOVERY"
            filterId={filterId}
        >
            {/* Partition A (active) */}
            <BlockReveal active delay={0.1}>
                <Iso3DBox
                    x={50}
                    y={70}
                    w={150}
                    h={220}
                    depth={10}
                    accent={accent}
                    label="PARTITION A"
                    sublabel="ACTIVE  ✓"
                    filterId={filterId}
                    fillTop="#ffffff"
                    fillFront="#f3f1ec"
                />
            </BlockReveal>

            {/* Partition B (incoming) — split into 6 horizontal cells being written */}
            {Array.from({ length: 6 }).map((_, i) => (
                <BlockReveal key={`b-cell-${i}`} active delay={0.3 + i * 0.12}>
                    <rect
                        x={285}
                        y={70 + i * 36}
                        width={150}
                        height={28}
                        fill={i < 4 ? "#ffffff" : "#fafaf8"}
                        stroke={accent}
                        strokeWidth={1}
                        rx={2}
                    />
                    <text
                        x={360}
                        y={70 + i * 36 + 17}
                        textAnchor="middle"
                        fill={accent}
                        style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4 }}
                    >
                        {i < 4 ? `B/${i + 1} WRITTEN` : "B/5…"}
                    </text>
                </BlockReveal>
            ))}

            {/* Big partition B header */}
            <BlockReveal active delay={0.2}>
                <text
                    x={360}
                    y={60}
                    textAnchor="middle"
                    fill={accent}
                    style={{ fontSize: 9, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    PARTITION B
                </text>
            </BlockReveal>

            {/* Swap arrow A → B */}
            <line
                x1={210}
                y1={180}
                x2={280}
                y2={180}
                stroke={accent}
                strokeWidth={2}
            />
            <polygon
                points="280,180 272,176 272,184"
                fill={accent}
            />

            {/* Rollback stamp */}
            <BlockReveal active delay={1.6}>
                <g transform="translate(360, 320)">
                    <rect x={-58} y={-12} width={116} height={22} fill="#16181a" rx={2} />
                    <text
                        textAnchor="middle"
                        y={3}
                        fill="#ffffff"
                        style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                    >
                        ✓ ROLLBACK READY
                    </text>
                </g>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 7 — SDK & Tools
// ─────────────────────────────────────────────────────────────────
export const Stage7Sdk: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    const codeLines = [
        "$ insmod soccentric.ko",
        "$ soc-cli probe",
        "[ ok ] bootlog: 1.24s",
        "[ ok ] init complete",
    ];

    return (
        <DiagramFrame
            accent={accent}
            stage={7}
            title="SDK & TOOLS"
            filterId={filterId}
        >
            {/* Magnifier sweep (animated mask) */}
            <g
            >
                <circle cx={20} cy={170} r={32} fill="none" stroke={accent} strokeWidth={1.2} />
                <line x1={42} y1={192} x2={56} y2={206} stroke={accent} strokeWidth={1.2} />
            </g>

            {/* Center die with code bracket glyphs */}
            <BlockReveal active delay={0.1}>
                <Iso3DBox
                    x={130}
                    y={80}
                    w={220}
                    h={200}
                    depth={12}
                    accent={accent}
                    label="YOUR APP"
                    sublabel="on eSDK"
                    filterId={filterId}
                />
            </BlockReveal>

            {/* Code bracket glyphs in the corners */}
            <BlockReveal active delay={0.4}>
                {[
                    { x: 80, y: 60 },
                    { x: 360, y: 60 },
                    { x: 80, y: 280 },
                    { x: 360, y: 280 },
                ].map((pos, i) => (
                    <g key={`br-${i}`} transform={`translate(${pos.x}, ${pos.y})`}>
                        <text
                            fill={accent}
                            style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--font-mono), monospace" }}
                        >
                            {i % 2 === 0 ? "{ }" : "</>"}
                        </text>
                    </g>
                ))}
            </BlockReveal>

            {/* Boot-log readout on the bottom */}
            <BlockReveal active delay={0.6}>
                <rect
                    x={20}
                    y={320}
                    width={440}
                    height={20}
                    fill="#16181a"
                    rx={2}
                />
                <text
                    x={28}
                    y={333}
                    fill="#ffffff"
                    style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3 }}
                >
                    {codeLines.join("    ")}
                </text>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 8 — Performance
// ─────────────────────────────────────────────────────────────────
export const Stage8Perf: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    // Build a fake oscilloscope path
    const oscPath = "M 20 130 L 60 130 L 70 80 L 80 180 L 90 100 L 100 160 L 110 130 L 160 130 L 170 60 L 180 200 L 190 110 L 200 150 L 210 130 L 260 130 L 270 90 L 280 170 L 290 120 L 300 140 L 310 130 L 380 130";

    return (
        <DiagramFrame
            accent={accent}
            stage={8}
            title="PERFORMANCE"
            filterId={filterId}
        >
            {/* Oscilloscope grid */}
            <BlockReveal active delay={0.1}>
                <rect
                    x={20}
                    y={50}
                    width={440}
                    height={120}
                    fill="#fafaf8"
                    stroke={accent}
                    strokeWidth={1}
                    rx={2}
                />
                {/* gridlines */}
                {Array.from({ length: 7 }).map((_, i) => (
                    <line
                        key={`gv-${i}`}
                        x1={20 + (i + 1) * 55}
                        y1={50}
                        x2={20 + (i + 1) * 55}
                        y2={170}
                        stroke={accent}
                        strokeWidth={0.4}
                        opacity={0.2}
                    />
                ))}
                {Array.from({ length: 2 }).map((_, i) => (
                    <line
                        key={`gh-${i}`}
                        x1={20}
                        y1={90 + i * 30}
                        x2={460}
                        y2={90 + i * 30}
                        stroke={accent}
                        strokeWidth={0.4}
                        opacity={0.2}
                    />
                ))}

                {/* The trace */}
                <path
                    d={oscPath}
                    stroke={accent}
                    strokeWidth={1.5}
                    fill="none"
                />
            </BlockReveal>

            {/* Bar meters (3 of them) */}
            {[
                { label: "BOOT", value: 0.92, unit: "1.24s" },
                { label: "GPU", value: 0.78, unit: "98%" },
                { label: "MEM", value: 0.55, unit: "412MB" },
            ].map((m, i) => (
                <BlockReveal key={m.label} active delay={0.5 + i * 0.12}>
                    <g transform={`translate(${30 + i * 145}, 210)`}>
                        <text
                            fill="#6b7075"
                            style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}
                        >
                            {m.label}
                        </text>
                        <rect x={0} y={6} width={120} height={10} fill="#fafaf8" stroke={accent} strokeWidth={0.8} rx={1} />
                        <rect
                            x={0}
                            y={6}
                            width={120 * m.value}
                            height={10}
                            fill={accent}
                            style={{ transformOrigin: "0 0" }}
                        />
                        <text
                            x={125}
                            y={14}
                            fill={accent}
                            style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace" }}
                        >
                            {m.unit}
                        </text>
                    </g>
                </BlockReveal>
            ))}

            {/* Hotspot circle (cooling wave) */}
            <BlockReveal active delay={1.0}>
                <g
                    style={{ transformOrigin: "100px 110px" }}
                >
                    <circle cx={100} cy={110} r={16} fill={accent} opacity={0.5} />
                </g>
            </BlockReveal>

            {/* Footer metric */}
            <BlockReveal active delay={1.0}>
                <text
                    x={20}
                    y={345}
                    fill={accent}
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    LATENCY P99  ·  0.84ms  ·  60fps  ·  hotspot cooled ✓
                </text>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 9 — Manufacturing (panel grid)
// ─────────────────────────────────────────────────────────────────
export const Stage9Mfg: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    // 4x4 panel grid stamping PROVISIONED
    const cols = 4;
    const rows = 4;
    const cellSize = 56;
    const startX = (480 - cols * cellSize - (cols - 1) * 8) / 2;
    const startY = 70;

    return (
        <DiagramFrame
            accent={accent}
            stage={9}
            title="MANUFACTURING"
            filterId={filterId}
        >
            {Array.from({ length: rows * cols }).map((_, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = startX + col * (cellSize + 8);
                const y = startY + row * (cellSize + 8);
                const serial = String(i + 1).padStart(3, "0");
                return (
                    <BlockReveal key={i} active delay={0.1 + i * 0.06}>
                        <g>
                            <rect
                                x={x}
                                y={y}
                                width={cellSize}
                                height={cellSize}
                                fill="#ffffff"
                                stroke={accent}
                                strokeWidth={1}
                                rx={2}
                            />
                            <text
                                x={x + 4}
                                y={y + 12}
                                fill={accent}
                                style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3 }}
                            >
                                #{serial}
                            </text>
                            <text
                                x={x + cellSize - 4}
                                y={y + 12}
                                textAnchor="end"
                                fill={accent}
                                style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3 }}
                            >
                                ✓
                            </text>
                            {/* Mini die silhouette */}
                            <rect
                                x={x + 10}
                                y={y + 22}
                                width={cellSize - 20}
                                height={cellSize - 30}
                                fill="#fafaf8"
                                stroke={accent}
                                strokeWidth={0.6}
                                rx={1}
                            />
                            <text
                                x={x + cellSize / 2}
                                y={y + cellSize - 6}
                                textAnchor="middle"
                                fill="#6b7075"
                                style={{ fontSize: 5, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}
                            >
                                PROV
                            </text>
                        </g>
                    </BlockReveal>
                );
            })}

            {/* Factory line stamp */}
            <BlockReveal active delay={1.4}>
                <g transform="translate(240, 330)">
                    <rect x={-90} y={-10} width={180} height={20} fill={accent} rx={2} />
                    <text
                        textAnchor="middle"
                        y={4}
                        fill="#ffffff"
                        style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                    >
                        ✓ 16/16 PROVISIONED
                    </text>
                </g>
            </BlockReveal>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Public dispatch
// ─────────────────────────────────────────────────────────────────
export const StageDiagram: React.FC<{
    stage: number;
    ctx: DiagramContext;
    filterId: string;
}> = ({ stage, ctx, filterId }) => {
    switch (stage) {
        case 1:
            return <Stage1Overview ctx={ctx} filterId={filterId} />;
        case 2:
            return <Stage2Bsp ctx={ctx} filterId={filterId} />;
        case 3:
            return <Stage3Boot ctx={ctx} filterId={filterId} />;
        case 4:
            return <Stage4Kernel ctx={ctx} filterId={filterId} />;
        case 5:
            return <Stage5Middleware ctx={ctx} filterId={filterId} />;
        case 6:
            return <Stage6Ota ctx={ctx} filterId={filterId} />;
        case 7:
            return <Stage7Sdk ctx={ctx} filterId={filterId} />;
        case 8:
            return <Stage8Perf ctx={ctx} filterId={filterId} />;
        case 9:
        default:
            return <Stage9Mfg ctx={ctx} filterId={filterId} />;
    }
};

// Helper for Home — pick the platform context for the current Home stage
export function getHomeContext(stage: number): DiagramContext {
    // Home page mirrors the platform ordering: 1=hero, 2=arches,
    // 3=acadia, 4=zion, 5=pinnacle, 6=joshua, 7=sequoia, 8=team,
    // 9=closing panel grid.
    let platformId: string | null = null;
    if (stage === 2) platformId = "arches";
    else if (stage === 3) platformId = "acadia";
    else if (stage === 4) platformId = "zion";
    else if (stage === 5) platformId = "pinnacle";
    else if (stage === 6) platformId = "joshua";
    else if (stage === 7) platformId = "sequoia";
    return {
        platform: platformId ? platforms.find((p) => p.id === platformId) ?? null : null,
        stage,
        isHome: true,
    };
}
