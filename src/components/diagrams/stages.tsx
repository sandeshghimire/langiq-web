"use client";

import React from "react";
import { DiagramFrame } from "./shared3d";
import type { DiagramContext } from "./registry";
import { platforms } from "@/data/platforms";

// Round a number to 2dp — keeps SSR and client SVG markup bit-identical
// (prevents React hydration mismatches from floating-point trailing
// digits in trig-derived coordinates).
const r = (n: number) => Math.round(n * 100) / 100;

// Shared palette (light-only by design — no dark variant).
const INK = "#1f1e1c";
const MUTED = "#6f6c66";
const PAPER = "#fafaf5";
const WHITE = "#ffffff";
const MONO = "var(--font-mono), monospace";

// ── Tiny shared motifs ──────────────────────────────────────────

// A status LED that blinks. Stagger via inline animationDelay.
const LED: React.FC<{ cx: number; cy: number; accent: string; on?: boolean; delay?: number }> = ({
    cx,
    cy,
    accent,
    on = true,
    delay = 0,
}) => (
    <circle
        cx={cx}
        cy={cy}
        r={2.4}
        fill={on ? accent : WHITE}
        stroke={accent}
        strokeWidth={0.8}
        className={on ? "diag-blink" : undefined}
        style={on ? { animationDelay: `${delay}s` } : undefined}
    />
);

// Bottom mono status readout strip.
const StatusStrip: React.FC<{ y?: number; accent: string; text: string }> = ({
    y = 342,
    accent,
    text,
}) => (
    <text
        x={20}
        y={y}
        fill={accent}
        style={{ fontSize: 8, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5, textTransform: "uppercase" }}
    >
        {text}
    </text>
);

// A flat IC package: rounded package body, pin ticks, pin-1 dot, inner die.
const Chip: React.FC<{
    cx: number; cy: number; w: number; h: number; accent: string;
    label?: string; sub?: string; bodyFill?: string;
}> = ({ cx, cy, w, h, accent, label, sub, bodyFill = WHITE }) => {
    const left = cx - w / 2;
    const top = cy - h / 2;
    const pins = Math.max(4, Math.floor(w / 16));
    return (
        <g>
            <rect x={left} y={top} width={w} height={h} rx={5} fill={bodyFill} stroke={INK} strokeWidth={1.4} />
            {/* pin ticks (top + bottom) */}
            {Array.from({ length: pins }).map((_, i) => {
                const px = left + 8 + (i * (w - 16)) / (pins - 1);
                return (
                    <g key={`pin-${i}`}>
                        <line x1={px} y1={top} x2={px} y2={top - 4} stroke={INK} strokeWidth={1} />
                        <line x1={px} y1={top + h} x2={px} y2={top + h + 4} stroke={INK} strokeWidth={1} />
                    </g>
                );
            })}
            <circle cx={left + 6} cy={top + 6} r={2} fill={accent} />
            {/* inner die */}
            <rect x={left + 12} y={top + 12} width={w - 24} height={h - 24} rx={3} fill={PAPER} stroke={accent} strokeWidth={1} />
            {label && (
                <text x={cx} y={cy + (sub ? -3 : 3)} textAnchor="middle" fill={INK} style={{ fontSize: 9, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3 }}>
                    {label}
                </text>
            )}
            {sub && (
                <text x={cx} y={cy + 9} textAnchor="middle" fill={accent} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>
                    {sub}
                </text>
            )}
        </g>
    );
};

// ── Per-platform data maps ──────────────────────────────────────

const PLATFORM_BLOCKS: Record<string, { name: string; sub: string }[]> = {
    arches: [
        { name: "GPU", sub: "CUDA" }, { name: "DLA", sub: "x2" }, { name: "A-Core", sub: "8C" }, { name: "SPE", sub: "R-core" },
        { name: "NVMe", sub: "PCIe" }, { name: "CSI", sub: "x6" }, { name: "NVENC", sub: "H.265" }, { name: "GbE", sub: "x2" },
        { name: "USB 3", sub: "x3" }, { name: "CAN-FD", sub: "x2" }, { name: "DP/HDMI", sub: "out" }, { name: "GPIO", sub: "I/O" },
    ],
    acadia: [
        { name: "A-Core", sub: "4C" }, { name: "Video", sub: "H.265" }, { name: "Pico W", sub: "RP2040" }, { name: "WiFi", sub: "2.4/5G" },
        { name: "ETH", sub: "GbE" }, { name: "USB 3", sub: "x2" }, { name: "CAM", sub: "x2" }, { name: "DSI", sub: "disp" },
        { name: "HDMI", sub: "4K" }, { name: "PCIe", sub: "Gen2" }, { name: "I2C/SPI", sub: "x4" }, { name: "RTC", sub: "+GPIO" },
    ],
    zion: [
        { name: "A53", sub: "4C" }, { name: "FPGA", sub: "PL" }, { name: "R5 Lock", sub: "2C" }, { name: "DDR4", sub: "ctrl" },
        { name: "Bitstream", sub: "OTA" }, { name: "GEM", sub: "GbE" }, { name: "USB 3", sub: "x2" }, { name: "DP", sub: "x2" },
        { name: "SATA", sub: "x2" }, { name: "CAN-FD", sub: "x2" }, { name: "QSPI", sub: "x4" }, { name: "PL I/O", sub: "GPIO" },
    ],
    pinnacle: [
        { name: "A53", sub: "4C" }, { name: "M7", sub: "1C" }, { name: "GPU", sub: "Viv" }, { name: "DDR4", sub: "ctrl" },
        { name: "LVDS/DSI", sub: "disp" }, { name: "CAN-FD", sub: "x2" }, { name: "ENET", sub: "x2" }, { name: "USB 3", sub: "x2" },
        { name: "PCIe", sub: "Gen2" }, { name: "15YR", sub: "LIFE" }, { name: "FuSa", sub: "61508" }, { name: "ECC", sub: "LPDDR" },
    ],
    joshua: [
        { name: "A15", sub: "2C" }, { name: "PRU", sub: "x2" }, { name: "PRU", sub: "x2" }, { name: "EtherCAT", sub: "PHY" },
        { name: "DDR3", sub: "ctrl" }, { name: "QSPI", sub: "x2" }, { name: "ENET", sub: "x2" }, { name: "USB 3", sub: "x2" },
        { name: "CAN-FD", sub: "x2" }, { name: "ADC", sub: "12b" }, { name: "PWM", sub: "x6" }, { name: "GPIO", sub: "168" },
    ],
    sequoia: [
        { name: "x86", sub: "8C/16T" }, { name: "DDR4", sub: "x2ch" }, { name: "PCIe", sub: "Gen4" }, { name: "10GbE", sub: "x2" },
        { name: "SATA", sub: "x4" }, { name: "M.2", sub: "NVMe" }, { name: "USB 3", sub: "x4" }, { name: "IPMI", sub: "BMC" },
        { name: "Hyperv", sub: "ACRN" }, { name: "PREEMPT", sub: "RT" }, { name: "SR-IOV", sub: "vfio" }, { name: "ECC", sub: "REG" },
    ],
};

