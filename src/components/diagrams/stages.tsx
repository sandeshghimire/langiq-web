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

// Shared block container. The per-stage diagrams are fully static
// SVG; the only animation in the system is the AnimatePresence
// crossfade in SlideDiagram.tsx plus the CSS "living motion"
// classes (.diag-flow / .diag-pulse / .diag-write / .diag-sweep /
// .diag-packet) applied directly to SVG elements. We deliberately do
// NOT use framer-motion `motion.*` wrappers here — they re-fire on
// every crossfade and produce the "blocks flying in" jitter called
// out in the project CLAUDE.md.
const BlockReveal: React.FC<{
    active?: boolean;
    delay?: number;
    suppressAnimations?: boolean;
    children: React.ReactNode;
}> = ({ children }) => <g opacity={1}>{children}</g>;

// ─────────────────────────────────────────────────────────────────
// Per-platform data maps
// ─────────────────────────────────────────────────────────────────

// Stage 1 — Overview block grids (4x3). The platform determines which
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
        { name: "ECC", sub: "Reg" },
    ],
};

// Stage 2 — peripheral interface enumeration order (bring-up).
const ENUM_INTERFACES = [
    "UART0", "UART1", "I2C0", "I2C1", "SPI0", "SPI1",
    "ETH0", "ETH1", "PCIe", "USB0", "USB1", "GPIO",
    "CAN0", "CAN1", "CSI0", "CSI1", "DSI", "I2S",
];

// Stage 3 — Yocto layer / build layer per platform (meta-{project}).
const YOCTO_LAYERS: Record<string, string> = {
    arches: "meta-tegra",
    acadia: "meta-raspberrypi",
    zion: "meta-xilinx",
    pinnacle: "meta-imx",
    joshua: "meta-ti",
    sequoia: "meta-intel",
};

// Stage 6 — RT core + link per platform.
const RT_CORE: Record<string, { rt: string; linux: string; fw: string }> = {
    arches: { rt: "Cortex-R SPE", linux: "Cortex-A · Linux", fw: "FreeRTOS" },
    acadia: { rt: "Pico · RP2040", linux: "Pi · Linux", fw: "FreeRTOS / Zephyr" },
    zion: { rt: "RPU · R5F", linux: "APU · Linux", fw: "FreeRTOS / Zephyr" },
    pinnacle: { rt: "Cortex-M7/M33", linux: "Cortex-A · Linux", fw: "FreeRTOS / Zephyr" },
    joshua: { rt: "PRU-ICSS + M4F", linux: "Cortex-A · Linux", fw: "PRU FW + FreeRTOS" },
    sequoia: { rt: "RT Guest", linux: "HMI Guest", fw: "KVM / ACRN" },
};

const RT_LINK: Record<string, string> = {
    arches: "IVC shmem",
    acadia: "UART / SPI / USB",
    zion: "OpenAMP / RPMsg",
    pinnacle: "RPMsg / MU",
    joshua: "remoteproc / RPMsg",
    sequoia: "virtio / IVSHMEM",
};