// Co-processor satellite per platform (S1 overview). x86 has no copproc;
// it shows a TPM + hypervisor stack instead.
const SATELLITE: Record<string, { label: string; sub: string }> = {
    arches: { label: "STM32", sub: "RT coproc" },
    acadia: { label: "PICO W", sub: "RP2040" },
    zion: { label: "FPGA", sub: "PL fabric" },
    joshua: { label: "PRU", sub: "ICSS" },
    pinnacle: { label: "M7", sub: "RT coproc" },
    sequoia: { label: "TPM 2.0", sub: "measured boot" },
};

// S2 — peripheral pads on the carrier board.
const PERIPHERALS: { name: string; icon: string }[] = [
    { name: "CSI camera", icon: "cam" }, { name: "GbE", icon: "eth" }, { name: "USB 3", icon: "usb" },
    { name: "CAN-FD", icon: "can" }, { name: "GPIO", icon: "hdr" }, { name: "DDR4", icon: "mem" },
    { name: "PCIe", icon: "pcie" }, { name: "Display", icon: "disp" },
];

// S3 — Yocto layer name per platform.
const YOCTO_LAYERS: Record<string, string> = {
    arches: "meta-tegra", acadia: "meta-raspberrypi", zion: "meta-xilinx",
    pinnacle: "meta-imx", joshua: "meta-ti", sequoia: "meta-intel",
};

// S6 — RT core + link per platform.
const RT_CORE: Record<string, { rt: string; linux: string; fw: string }> = {
    arches: { rt: "Cortex-R · SPE", linux: "Cortex-A · Linux", fw: "FreeRTOS" },
    acadia: { rt: "Pico · RP2040", linux: "Pi · Linux", fw: "FreeRTOS / Zephyr" },
    zion: { rt: "RPU · R5F", linux: "APU · Linux", fw: "FreeRTOS / Zephyr" },
    pinnacle: { rt: "Cortex-M7/M33", linux: "Cortex-A · Linux", fw: "FreeRTOS / Zephyr" },
    joshua: { rt: "PRU-ICSS + M4F", linux: "Cortex-A · Linux", fw: "PRU FW + FreeRTOS" },
    sequoia: { rt: "RT Guest", linux: "HMI Guest", fw: "KVM / ACRN" },
};
const RT_LINK: Record<string, string> = {
    arches: "IVC shmem", acadia: "UART / SPI", zion: "OpenAMP / RPMsg",
    pinnacle: "RPMsg / MU", joshua: "remoteproc / RPMsg", sequoia: "virtio / IVSHMEM",
};

// S7 — named industry image variants per platform, each with a glyph key.
const PLATFORM_IMAGES: Record<string, { name: string; sub: string; icon: string }[]> = {
    arches: [
        { name: "arches-robotics", sub: "ROS 2", icon: "robot" },
        { name: "arches-vision", sub: "DeepStream", icon: "cam" },
        { name: "arches-iot", sub: "MQTT", icon: "cloud" },
        { name: "arches-automotive", sub: "CAN-FD", icon: "car" },
        { name: "arches-medical", sub: "IEC 62304", icon: "cross" },
    ],
    acadia: [
        { name: "acadia-iot", sub: "cloud", icon: "cloud" },
        { name: "acadia-gateway", sub: "Modbus", icon: "net" },
        { name: "acadia-robotics", sub: "ROS 2", icon: "robot" },
        { name: "acadia-hmi", sub: "Qt / LVGL", icon: "disp" },
    ],
    zion: [
        { name: "zion-industrial", sub: "EtherCAT", icon: "gear" },
        { name: "zion-robotics", sub: "ROS 2", icon: "robot" },
        { name: "zion-vision", sub: "GStreamer", icon: "cam" },
        { name: "zion-automotive", sub: "CAN-FD", icon: "car" },
        { name: "zion-medical", sub: "IEC 62304", icon: "cross" },
    ],
    pinnacle: [
        { name: "pinnacle-industrial", sub: "OPC UA", icon: "gear" },
        { name: "pinnacle-automotive", sub: "cluster", icon: "car" },
        { name: "pinnacle-iot", sub: "EdgeLock", icon: "cloud" },
        { name: "pinnacle-hmi", sub: "Qt / LVGL", icon: "disp" },
        { name: "pinnacle-medical", sub: "IEC 62304", icon: "cross" },
    ],
    joshua: [
        { name: "joshua-industrial", sub: "EtherCAT", icon: "gear" },
        { name: "joshua-automation", sub: "motor", icon: "robot" },
        { name: "joshua-iot", sub: "MQTT", icon: "cloud" },
        { name: "joshua-energy", sub: "DNP3", icon: "bolt" },
    ],
    sequoia: [
        { name: "sequoia-industrial", sub: "soft-PLC", icon: "gear" },
        { name: "sequoia-edge", sub: "Docker", icon: "cloud" },
        { name: "sequoia-vision", sub: "OpenVINO", icon: "cam" },
        { name: "sequoia-virt", sub: "KVM / ACRN", icon: "stack" },
        { name: "sequoia-medical", sub: "audit", icon: "cross" },
    ],
};

// S9 — per-platform profiler / debugger.
const PROFILER: Record<string, string> = {
    arches: "Nsight Systems", acadia: "gdbserver / perf", zion: "Vivado JTAG",
    pinnacle: "Lauterbach / Segger", joshua: "CCS / XDS", sequoia: "perf / eBPF",
};

// ── Tiny icon glyphs (drawn at origin, translated by caller) ────
const Icon: React.FC<{ k: string; accent: string }> = ({ k, accent }) => {
    const s = { stroke: INK, strokeWidth: 1.1, fill: "none" } as const;
    switch (k) {
        case "robot":
            return (
                <g>
                    <rect x={-7} y={-8} width={14} height={10} rx={2} {...s} />
                    <circle cx={-3} cy={-3} r={1.4} fill={accent} /><circle cx={3} cy={-3} r={1.4} fill={accent} />
                    <line x1={0} y1={2} x2={0} y2={8} {...s} /><line x1={-5} y1={8} x2={5} y2={8} {...s} />
                </g>
            );
        case "cam":
            return (
                <g>
                    <rect x={-8} y={-5} width={16} height={11} rx={2} {...s} />
                    <circle cx={0} cy={0} r={3.2} {...s} /><circle cx={0} cy={0} r={1} fill={accent} />
                </g>
            );
        case "cloud":
            return (
                <g>
                    <path d="M -7 2 a 4 4 0 0 1 1 -7 a 5 5 0 0 1 9 1 a 3.5 3.5 0 0 1 -1 7 Z" {...s} />
                </g>
            );
        case "car":
            return (
                <g>
                    <path d="M -9 2 L -7 -3 L 7 -3 L 9 2 Z M -9 2 L 9 2" {...s} />
                    <circle cx={-5} cy={3} r={1.8} fill={INK} /><circle cx={5} cy={3} r={1.8} fill={INK} />
                </g>
            );
        case "cross":
            return (
                <g>
                    <rect x={-2.5} y={-8} width={5} height={16} rx={1} fill={accent} />
                    <rect x={-7} y={-3.5} width={14} height={5} rx={1} fill={accent} />
                </g>
            );
        case "gear":
            return (
                <g className="diag-rotate" style={{ transformOrigin: "center" }}>
                    <circle cx={0} cy={0} r={4.5} {...s} />
                    {Array.from({ length: 8 }).map((_, i) => {
                        const a = (i / 8) * Math.PI * 2;
                        return <line key={i} x1={r(Math.cos(a) * 5)} y1={r(Math.sin(a) * 5)} x2={r(Math.cos(a) * 7)} y2={r(Math.sin(a) * 7)} {...s} />;
                    })}
                </g>
            );
        case "bolt":
            return <path d="M -2 -8 L 3 -1 L 0 -1 L 2 8 L -3 1 L 0 1 Z" fill={accent} stroke={INK} strokeWidth={0.6} />;
        case "net":
            return (
                <g>
                    <circle cx={0} cy={0} r={3} {...s} />
                    <circle cx={-6} cy={-5} r={2} {...s} /><circle cx={6} cy={-5} r={2} {...s} /><circle cx={0} cy={7} r={2} {...s} />
                    <line x1={-4} y1={-3} x2={-2} y2={-1} {...s} /><line x1={4} y1={-3} x2={2} y2={-1} {...s} /><line x1={0} y1={3} x2={0} y2={5} {...s} />
                </g>
            );
        case "disp":
            return (
                <g>
                    <rect x={-8} y={-6} width={16} height={11} rx={1} {...s} />
                    <line x1={-4} y1={-2} x2={4} y2={-2} {...s} /><line x1={-4} y1={1} x2={4} y2={1} {...s} />
                </g>
            );
        case "stack":
            return (
                <g>
                    <rect x={-7} y={-7} width={14} height={4} rx={1} {...s} />
                    <rect x={-7} y={-2} width={14} height={4} rx={1} {...s} />
                    <rect x={-7} y={3} width={14} height={4} rx={1} {...s} />
                </g>
            );
        // peripheral icons (S2)
        case "eth":
            return <g><rect x={-7} y={-4} width={14} height={9} rx={1} {...s} /><line x1={-4} y1={-1} x2={4} y2={-1} {...s} /><line x1={-4} y1={2} x2={4} y2={2} {...s} /></g>;
        case "usb":
            return <g><rect x={-3} y={-7} width={6} height={4} {...s} /><line x1={0} y1={-3} x2={0} y2={6} {...s} /><circle cx={0} cy={7} r={1.6} fill={accent} /></g>;
        case "can":
            return <g><rect x={-7} y={-3} width={14} height={7} rx={1} {...s} /><line x1={-7} y1={0} x2={7} y2={0} stroke={accent} strokeWidth={1} /></g>;
        case "hdr":
            return <g>{Array.from({ length: 5 }).map((_, i) => <rect key={i} x={-7 + i * 3} y={-3} width={2} height={7} fill={i % 2 ? accent : INK} />)}</g>;
        case "mem":
            return <g><rect x={-8} y={-4} width={16} height={9} rx={1} {...s} />{Array.from({ length: 4 }).map((_, i) => <line key={i} x1={-6 + i * 4} y1={-4} x2={-6 + i * 4} y2={-7} {...s} />)}</g>;
        case "pcie":
            return <g><rect x={-2} y={-7} width={4} height={14} rx={1} {...s} /><rect x={-6} y={5} width={12} height={3} {...s} /></g>;
        default:
            return null;
    }
};