// Stage 7 — named industry image variants per platform (the load-bearing
// signal that the platform ships multiple purpose-built images, not one
// generic one). Derived from each platform's S7 bullets in platforms.ts.
const PLATFORM_IMAGES: Record<string, { name: string; sub: string }[]> = {
    arches: [
        { name: "arches-robotics", sub: "ROS 2" },
        { name: "arches-vision", sub: "DeepStream" },
        { name: "arches-iot", sub: "MQTT" },
        { name: "arches-automotive", sub: "CAN-FD" },
        { name: "arches-medical", sub: "IEC 62304" },
    ],
    acadia: [
        { name: "acadia-iot", sub: "cloud" },
        { name: "acadia-gateway", sub: "Modbus" },
        { name: "acadia-robotics", sub: "ROS 2" },
        { name: "acadia-hmi", sub: "Qt / LVGL" },
    ],
    zion: [
        { name: "zion-industrial", sub: "EtherCAT" },
        { name: "zion-robotics", sub: "ROS 2" },
        { name: "zion-vision", sub: "GStreamer" },
        { name: "zion-automotive", sub: "CAN-FD" },
        { name: "zion-medical", sub: "IEC 62304" },
    ],
    pinnacle: [
        { name: "pinnacle-industrial", sub: "OPC UA" },
        { name: "pinnacle-automotive", sub: "cluster" },
        { name: "pinnacle-iot", sub: "EdgeLock" },
        { name: "pinnacle-hmi", sub: "Qt / LVGL" },
        { name: "pinnacle-medical", sub: "IEC 62304" },
    ],
    joshua: [
        { name: "joshua-industrial", sub: "EtherCAT" },
        { name: "joshua-automation", sub: "motor" },
        { name: "joshua-iot", sub: "MQTT" },
        { name: "joshua-energy", sub: "DNP3" },
    ],
    sequoia: [
        { name: "sequoia-industrial", sub: "soft-PLC" },
        { name: "sequoia-edge", sub: "Docker" },
        { name: "sequoia-vision", sub: "OpenVINO" },
        { name: "sequoia-virt", sub: "KVM / ACRN" },
        { name: "sequoia-medical", sub: "audit" },
    ],
};

// Stage 9 — per-platform profiler / debugger toolchain.
const PROFILER: Record<string, string> = {
    arches: "Nsight Systems",
    acadia: "gdbserver / perf",
    zion: "Vivado JTAG",
    pinnacle: "Lauterbach / Segger",
    joshua: "CCS / XDS",
    sequoia: "perf / eBPF",
};