// ─────────────────────────────────────────────────────────────────
// Stage 1 — Overview: SoC package + co-processor satellite
// ─────────────────────────────────────────────────────────────────
export const Stage1Overview: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const blocks = PLATFORM_BLOCKS[platformId] ?? PLATFORM_BLOCKS.arches;
    const sat = SATELLITE[platformId];

    const cx = 175;
    const cy = 185;
    const w = 200;
    const h = 150;

    return (
        <DiagramFrame accent={accent} stage={1} title="OVERVIEW" filterId={filterId}>
            {/* power pulse radiating from the die */}
            {[0, 1, 2].map((i) => (
                <circle key={`pulse-${i}`} cx={cx} cy={cy} r={20 + i * 14} fill="none" stroke={accent} strokeWidth={0.8} opacity={0.18} className="diag-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
            ))}

            <Chip cx={cx} cy={cy} w={w} h={h} accent={accent} label={ctx.platform?.chipFamily ?? "SoC"} sub="SYSTEM-ON-CHIP" />

            {/* a few live inner blocks */}
            {blocks.slice(0, 4).map((b, i) => {
                const positions = [
                    { x: cx - 60, y: cy - 30 }, { x: cx + 40, y: cy - 30 },
                    { x: cx - 60, y: cy + 30 }, { x: cx + 40, y: cy + 30 },
                ];
                const p = positions[i];
                return (
                    <g key={b.name}>
                        <rect x={p.x} y={p.y} width={48} height={22} rx={2} fill={WHITE} stroke={accent} strokeWidth={0.8} />
                        <text x={p.x + 24} y={p.y + 9} textAnchor="middle" fill={INK} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO }}>{b.name}</text>
                        <text x={p.x + 24} y={p.y + 17} textAnchor="middle" fill={accent} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>{b.sub}</text>
                    </g>
                );
            })}

            {/* trace to the co-processor satellite, with flowing data */}
            <path d={`M ${cx + w / 2} ${cy - 30} L ${cx + w / 2 + 30} ${cy - 30} L ${cx + w / 2 + 30} ${90} L 400 90`} stroke={accent} strokeWidth={1} fill="none" className="diag-flow" />
            {sat && (
                <g transform="translate(400, 90)" className="diag-pulse">
                    <rect x={-30} y={-16} width={60} height={32} rx={4} fill={WHITE} stroke={INK} strokeWidth={1.2} />
                    <circle cx={-23} cy={-9} r={1.6} fill={accent} />
                    <text x={0} y={-1} textAnchor="middle" fill={INK} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO }}>{sat.label}</text>
                    <text x={0} y={9} textAnchor="middle" fill={accent} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>{sat.sub}</text>
                </g>
            )}

            {/* Pinnacle longevity seal */}
            {platformId === "pinnacle" && (
                <g transform="translate(410, 150)" className="diag-pulse">
                    <circle r={22} fill={WHITE} stroke={accent} strokeWidth={1.4} />
                    <text textAnchor="middle" y={-2} fill={accent} style={{ fontSize: 11, fontWeight: 700, fontFamily: MONO }}>15</text>
                    <text textAnchor="middle" y={9} fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5, textTransform: "uppercase" }}>YR LIFE</text>
                </g>
            )}

            <StatusStrip accent={accent} text={`${ctx.platform?.name ?? "Platform"} · ${ctx.platform?.chipFamily ?? "SoC"} · owned by you`} />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 2 — Board bring-up & BSP: PCB top-view with probe sweep
// ─────────────────────────────────────────────────────────────────
export const Stage2Bsp: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const cx = 240;
    const cy = 190;
    const pads = PERIPHERALS;

    // peripheral pad positions around the board edge (angle around center)
    const padPos = pads.map((_, i) => {
        const a = (i / pads.length) * Math.PI * 2 - Math.PI / 2;
        const rad = 150;
        return { x: r(cx + Math.cos(a) * rad), y: r(cy + Math.sin(a) * rad * 0.78) };
    });

    return (
        <DiagramFrame accent={accent} stage={2} title="BOARD BRING-UP" filterId={filterId}>
            {/* PCB outline */}
            <rect x={36} y={56} width={408} height={248} rx={8} fill={PAPER} stroke={INK} strokeWidth={1.2} />
            <text x={48} y={72} fill={MUTED} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>CARRIER BOARD</text>

            {/* SoC in the middle */}
            <Chip cx={cx} cy={cy} w={110} h={80} accent={accent} label={(ctx.platform?.chipFamily ?? "SoC").toUpperCase()} sub="BSP CORE" />

            {/* traces + peripheral pads, lit in sequence */}
            {pads.map((p, i) => {
                const pos = padPos[i];
                return (
                    <g key={p.name}>
                        <path d={`M ${cx} ${cy} L ${pos.x} ${pos.y}`} stroke={accent} strokeWidth={0.7} fill="none" opacity={0.4} />
                        <g transform={`translate(${pos.x}, ${pos.y})`}>
                            <rect x={-22} y={-13} width={44} height={26} rx={3} fill={WHITE} stroke={INK} strokeWidth={0.9} />
                            <g transform="translate(0,-2) scale(0.7)"><Icon k={p.icon} accent={accent} /></g>
                            <text x={0} y={9} textAnchor="middle" fill={INK} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>{p.name}</text>
                            <LED cx={16} cy={-9} accent={accent} delay={i * 0.2} />
                        </g>
                    </g>
                );
            })}

            {/* probe / multimeter sweep across the board */}
            <g className="diag-sweep" style={{ transformBox: "fill-box" }}>
                <line x1={48} y1={60} x2={48} y2={300} stroke={accent} strokeWidth={1} opacity={0.55} />
                <circle cx={48} cy={180} r={5} fill={WHITE} stroke={accent} strokeWidth={1.2} />
                <line x1={48} y1={180} x2={60} y2={192} stroke={accent} strokeWidth={1.2} />
            </g>

            <StatusStrip accent={accent} text="schematic + PCB review · 8/8 peripherals · DT overlays applied" />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 3 — Yocto & Embedded Linux: build pipeline (oven → image → SBOM)
// ─────────────────────────────────────────────────────────────────
export const Stage3Yocto: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const layer = YOCTO_LAYERS[platformId] ?? "meta-{project}";

    return (
        <DiagramFrame accent={accent} stage={3} title="YOCTO BUILD" filterId={filterId}>
            {/* 1. layer repos (left) */}
            {["base", "vendor", layer].map((l, i) => (
                <g key={l} transform={`translate(60, ${90 + i * 40})`}>
                    <rect x={0} y={-14} width={92} height={28} rx={3} fill={WHITE} stroke={INK} strokeWidth={1} />
                    <circle cx={8} cy={0} r={2} fill={accent} />
                    <text x={16} y={3} fill={INK} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>{l}</text>
                </g>
            ))}
            <text x={60} y={70} fill={MUTED} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>LAYERS / RECIPES</text>

            {/* flow into oven */}
            <line x1={152} y1={130} x2={196} y2={150} stroke={accent} strokeWidth={1} className="diag-flow" />

            {/* 2. Bitbake oven */}
            <g transform="translate(252, 168)">
                <rect x={-58} y={-44} width={116} height={88} rx={8} fill={WHITE} stroke={INK} strokeWidth={1.4} />
                <text x={0} y={-26} textAnchor="middle" fill={INK} style={{ fontSize: 8, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5 }}>BITBAKE</text>
                {/* heat shimmer */}
                <rect x={-50} y={28} width={100} height={12} rx={2} fill={accent} className="diag-shimmer" />
                {/* two gears */}
                <g transform="translate(-18, -4)"><g className="diag-rotate"><circle r={9} fill="none" stroke={accent} strokeWidth={1.2} />{Array.from({ length: 8 }).map((_, i) => { const a = (i / 8) * Math.PI * 2; return <line key={i} x1={r(Math.cos(a) * 9)} y1={r(Math.sin(a) * 9)} x2={r(Math.cos(a) * 12)} y2={r(Math.sin(a) * 12)} stroke={accent} strokeWidth={1.2} />; })}</g></g>
                <g transform="translate(16, 2)"><g className="diag-rotate" style={{ animationDirection: "reverse" }}><circle r={6} fill="none" stroke={MUTED} strokeWidth={1.2} />{Array.from({ length: 6 }).map((_, i) => { const a = (i / 6) * Math.PI * 2; return <line key={i} x1={r(Math.cos(a) * 6)} y1={r(Math.sin(a) * 6)} x2={r(Math.cos(a) * 8)} y2={r(Math.sin(a) * 8)} stroke={MUTED} strokeWidth={1.2} />; })}</g></g>
            </g>

            {/* flow to image */}
            <line x1={252} y1={212} x2={252} y2={236} stroke={accent} strokeWidth={1} className="diag-flow" />

            {/* 3. image artifact (ROM/disk) */}
            <g transform="translate(252, 262)">
                <rect x={-70} y={-22} width={140} height={40} rx={4} fill={WHITE} stroke={INK} strokeWidth={1.2} />
                <rect x={-62} y={-14} width={40} height={24} rx={2} fill={PAPER} stroke={accent} strokeWidth={0.8} />
                <text x={-42} y={1} textAnchor="middle" fill={accent} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO }}>IMG</text>
                <text x={12} y={-3} fill={INK} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>{platformId}-image</text>
                <text x={12} y={8} fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>read-only rootfs</text>
                {/* lock badge */}
                <g transform="translate(56, -10)">
                    <rect x={-5} y={-2} width={10} height={8} rx={1} fill={accent} />
                    <path d="M -3 -2 L -3 -5 a 3 3 0 0 1 6 0 L 3 -2" fill="none" stroke={accent} strokeWidth={1.2} />
                </g>
            </g>

            {/* 4. SBOM doc (right) */}
            <g transform="translate(400, 200)">
                <rect x={-34} y={-50} width={68} height={92} rx={3} fill={WHITE} stroke={INK} strokeWidth={1} />
                <text x={0} y={-40} textAnchor="middle" fill={accent} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5 }}>SBOM</text>
                <text x={0} y={-32} textAnchor="middle" fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO }}>SPDX · CYCLONEDX</text>
                {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1={-26} y1={-22 + i * 9} x2={26 - (i % 2) * 8} y2={-22 + i * 9} stroke={MUTED} strokeWidth={1} opacity={0.5} />
                ))}
                <rect x={20} y={-2} width={5} height={8} fill={accent} className="diag-blink" />
            </g>
            {/* arrow image → SBOM */}
            <line x1={324} y1={262} x2={360} y2={244} stroke={accent} strokeWidth={1} className="diag-flow" />

            <StatusStrip accent={accent} text={`reproducible · ${layer} · SBOM → ISO 26262 / IEC 62304 / DO-178C`} />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 4 — Bootloader: boot chain with a traveling signal + golden vault
// ─────────────────────────────────────────────────────────────────
export const Stage4Boot: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const chain = ctx.platform?.bootChain ?? ["BootROM", "FSBL", "U-Boot", "kernel"];
    const n = chain.length;
    const blockW = 78;
    const blockH = 52;
    const gap = 20;
    const totalW = n * blockW + (n - 1) * gap;
    const startX = (480 - totalW) / 2;
    const yMid = 170;

    return (
        <DiagramFrame accent={accent} stage={4} title="BOOT CHAIN" filterId={filterId}>
            {/* the chain ribbon + a signal dot traveling the whole width */}
            <line x1={startX} y1={yMid + blockH / 2} x2={startX + totalW} y2={yMid + blockH / 2} stroke={accent} strokeWidth={1.4} opacity={0.35} />
            <circle cx={startX} cy={yMid + blockH / 2} r={4} fill={accent} className="diag-signal" style={{ "--diag-travel": `${totalW}px` } as React.CSSProperties} />

            {chain.map((stage, i) => {
                const x = startX + i * (blockW + gap);
                return (
                    <g key={`${stage}-${i}`}>
                        <rect x={x} y={yMid - blockH / 2} width={blockW} height={blockH} rx={4} fill={WHITE} stroke={INK} strokeWidth={1.2} />
                        <rect x={x} y={yMid - blockH / 2} width={blockW} height={14} rx={4} fill={accent} />
                        <text x={x + blockW / 2} y={yMid - blockH / 2 + 10} textAnchor="middle" fill={WHITE} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4 }}>{`STAGE ${i + 1}`}</text>
                        <text x={x + blockW / 2} y={yMid + 4} textAnchor="middle" fill={INK} style={{ fontSize: 8, fontWeight: 700, fontFamily: MONO }}>{stage}</text>
                        {/* timing tick */}
                        <text x={x + blockW / 2} y={yMid + 22} textAnchor="middle" fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO }}>{`0.${(i * 12).toString().padStart(2, "0")}s`}</text>
                    </g>
                );
            })}

            {/* golden recovery vault (protected) */}
            <g transform="translate(420, 86)" className="diag-pulse">
                <rect x={-34} y={-18} width={68} height={36} rx={4} fill={accent} />
                <path d="M -10 -18 L -10 -26 a 10 10 0 0 1 20 0 L 10 -18" fill="none" stroke={accent} strokeWidth={2} />
                <text x={0} y={4} textAnchor="middle" fill={WHITE} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5, textTransform: "uppercase" }}>GOLDEN</text>
            </g>
            <line x1={startX + totalW} y1={yMid} x2={386} y2={86} stroke={accent} strokeWidth={0.8} strokeDasharray="3 3" opacity={0.5} />

            {/* rollback loop */}
            <path d={`M ${startX + 20} ${yMid + 50} Q 240 ${yMid + 95} ${startX + totalW - 20} ${yMid + 50}`} stroke={accent} strokeWidth={1} fill="none" strokeDasharray="4 4" className="diag-flow" />
            <text x={240} y={yMid + 84} textAnchor="middle" fill={MUTED} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>↺ rollback on fail</text>

            <StatusStrip accent={accent} text={`${n}-stage boot · golden recovery · watchdog-supervised`} />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 5 — Kernel & device drivers: cards docking into the kernel