// ─────────────────────────────────────────────────────────────────
// Stage 1 — Overview (platform block grid + satellite)
// ─────────────────────────────────────────────────────────────────
export const Stage1Overview: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const blocks = PLATFORM_BLOCKS[platformId] ?? PLATFORM_BLOCKS.arches;

    const cellW = 90;
    const cellH = 64;
    const gridX = (480 - 4 * cellW - 30) / 2;
    const gridY = 70;

    return (
        <DiagramFrame accent={accent} stage={1} title="OVERVIEW" filterId={filterId}>
            {blocks.map((b, i) => {
                const col = i % 4;
                const row = Math.floor(i / 4);
                const x = gridX + col * (cellW + 10);
                const y = gridY + row * (cellH + 12);
                return (
                    <BlockReveal key={`${platformId}-${i}`}>
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
                <g transform="translate(360, 50)" className="diag-pulse">
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
            )}

            {/* Pico W satellite for Acadia */}
            {platformId === "acadia" && (
                <g transform="translate(420, 90)" className="diag-pulse">
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
                    <path d="M -3 -26 Q 0 -34 3 -26 Q 0 -22 -3 -26 Z" fill={accent} />
                </g>
            )}

            {/* STM32 satellite for Arches */}
            {platformId === "arches" && (
                <g transform="translate(420, 90)" className="diag-pulse">
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
            )}

            {/* FPGA fabric satellite for Zion */}
            {platformId === "zion" && (
                <g transform="translate(420, 90)" className="diag-pulse">
                    <rect x={-24} y={-16} width={48} height={32} fill="#ffffff" stroke={accent} strokeWidth={1.2} rx={2} />
                    <text
                        textAnchor="middle"
                        y={1}
                        fill={accent}
                        style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}
                    >
                        FPGA
                    </text>
                    <text
                        textAnchor="middle"
                        y={10}
                        fill={accent}
                        style={{ fontSize: 4, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}
                    >
                        PL fabric
                    </text>
                </g>
            )}

            {/* PRU satellite for Joshua */}
            {platformId === "joshua" && (
                <g transform="translate(420, 90)" className="diag-pulse">
                    <rect x={-24} y={-16} width={48} height={32} fill="#ffffff" stroke={accent} strokeWidth={1.2} rx={2} />
                    <text
                        textAnchor="middle"
                        y={1}
                        fill={accent}
                        style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}
                    >
                        PRU
                    </text>
                    <text
                        textAnchor="middle"
                        y={10}
                        fill={accent}
                        style={{ fontSize: 4, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}
                    >
                        ICSS
                    </text>
                </g>
            )}

            {/* Platform edge caption at the bottom */}
            <text
                x={240}
                y={340}
                textAnchor="middle"
                fill="#16181a"
                style={{ fontSize: 9, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.6, textTransform: "uppercase" }}
            >
                {ctx.platform?.name ?? "Platform"} — {ctx.platform?.chipFamily ?? "Architecture"}
            </text>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 2 — Board bring-up & BSP (peripheral enumeration)
// ─────────────────────────────────────────────────────────────────
export const Stage2Bsp: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const cols = 6;
    const rows = 3;
    const cellW = 56;
    const cellH = 36;
    const gridX = (480 - cols * cellW - (cols - 1) * 8) / 2;
    const gridY = 90;
    const total = cols * rows;

    return (
        <DiagramFrame accent={accent} stage={2} title="BOARD BRING-UP" filterId={filterId}>
            {/* Center die (the chip being brought up) */}
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

            {/* Enumerated interface cells + status LEDs that light up in
                sequence (the "bring-up wave"). */}
            {ENUM_INTERFACES.slice(0, total).map((iface, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = gridX + col * (cellW + 8);
                const y = gridY + row * (cellH + 14);
                return (
                    <g key={iface}>
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
                            fillTop="#ffffff"
                        />
                        {/* Status LED — staggered bring-up wave */}
                        <circle
                            cx={x + cellW - 5}
                            cy={y + 5}
                            r={1.8}
                            fill={accent}
                            className="diag-blink"
                            style={{ animationDelay: `${(i % 6) * 0.18}s` }}
                        />
                    </g>
                );
            })}

            {/* Connector lines from outer cells to center die — data
                flowing in during enumeration. */}
            {ENUM_INTERFACES.slice(0, 12).map((iface, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = gridX + col * (cellW + 8) + cellW / 2;
                const y = gridY + row * (cellH + 14) + cellH / 2;
                return (
                    <line
                        key={`line-${iface}`}
                        x1={x}
                        y1={y}
                        x2={240}
                        y2={180}
                        stroke={accent}
                        strokeWidth={0.6}
                        opacity={0.35}
                        className="diag-flow"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    />
                );
            })}

            {/* BSP status footer */}
            <text
                x={20}
                y={345}
                fill={accent}
                style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
            >
                18/18 INTERFACES · ENUM OK · DT OVERLAYS APPLIED
            </text>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 3 — Yocto & Embedded Linux (reproducible build pipeline)
// ─────────────────────────────────────────────────────────────────
export const Stage3Yocto: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const layer = YOCTO_LAYERS[platformId] ?? "meta-{project}";
    const imageTag = `${platformId}-image`;

    // Pipeline stages, top → bottom.
    const cx = 240;

    return (
        <DiagramFrame accent={accent} stage={3} title="YOCTO BUILD" filterId={filterId}>
            {/* Connector spine — recipes flow down into the build */}
            <line x1={cx} y1={100} x2={cx} y2={118} stroke={accent} strokeWidth={1} className="diag-flow" />
            <line x1={cx} y1={168} x2={cx} y2={186} stroke={accent} strokeWidth={1} className="diag-flow" />
            <line x1={cx} y1={232} x2={cx} y2={250} stroke={accent} strokeWidth={1} className="diag-flow" />
            <line x1={cx} y1={298} x2={cx} y2={312} stroke={accent} strokeWidth={1} className="diag-flow" />

            {/* 1. Yocto layer (meta-{project}) */}
            <Iso3DBox
                x={150}
                y={58}
                w={180}
                h={42}
                depth={6}
                accent={accent}
                label="YOCTO LAYER"
                sublabel={layer}
                filterId={filterId}
            />

            {/* 2. Recipe chips (3 representative recipes) */}
            {[
                { label: "kernel", x: 70 },
                { label: "rootfs", x: 190 },
                { label: "drivers", x: 310 },
            ].map((rec) => (
                <Iso3DBox
                    key={rec.label}
                    x={rec.x}
                    y={120}
                    w={100}
                    h={48}
                    depth={4}
                    accent={accent}
                    label={rec.label}
                    sublabel="recipe"
                    filterId={filterId}
                />
            ))}

            {/* 3. Bitbake build engine + filling progress bar */}
            <Iso3DBox
                x={170}
                y={188}
                w={140}
                h={44}
                depth={6}
                accent={accent}
                label="BITBAKE"
                sublabel="reproducible"
                filterId={filterId}
            />
            {/* Progress bar inside the build — fills left→right */}
            <rect x={182} y={222} width={116} height={5} fill="#fafaf8" stroke={accent} strokeWidth={0.6} rx={1} />
            <rect x={182} y={222} width={116} height={5} fill={accent} rx={1} className="diag-write" />

            {/* 4. Image artifact */}
            <Iso3DBox
                x={150}
                y={252}
                w={180}
                h={46}
                depth={6}
                accent={accent}
                label={imageTag.toUpperCase()}
                sublabel="READ-ONLY ROOTFS"
                filterId={filterId}
            />

            {/* 5. SBOM manifest lines (typing readout) */}
            <g transform="translate(60, 314)">
                <rect x={-6} y={-12} width={372} height={32} fill="#16181a" rx={2} />
                <text
                    x={4}
                    y={0}
                    fill="#ffffff"
                    style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3 }}
                >
                    SBOM · SPDX · traceable to source rev
                </text>
                <text
                    x={4}
                    y={11}
                    fill="#9aa0a6"
                    style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3 }}
                >
                    ISO 26262 / IEC 62304 / DO-178C ready
                </text>
                {/* blinking cursor */}
                <rect x={352} y={-4} width={5} height={8} fill={accent} className="diag-blink" />
            </g>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 4 — Bootloader & boot chain (multi-stage + golden boot)
// ─────────────────────────────────────────────────────────────────
export const Stage4Boot: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const chain = ctx.platform?.bootChain ?? ["BootROM", "FSBL", "U-Boot", "kernel"];

    const n = chain.length;
    const blockW = 80;
    const blockH = 50;
    const yMid = 150;
    const totalW = n * blockW + (n - 1) * 18;
    const startX = (480 - totalW) / 2;

    return (
        <DiagramFrame accent={accent} stage={4} title="BOOT CHAIN" filterId={filterId}>
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
                        {/* Hop-to-hop connector line — boot signal flowing */}
                        {i < n - 1 && (
                            <line
                                x1={cx + blockW / 2}
                                y1={yMid + blockH / 2}
                                x2={cx + blockW / 2 + 18}
                                y2={yMid + blockH / 2}
                                stroke={accent}
                                strokeWidth={1.4}
                                className="diag-flow"
                                style={{ animationDelay: `${i * 0.25}s` }}
                            />
                        )}

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

                        {/* Stage hop number circle below */}
                        <g>
                            <circle cx={cx} cy={yMid + blockH + 30} r={9} fill="#ffffff" stroke={accent} strokeWidth={1.2} />
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
            <g transform="translate(380, 80)" className="diag-pulse">
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

            {/* Rollback curved arrow (health-check fallback) */}
            <path
                d="M 60 300 Q 240 340 420 300"
                stroke={accent}
                strokeWidth={1}
                fill="none"
                strokeDasharray="3 4"
                opacity={0.5}
                className="diag-flow"
            />
            <text
                x={240}
                y={338}
                textAnchor="middle"
                fill="#6b7075"
                style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
            >
                ↺ ROLLBACK ON FAIL
            </text>

            {/* Boot time ticker */}
            <text
                x={20}
                y={288}
                fill="#6b7075"
                style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
            >
                [ 0.000 ] bootrom → {n} STAGES · failsafe OK
            </text>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 5 — Kernel & device drivers (modules docking onto the die)
// ─────────────────────────────────────────────────────────────────
const DRIVER_MODULES = [
    "I2C", "SPI", "ETH", "GPIO", "CAN", "UART", "PCIe", "PWM",
    "ADC", "I2S", "USB", "DSI",
];

export const Stage5Kernel: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    const dieX = 200;
    const dieY = 130;
    const dieW = 80;
    const dieH = 100;

    return (
        <DiagramFrame accent={accent} stage={5} title="KERNEL & DRIVERS" filterId={filterId}>
            {/* Mesh of pulses around the die — driver↔die traffic */}
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
                        className="diag-flow"
                        style={{ animationDelay: `${i * 0.18}s` }}
                    />
                );
            })}

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

            {/* Driver modules docking around the die */}
            {DRIVER_MODULES.map((drv, i) => {
                const angle = (i / DRIVER_MODULES.length) * Math.PI * 2 - Math.PI / 2;
                const dist = 130;
                const mx = r(dieX + dieW / 2 + Math.cos(angle) * dist - 28);
                const my = r(dieY + dieH / 2 + Math.sin(angle) * dist - 14);
                return (
                    <Iso3DBox
                        key={drv}
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
                );
            })}

            {/* Module count footer */}
            <text
                x={20}
                y={345}
                fill={accent}
                style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
            >
                {DRIVER_MODULES.length} DRIVERS LOADED · DT OVERLAYS · MAINLINE-TRACKING
            </text>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 6 — RTOS & microcontroller (Linux ↔ RTOS split + RPMsg)