// ─────────────────────────────────────────────────────────────────
const DRIVER_MODULES = ["I2C", "SPI", "ETH", "GPIO", "CAN", "UART", "PCIe", "PWM", "ADC", "I2S", "USB", "DSI"];
export const Stage5Kernel: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const kx = 240;
    const ky = 180;
    const kw = 120;
    const kh = 96;

    return (
        <DiagramFrame accent={accent} stage={5} title="KERNEL & DRIVERS" filterId={filterId}>
            {/* driver cards docking around the kernel core */}
            {DRIVER_MODULES.map((drv, i) => {
                const angle = (i / DRIVER_MODULES.length) * Math.PI * 2 - Math.PI / 2;
                const dist = 132;
                const mx = r(kx + Math.cos(angle) * dist);
                const my = r(ky + Math.sin(angle) * dist * 0.82);
                return (
                    <g key={drv}>
                        <line x1={mx} y1={my} x2={kx} y2={ky} stroke={accent} strokeWidth={0.7} opacity={0.4} className="diag-flow" style={{ animationDelay: `${i * 0.12}s` }} />
                        <rect x={mx - 24} y={my - 11} width={48} height={22} rx={3} fill={WHITE} stroke={INK} strokeWidth={0.9} />
                        <text x={mx} y={my - 1} textAnchor="middle" fill={INK} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO }}>{drv}</text>
                        <text x={mx} y={my + 7} textAnchor="middle" fill={accent} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO }}>.ko</text>
                        <LED cx={mx + 18} cy={my - 7} accent={accent} delay={i * 0.15} />
                    </g>
                );
            })}

            {/* kernel core */}
            <rect x={kx - kw / 2} y={ky - kh / 2} width={kw} height={kh} rx={6} fill={accent} stroke={INK} strokeWidth={1.4} />
            <text x={kx} y={ky - 8} textAnchor="middle" fill={WHITE} style={{ fontSize: 10, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5 }}>KERNEL</text>
            <text x={kx} y={ky + 6} textAnchor="middle" fill={WHITE} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>downstream · customized</text>
            <text x={kx} y={ky + 22} textAnchor="middle" fill={WHITE} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3, textTransform: "uppercase" }}>PREEMPT_RT</text>

            {/* device-tree sidebar */}
            <text x={410} y={70} fill={MUTED} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>DEVICE TREE</text>
            {Array.from({ length: 5 }).map((_, i) => (
                <g key={i} transform={`translate(398, ${84 + i * 16})`}>
                    <line x1={0} y1={0} x2={12 + i * 8} y2={0} stroke={accent} strokeWidth={1} />
                    <circle cx={12 + i * 8} cy={0} r={1.6} fill={accent} />
                </g>
            ))}

            <StatusStrip accent={accent} text="12 drivers · DT overlays · mainline-tracking" />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 6 — RTOS & MCU: Linux ↔ RTOS split with packets on the wire
// ─────────────────────────────────────────────────────────────────
export const Stage6Rtos: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const rt = RT_CORE[platformId] ?? RT_CORE.arches;
    const link = RT_LINK[platformId] ?? "RPMsg";

    const linkStartX = 188;
    const linkEndX = 292;
    const linkY = 200;
    const travel = linkEndX - linkStartX;

    return (
        <DiagramFrame accent={accent} stage={6} title="RTOS & MCU" filterId={filterId}>
            {/* Linux domain (left) */}
            <g transform="translate(108, 180)">
                <rect x={-70} y={-70} width={140} height={140} rx={8} fill={WHITE} stroke={INK} strokeWidth={1.4} />
                <rect x={-70} y={-70} width={140} height={20} rx={8} fill={accent} />
                <text x={0} y={-56} textAnchor="middle" fill={WHITE} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5 }}>LINUX · APU</text>
                <text x={0} y={-30} textAnchor="middle" fill={INK} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO }}>{rt.linux}</text>
                {/* little window: perception/net/UI bars */}
                {["perception", "networking", "UI / app"].map((t, i) => (
                    <g key={t} transform={`translate(0, ${-14 + i * 18})`}>
                        <rect x={-52} y={-6} width={104} height={12} rx={2} fill={PAPER} stroke={accent} strokeWidth={0.6} />
                        <text x={0} y={2} textAnchor="middle" fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>{t}</text>
                    </g>
                ))}
            </g>

            {/* RTOS domain (right) */}
            <g transform="translate(372, 180)">
                <rect x={-70} y={-70} width={140} height={140} rx={8} fill={accent} />
                <rect x={-70} y={-70} width={140} height={20} rx={8} fill={INK} />
                <text x={0} y={-56} textAnchor="middle" fill={WHITE} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5 }}>RTOS · MCU</text>
                <text x={0} y={-32} textAnchor="middle" fill={WHITE} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO }}>{rt.rt}</text>
                <text x={0} y={-20} textAnchor="middle" fill={WHITE} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3, textTransform: "uppercase" }}>{rt.fw}</text>
                {/* deterministic pulse scope */}
                <rect x={-54} y={-6} width={108} height={34} rx={2} fill={WHITE} opacity={0.92} />
                <path d="M -48 11 L -36 11 L -32 2 L -28 20 L -24 5 L -20 17 L -16 11 L 8 11 L 12 4 L 16 18 L 20 8 L 24 14 L 28 11 L 48 11" fill="none" stroke={INK} strokeWidth={1} />
            </g>

            {/* the link + packets both directions */}
            <line x1={linkStartX} y1={linkY} x2={linkEndX} y2={linkY} stroke={INK} strokeWidth={1.4} />
            <line x1={linkStartX} y1={linkY} x2={linkEndX} y2={linkY} stroke={accent} strokeWidth={1.2} className="diag-flow" />
            <text x={240} y={linkY - 10} textAnchor="middle" fill={accent} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3, textTransform: "uppercase" }}>{link}</text>
            {[0, 1, 2].map((i) => (
                <rect key={`pr-${i}`} x={linkStartX} y={linkY - 10 + i * 3} width={8} height={3} rx={1} fill={accent} className="diag-packet" style={{ "--diag-travel": `${travel}px`, animationDelay: `${i * 0.6}s` } as React.CSSProperties} />
            ))}
            {[0, 1].map((i) => (
                <rect key={`pl-${i}`} x={linkEndX - 8} y={linkY + 6 + i * 3} width={8} height={3} rx={1} fill={MUTED} className="diag-packet" style={{ "--diag-travel": `${-travel}px`, animationDelay: `${0.4 + i * 0.8}s` } as React.CSSProperties} />
            ))}

            {/* watchdog */}
            <g transform="translate(240, 300)" className="diag-pulse">
                <circle r={13} fill={WHITE} stroke={accent} strokeWidth={1.4} />
                <text y={3} textAnchor="middle" fill={accent} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO }}>WDT</text>
            </g>

            <StatusStrip accent={accent} text="heterogeneous offload · deterministic I/O · watchdog-supervised" />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 7 — Middleware: base image → named industry image variants