// ─────────────────────────────────────────────────────────────────
export const Stage6Rtos: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const rt = RT_CORE[platformId] ?? RT_CORE.arches;
    const link = RT_LINK[platformId] ?? "RPMsg";

    // Left (Linux) and right (RTOS) domain boxes; the RPMsg link runs
    // between their inner edges (x 190 → 290, 100px gap).
    const linkStartX = 190;
    const linkEndX = 290;
    const linkY = 180;
    const travel = linkEndX - linkStartX;

    return (
        <DiagramFrame accent={accent} stage={6} title="RTOS & MCU" filterId={filterId}>
            {/* Linux domain (left) */}
            <Iso3DBox
                x={40}
                y={120}
                w={150}
                h={120}
                depth={8}
                accent={accent}
                label="LINUX"
                sublabel={rt.linux.toUpperCase()}
                filterId={filterId}
            />
            {/* Linux role tags */}
            <text x={115} y={258} textAnchor="middle" fill="#6b7075" style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}>
                perception · net · UI
            </text>

            {/* RTOS domain (right) */}
            <Iso3DBox
                x={290}
                y={120}
                w={150}
                h={120}
                depth={8}
                accent={accent}
                label={rt.rt.split(" ")[0].toUpperCase()}
                sublabel={rt.fw.toUpperCase()}
                filterId={filterId}
            />
            <text x={365} y={258} textAnchor="middle" fill="#6b7075" style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}>
                control · I/O · safety
            </text>

            {/* RPMsg / OpenAMP link — dashed flow */}
            <line
                x1={linkStartX}
                y1={linkY}
                x2={linkEndX}
                y2={linkY}
                stroke={accent}
                strokeWidth={1.2}
                className="diag-flow"
            />
            {/* Link label */}
            <text x={240} y={170} textAnchor="middle" fill={accent} style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}>
                {link}
            </text>

            {/* Packets traveling the link (left → right and back) */}
            {[0, 1, 2].map((i) => (
                <rect
                    key={`pkt-r-${i}`}
                    x={linkStartX}
                    y={linkY - 3 + i * 4}
                    width={7}
                    height={4}
                    rx={1}
                    fill={accent}
                    className="diag-packet"
                    style={{ "--diag-travel": `${travel}px`, animationDelay: `${i * 0.7}s` } as React.CSSProperties}
                />
            ))}
            {[0, 1].map((i) => (
                <rect
                    key={`pkt-l-${i}`}
                    x={linkEndX - 7}
                    y={linkY + 9 + i * 4}
                    width={7}
                    height={4}
                    rx={1}
                    fill="#6b7075"
                    className="diag-packet"
                    style={{ "--diag-travel": `${-travel}px`, animationDelay: `${0.5 + i * 0.9}s` } as React.CSSProperties}
                />
            ))}

            {/* Watchdog + supervision caption */}
            <g transform="translate(240, 300)">
                <circle r={12} fill="#ffffff" stroke={accent} strokeWidth={1.2} className="diag-pulse" />
                <text textAnchor="middle" y={3} fill={accent} style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace" }}>
                    WDT
                </text>
            </g>
            <text x={20} y={345} fill={accent} style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}>
                HETEROGENEOUS · RT OFFLOAD · WATCHDOG-SUPERVISED
            </text>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 7 — Middleware (base image → named industry image variants)
// ─────────────────────────────────────────────────────────────────
export const Stage7Middleware: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const images = PLATFORM_IMAGES[platformId] ?? PLATFORM_IMAGES.arches;

    // Fan-out the image variants in a row beneath the base image.
    const count = images.length;
    const cellW = 84;
    const gap = 8;
    const totalW = count * cellW + (count - 1) * gap;
    const startX = (480 - totalW) / 2;

    return (
        <DiagramFrame accent={accent} stage={7} title="MIDDLEWARE" filterId={filterId}>
            {/* Base image (publisher) */}
            <Iso3DBox
                x={170}
                y={60}
                w={140}
                h={44}
                depth={6}
                accent={accent}
                label={`${platformId}-base`}
                sublabel="YOCTO IMAGE"
                filterId={filterId}
            />

            {/* Spokes from base to each variant + the variant cards */}
            {images.map((img, i) => {
                const x = startX + i * (cellW + gap);
                const cx = x + cellW / 2;
                const cy = 60 + 44; // base bottom edge
                const ty = 200; // variant top
                return (
                    <g key={img.name}>
                        <line
                            x1={240}
                            y1={cy}
                            x2={cx}
                            y2={ty}
                            stroke={accent}
                            strokeWidth={0.8}
                            opacity={0.45}
                            className="diag-flow"
                            style={{ animationDelay: `${i * 0.18}s` }}
                        />
                        <Iso3DBox
                            x={x}
                            y={ty}
                            w={cellW}
                            h={70}
                            depth={5}
                            accent={accent}
                            label={img.name}
                            sublabel={img.sub.toUpperCase()}
                            filterId={filterId}
                        />
                    </g>
                );
            })}

            {/* Fan-out caption */}
            <text x={20} y={345} fill={accent} style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}>
                {count} IMAGE VARIANTS · ONE BASE · QoS-CONFIGURED
            </text>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 8 — OTA & fleet management (A/B + write + rollback + rollout)