// ─────────────────────────────────────────────────────────────────
export const Stage7Middleware: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const images = PLATFORM_IMAGES[platformId] ?? PLATFORM_IMAGES.arches;
    const count = images.length;

    // hub at top-center; cards in an arc below
    const hubx = 240;
    const huby = 96;
    const cardY = 250;
    const totalW = 440;
    const step = totalW / count;

    return (
        <DiagramFrame accent={accent} stage={7} title="MIDDLEWARE" filterId={filterId}>
            {/* base image hub */}
            <g transform={`translate(${hubx}, ${huby})`}>
                <circle r={30} fill={accent} className="diag-pulse" />
                <text y={-2} textAnchor="middle" fill={WHITE} style={{ fontSize: 7, fontWeight: 700, fontFamily: MONO }}>{platformId}</text>
                <text y={8} textAnchor="middle" fill={WHITE} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3, textTransform: "uppercase" }}>-base</text>
            </g>

            {images.map((img, i) => {
                const x = 40 + step / 2 + i * step;
                return (
                    <g key={img.name}>
                        {/* pub/sub spoke with flowing dots */}
                        <line x1={hubx} y1={huby + 30} x2={x} y2={cardY - 26} stroke={accent} strokeWidth={0.8} opacity={0.4} className="diag-flow" style={{ animationDelay: `${i * 0.15}s` }} />
                        {/* card */}
                        <g transform={`translate(${x}, ${cardY})`}>
                            <rect x={-38} y={-26} width={76} height={52} rx={5} fill={WHITE} stroke={INK} strokeWidth={1.1} />
                            <rect x={-38} y={-26} width={76} height={12} rx={5} fill={accent} />
                            <g transform="translate(0,-2) scale(1.3)"><Icon k={img.icon} accent={accent} /></g>
                            <text x={0} y={14} textAnchor="middle" fill={INK} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO }}>{img.name}</text>
                            <text x={0} y={21} textAnchor="middle" fill={accent} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>{img.sub}</text>
                        </g>
                    </g>
                );
            })}

            <StatusStrip accent={accent} text={`${count} image variants · one base · QoS-configured`} />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 8 — OTA & fleet: A/B partition table + fleet rollout wave
// ─────────────────────────────────────────────────────────────────
export const Stage8Ota: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    return (
        <DiagramFrame accent={accent} stage={8} title="OTA & FLEET" filterId={filterId}>
            {/* storage device outline */}
            <text x={36} y={62} fill={MUTED} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>STORAGE · A/B SLOTS</text>
            <rect x={36} y={70} width={408} height={130} rx={6} fill={PAPER} stroke={INK} strokeWidth={1.2} />

            {/* partition A — active */}
            <g transform="translate(60, 86)">
                <rect x={0} y={0} width={110} height={98} rx={3} fill={WHITE} stroke={accent} strokeWidth={1.2} />
                <rect x={0} y={0} width={110} height={16} rx={3} fill={accent} />
                <text x={55} y={11} textAnchor="middle" fill={WHITE} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4 }}>SLOT A · ACTIVE</text>
                <text x={55} y={60} textAnchor="middle" fill={INK} style={{ fontSize: 18, fontWeight: 700, fontFamily: MONO }}>✓</text>
                <text x={55} y={80} textAnchor="middle" fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>running</text>
            </g>

            {/* swap arrow A → B */}
            <g transform="translate(180, 130)">
                <line x1={0} y1={6} x2={40} y2={6} stroke={accent} strokeWidth={1.6} className="diag-flow" />
                <polygon points="40,6 32,1 32,11" fill={accent} />
            </g>

            {/* partition B — writing, fills from bottom */}
            <g transform="translate(230, 86)">
                <rect x={0} y={0} width={110} height={98} rx={3} fill={WHITE} stroke={accent} strokeWidth={1.2} />
                <rect x={1} y={1} width={108} height={96} rx={2} fill={accent} opacity={0.18} className="diag-flood" />
                <rect x={0} y={0} width={110} height={16} rx={3} fill={INK} />
                <text x={55} y={11} textAnchor="middle" fill={WHITE} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4 }}>SLOT B · WRITING</text>
                <text x={55} y={60} textAnchor="middle" fill={INK} style={{ fontSize: 8, fontWeight: 700, fontFamily: MONO }}>B/4</text>
                <text x={55} y={80} textAnchor="middle" fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>62% · signed</text>
            </g>

            {/* golden recovery vault */}
            <g transform="translate(370, 86)">
                <rect x={0} y={0} width={58} height={98} rx={3} fill={accent} />
                <path d="M 18 0 L 18 -8 a 11 11 0 0 1 22 0 L 40 0" fill="none" stroke={accent} strokeWidth={2} />
                <text x={29} y={48} textAnchor="middle" fill={WHITE} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3 }}>GOLDEN</text>
                <text x={29} y={58} textAnchor="middle" fill={WHITE} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>recovery</text>
            </g>

            {/* rollback loop */}
            <path d="M 60 184 Q 240 214 430 184" stroke={accent} strokeWidth={1} fill="none" strokeDasharray="4 4" className="diag-flow" />
            <text x={240} y={210} textAnchor="middle" fill={MUTED} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3, textTransform: "uppercase" }}>↺ auto-rollback on failed boot / health check</text>

            {/* fleet rollout wave */}
            <text x={36} y={252} fill={MUTED} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.4, textTransform: "uppercase" }}>FLEET ROLLOUT · 1% → 10% → ALL</text>
            {Array.from({ length: 16 }).map((_, i) => (
                <g key={i} transform={`translate(${48 + i * 24}, 268)`}>
                    <rect x={-9} y={0} width={18} height={26} rx={2} fill={WHITE} stroke={INK} strokeWidth={0.8} />
                    <circle cx={0} cy={7} r={1.6} fill={accent} className="diag-blink" style={{ animationDelay: `${i * 0.12}s` }} />
                    <line x1={-5} y1={14} x2={5} y2={14} stroke={MUTED} strokeWidth={0.7} />
                    <line x1={-5} y1={19} x2={5} y2={19} stroke={MUTED} strokeWidth={0.7} />
                </g>
            ))}

            <StatusStrip accent={accent} text="A/B · golden · signed · delta updates · staged" />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 9 — SDK, debug & profiling: dev → toolchain → target + scope