// ─────────────────────────────────────────────────────────────────
export const Stage8Ota: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";

    return (
        <DiagramFrame accent={accent} stage={8} title="OTA & FLEET" filterId={filterId}>
            {/* Partition A (active) */}
            <Iso3DBox
                x={40}
                y={60}
                w={150}
                h={210}
                depth={10}
                accent={accent}
                label="PARTITION A"
                sublabel="ACTIVE  ✓"
                filterId={filterId}
                fillTop="#ffffff"
                fillFront="#f3f1ec"
            />

            {/* Partition B header */}
            <text
                x={330}
                y={52}
                textAnchor="middle"
                fill={accent}
                style={{ fontSize: 9, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
            >
                PARTITION B · WRITING
            </text>

            {/* Partition B — 6 cells being written in sequence */}
            {Array.from({ length: 6 }).map((_, i) => {
                const y = 60 + i * 34;
                const written = i < 4;
                return (
                    <g key={`b-cell-${i}`}>
                        <rect
                            x={250}
                            y={y}
                            width={170}
                            height={26}
                            fill="#fafaf8"
                            stroke={accent}
                            strokeWidth={1}
                            rx={2}
                        />
                        {/* Fill bar — cells fill left→right as they're written */}
                        <rect
                            x={250}
                            y={y}
                            width={170}
                            height={26}
                            fill={accent}
                            opacity={0.12}
                            rx={2}
                            className="diag-write"
                            style={{ animationDelay: `${i * 0.25}s`, animationDuration: `${1.6 + i * 0.2}s` }}
                        />
                        <text
                            x={335}
                            y={y + 16}
                            textAnchor="middle"
                            fill={accent}
                            style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4 }}
                        >
                            {written ? `B/${i + 1} WRITTEN` : "B/5…"}
                        </text>
                    </g>
                );
            })}

            {/* Swap arrow A → B */}
            <line x1={195} y1={165} x2={245} y2={165} stroke={accent} strokeWidth={2} className="diag-flow" />
            <polygon points="245,165 237,161 237,169" fill={accent} />

            {/* Rollback stamp */}
            <g transform="translate(330, 312)" className="diag-pulse">
                <rect x={-70} y={-12} width={140} height={22} fill="#16181a" rx={2} />
                <text
                    textAnchor="middle"
                    y={3}
                    fill="#ffffff"
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    ✓ ROLLBACK READY
                </text>
            </g>

            {/* Staged rollout meter (1% → 10% → all) */}
            <text x={40} y={312} fill={accent} style={{ fontSize: 7, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.4, textTransform: "uppercase" }}>
                ROLLOUT
            </text>
            <rect x={40} y={318} width={150} height={8} fill="#fafaf8" stroke={accent} strokeWidth={0.6} rx={1} />
            <rect x={40} y={318} width={150} height={8} fill={accent} rx={1} className="diag-write" style={{ animationDuration: "3.4s" }} />
            <text x={40} y={342} fill="#6b7075" style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}>
                1% → 10% → ALL · SIGNED · DELTA
            </text>
        </DiagramFrame>
    );
};

// ─────────────────────────────────────────────────────────────────
// Stage 9 — SDK, debug & profiling (toolchain + scope + CI/HIL)
// ─────────────────────────────────────────────────────────────────
export const Stage9Sdk: React.FC<{ ctx: DiagramContext; filterId: string }> = ({
    ctx,
    filterId,
}) => {
    const accent = ctx.platform?.accent ?? "#16181a";
    const platformId = ctx.platform?.id ?? "arches";
    const profiler = PROFILER[platformId] ?? "perf / gdbserver";

    // Profiler / oscilloscope trace path
    const tracePath =
        "M 30 250 L 60 250 L 68 232 L 76 268 L 84 240 L 92 260 L 100 250 L 140 250 L 148 220 L 156 280 L 164 236 L 172 264 L 180 250 L 230 250 L 238 228 L 246 272 L 254 244 L 262 256 L 270 250 L 320 250 L 328 224 L 336 276 L 344 240 L 352 260 L 360 250 L 410 250";

    return (
        <DiagramFrame accent={accent} stage={9} title="SDK & PROFILING" filterId={filterId}>
            {/* Dev machine (x86 host) */}
            <Iso3DBox
                x={30}
                y={70}
                w={120}
                h={70}
                depth={6}
                accent={accent}
                label="DEV (x86)"
                sublabel="APP TEAM"
                filterId={filterId}
            />

            {/* Cross-toolchain + eSDK (middle) */}
            <Iso3DBox
                x={180}
                y={70}
                w={120}
                h={70}
                depth={6}
                accent={accent}
                label="eSDK"
                sublabel="TOOLCHAIN"
                filterId={filterId}
            />

            {/* Target device */}
            <Iso3DBox
                x={330}
                y={70}
                w={120}
                h={70}
                depth={6}
                accent={accent}
                label="TARGET"
                sublabel={(ctx.platform?.chipFamily ?? "SoC").toUpperCase()}
                filterId={filterId}
            />

            {/* Build artifact flow: dev → esdk → target */}
            <line x1={150} y1={105} x2={180} y2={105} stroke={accent} strokeWidth={1.2} className="diag-flow" />
            <line x1={300} y1={105} x2={330} y2={105} stroke={accent} strokeWidth={1.2} className="diag-flow" />
            <text x={165} y={98} fill="#6b7075" style={{ fontSize: 5, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}>
                build
            </text>
            <text x={315} y={98} fill="#6b7075" style={{ fontSize: 5, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}>
                deploy
            </text>

            {/* Profiler / oscilloscope panel */}
            <rect x={20} y={170} width={440} height={96} fill="#fafaf8" stroke={accent} strokeWidth={1} rx={2} />
            {/* gridlines */}
            {Array.from({ length: 7 }).map((_, i) => (
                <line
                    key={`gv-${i}`}
                    x1={20 + (i + 1) * 55}
                    y1={170}
                    x2={20 + (i + 1) * 55}
                    y2={266}
                    stroke={accent}
                    strokeWidth={0.4}
                    opacity={0.18}
                />
            ))}
            {Array.from({ length: 2 }).map((_, i) => (
                <line
                    key={`gh-${i}`}
                    x1={20}
                    y1={202 + i * 32}
                    x2={460}
                    y2={202 + i * 32}
                    stroke={accent}
                    strokeWidth={0.4}
                    opacity={0.18}
                />
            ))}
            {/* The trace */}
            <path d={tracePath} stroke={accent} strokeWidth={1.5} fill="none" />
            {/* Sweep scanline */}
            <line x1={30} y1={172} x2={30} y2={264} stroke={accent} strokeWidth={1} opacity={0.4} className="diag-sweep" style={{ transformBox: "fill-box" }} />
            <text x={28} y={184} fill={accent} style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}>
                {profiler.toUpperCase()}
            </text>

            {/* CI/CD HIL loop indicator */}
            <g transform="translate(240, 300)">
                <rect x={-110} y={-12} width={220} height={22} fill={accent} rx={2} />
                <text
                    textAnchor="middle"
                    y={3}
                    fill="#ffffff"
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    CI/CD · HARDWARE-IN-THE-LOOP
                </text>
            </g>
            {/* HIL loop arrow */}
            <path d="M 390 140 Q 440 160 390 180" stroke={accent} strokeWidth={1} fill="none" strokeDasharray="3 3" className="diag-flow" />

            <text x={20} y={345} fill={accent} style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}>
                EVAL IMAGE · CROSS-SDK · HIL SMOKE TESTS
            </text>
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
            return <Stage3Yocto ctx={ctx} filterId={filterId} />;
        case 4:
            return <Stage4Boot ctx={ctx} filterId={filterId} />;
        case 5:
            return <Stage5Kernel ctx={ctx} filterId={filterId} />;
        case 6:
            return <Stage6Rtos ctx={ctx} filterId={filterId} />;
        case 7:
            return <Stage7Middleware ctx={ctx} filterId={filterId} />;
        case 8:
            return <Stage8Ota ctx={ctx} filterId={filterId} />;
        case 9:
        default:
            return <Stage9Sdk ctx={ctx} filterId={filterId} />;
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