// ─────────────────────────────────────────────────────────────────
export const Stage9Sdk: React.FC<{ ctx: DiagramContext; filterId: string }> = ({ ctx, filterId }) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const profiler = PROFILER[platformId] ?? "perf / gdbserver";

    const tracePath = "M 30 250 L 60 250 L 68 232 L 76 268 L 84 240 L 92 260 L 100 250 L 140 250 L 148 220 L 156 280 L 164 236 L 172 264 L 180 250 L 230 250 L 238 228 L 246 272 L 254 244 L 262 256 L 270 250 L 320 250 L 328 224 L 336 276 L 344 240 L 352 260 L 360 250 L 410 250";

    return (
        <DiagramFrame accent={accent} stage={9} title="SDK & PROFILING" filterId={filterId}>
            {/* dev laptop */}
            <g transform="translate(80, 92)">
                <rect x={-44} y={-30} width={88} height={54} rx={4} fill={WHITE} stroke={INK} strokeWidth={1.2} />
                <rect x={-38} y={-24} width={76} height={38} rx={2} fill={PAPER} stroke={accent} strokeWidth={0.7} />
                <text x={0} y={-4} textAnchor="middle" fill={INK} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>DEV (x86)</text>
                <text x={0} y={6} textAnchor="middle" fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>app team</text>
                <rect x={-16} y={24} width={32} height={5} rx={1} fill={INK} />
            </g>

            {/* build artifact travels dev → esdk → target */}
            <line x1={124} y1={92} x2={196} y2={92} stroke={accent} strokeWidth={1.2} className="diag-flow" />
            <circle cx={124} cy={92} r={3.5} fill={accent} className="diag-signal" style={{ "--diag-travel": `${72}px` } as React.CSSProperties} />

            {/* eSDK / toolchain */}
            <g transform="translate(240, 92)">
                <rect x={-40} y={-30} width={80} height={54} rx={4} fill={accent} stroke={INK} strokeWidth={1.2} />
                <text x={0} y={-12} textAnchor="middle" fill={WHITE} style={{ fontSize: 8, fontWeight: 700, fontFamily: MONO }}>eSDK</text>
                <text x={0} y={0} textAnchor="middle" fill={WHITE} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>cross-toolchain</text>
                <text x={0} y={10} textAnchor="middle" fill={WHITE} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>+ sysroot</text>
            </g>

            <line x1={284} y1={92} x2={356} y2={92} stroke={accent} strokeWidth={1.2} className="diag-flow" />
            <circle cx={284} cy={92} r={3.5} fill={accent} className="diag-signal" style={{ "--diag-travel": `${72}px` } as React.CSSProperties} />

            {/* target board */}
            <g transform="translate(400, 92)">
                <rect x={-44} y={-30} width={88} height={54} rx={4} fill={WHITE} stroke={INK} strokeWidth={1.2} />
                <rect x={-30} y={-22} width={26} height={26} rx={2} fill={PAPER} stroke={accent} strokeWidth={0.8} />
                {Array.from({ length: 4 }).map((_, i) => <line key={i} x1={-30} y1={-22 + i * 6} x2={-4} y2={-22 + i * 6} stroke={accent} strokeWidth={0.5} />)}
                <text x={6} y={-6} fill={INK} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, textTransform: "uppercase" }}>TARGET</text>
                <text x={6} y={4} fill={MUTED} style={{ fontSize: 5, fontWeight: 700, fontFamily: MONO }}>{(ctx.platform?.chipFamily ?? "SoC").toUpperCase()}</text>
            </g>

            {/* profiling scope */}
            <rect x={20} y={150} width={440} height={120} fill="#16181a" rx={4} />
            <rect x={26} y={156} width={428} height={108} fill={PAPER} rx={2} />
            {Array.from({ length: 7 }).map((_, i) => (
                <line key={`gv-${i}`} x1={26 + (i + 1) * 53.5} y1={156} x2={26 + (i + 1) * 53.5} y2={264} stroke={accent} strokeWidth={0.4} opacity={0.18} />
            ))}
            {Array.from({ length: 2 }).map((_, i) => (
                <line key={`gh-${i}`} x1={26} y1={190 + i * 36} x2={454} y2={190 + i * 36} stroke={accent} strokeWidth={0.4} opacity={0.18} />
            ))}
            <path d={tracePath} stroke={accent} strokeWidth={1.5} fill="none" />
            {/* sweep */}
            <line x1={30} y1={158} x2={30} y2={262} stroke={accent} strokeWidth={1} opacity={0.5} className="diag-sweep" style={{ transformBox: "fill-box" }} />
            <text x={30} y={172} fill={accent} style={{ fontSize: 6, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.3, textTransform: "uppercase" }}>{profiler.toUpperCase()}</text>

            {/* CI / HIL loop back to target */}
            <path d="M 400 122 Q 460 150 400 178" stroke={accent} strokeWidth={1} fill="none" strokeDasharray="3 3" className="diag-flow" />
            <g transform="translate(240, 300)">
                <rect x={-120} y={-12} width={240} height={22} rx={3} fill={accent} />
                <text x={0} y={3} textAnchor="middle" fill={WHITE} style={{ fontSize: 8, fontWeight: 700, fontFamily: MONO, letterSpacing: 0.5, textTransform: "uppercase" }}>CI/CD · HARDWARE-IN-THE-LOOP</text>
            </g>

            <StatusStrip accent={accent} text="eval image · cross-SDK · remote debug · HIL smoke tests" />
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Public dispatch
// ─────────────────────────────────────────────────────────────────
export const StageDiagram: React.FC<{ stage: number; ctx: DiagramContext; filterId: string }> = ({ stage, ctx, filterId }) => {
    switch (stage) {
        case 1: return <Stage1Overview ctx={ctx} filterId={filterId} />;
        case 2: return <Stage2Bsp ctx={ctx} filterId={filterId} />;
        case 3: return <Stage3Yocto ctx={ctx} filterId={filterId} />;
        case 4: return <Stage4Boot ctx={ctx} filterId={filterId} />;
        case 5: return <Stage5Kernel ctx={ctx} filterId={filterId} />;
        case 6: return <Stage6Rtos ctx={ctx} filterId={filterId} />;
        case 7: return <Stage7Middleware ctx={ctx} filterId={filterId} />;
        case 8: return <Stage8Ota ctx={ctx} filterId={filterId} />;
        case 9: default: return <Stage9Sdk ctx={ctx} filterId={filterId} />;
    }
};

export function getHomeContext(stage: number): DiagramContext {
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