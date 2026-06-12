"use client";

import React from "react";
import { motion } from "framer-motion";
import { DataPanel, DotGrid } from "./shared";

/**
 * Platform-specific SVG diagrams. Each is a stylized representation of
 * the platform's distinguishing feature — pure data viz, no
 * decoration, all consistent with the chip's hairline aesthetic.
 */

/** Arches — STM32 satellite chip wired via RPMsg. */
export function ArchesRpmsgLink({
    active,
    accent,
}: {
    active: boolean;
    accent: string;
}) {
    return (
        <DataPanel
            active={active}
            label="RPMSG LINK"
            status="ACTIVE"
            accent={accent}
            minHeight={220}
        >
            <svg viewBox="0 0 320 160" className="w-full h-auto" role="img" aria-label="Jetson ↔ STM32 RPMsg link">
                <DotGrid cols={14} rows={6} spacing={22} offsetX={14} offsetY={14} opacity={0.08} />

                {/* Jetson SoC box */}
                <motion.rect
                    x={20}
                    y={50}
                    width={110}
                    height={70}
                    rx={3}
                    fill="#ffffff"
                    stroke="#16181a"
                    strokeWidth="1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                />
                <motion.text
                    x={75}
                    y={80}
                    textAnchor="middle"
                    fill="#16181a"
                    className="font-mono"
                    style={{ fontSize: 10, fontWeight: 700 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                >
                    JETSON
                </motion.text>
                <motion.text
                    x={75}
                    y={95}
                    textAnchor="middle"
                    fill="#6b7075"
                    className="font-mono"
                    style={{ fontSize: 7, letterSpacing: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                >
                    LINUX
                </motion.text>

                {/* STM32 satellite */}
                <motion.rect
                    x={200}
                    y={50}
                    width={100}
                    height={70}
                    rx={3}
                    fill="#ffffff"
                    stroke={accent}
                    strokeWidth="1.5"
                    initial={{ opacity: 0, x: 10 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                />
                <motion.text
                    x={250}
                    y={80}
                    textAnchor="middle"
                    fill="#16181a"
                    className="font-mono"
                    style={{ fontSize: 10, fontWeight: 700 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                >
                    STM32
                </motion.text>
                <motion.text
                    x={250}
                    y={95}
                    textAnchor="middle"
                    fill={accent}
                    className="font-mono"
                    style={{ fontSize: 7, fontWeight: 700, letterSpacing: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                >
                    REAL-TIME
                </motion.text>

                {/* Link wire */}
                <line x1={130} y1={85} x2={200} y2={85} stroke="#16181a" strokeWidth="1" />
                <motion.line
                    x1={130}
                    y1={85}
                    x2={200}
                    y2={85}
                    stroke={accent}
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={active ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                />
                {active && (
                    <circle r="3" fill={accent}>
                        <animateMotion
                            path="M 130 85 L 200 85"
                            dur="1.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                )}

                {/* Label */}
                <motion.text
                    x={165}
                    y={75}
                    textAnchor="middle"
                    fill={accent}
                    className="font-mono"
                    style={{ fontSize: 8, fontWeight: 700, letterSpacing: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                >
                    RPMsg
                </motion.text>
                <motion.text
                    x={165}
                    y={105}
                    textAnchor="middle"
                    fill="#6b7075"
                    className="font-mono"
                    style={{ fontSize: 7, letterSpacing: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.3, duration: 0.3 }}
                >
                    deterministic I/O
                </motion.text>
            </svg>
        </DataPanel>
    );
}

/** Acadia — Pi GPIO header pinout (carrier / industrial mapping). */
export function AcadiaPinout({
    active,
    accent,
}: {
    active: boolean;
    accent: string;
}) {
    const pins = [
        { n: 1, label: "3V3" },
        { n: 2, label: "5V" },
        { n: 3, label: "I2C_SDA" },
        { n: 4, label: "5V" },
        { n: 5, label: "I2C_SCL" },
        { n: 6, label: "GND" },
        { n: 7, label: "GPIO_04" },
        { n: 8, label: "UART_TX" },
        { n: 9, label: "GND" },
        { n: 10, label: "UART_RX" },
    ];
    return (
        <DataPanel
            active={active}
            label="CARRIER I/O"
            status="40-PIN"
            accent={accent}
            minHeight={220}
        >
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[9px]">
                {pins.map((p, i) => (
                    <motion.div
                        key={p.n}
                        initial={{ opacity: 0, x: -6 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                        transition={{ delay: 0.25 + i * 0.04, duration: 0.3 }}
                        className="flex items-center gap-2"
                    >
                        <span
                            className="w-4 h-4 rounded-sm border flex items-center justify-center text-[8px] font-bold"
                            style={{ borderColor: accent, color: accent }}
                        >
                            {p.n}
                        </span>
                        <span className="text-[#16181a]">{p.label}</span>
                    </motion.div>
                ))}
            </div>
        </DataPanel>
    );
}

/** Zion — FPGA fabric utilization map. */
export function ZionFabricMap({
    active,
    accent,
}: {
    active: boolean;
    accent: string;
}) {
    // 16x10 fabric cells, some marked as "in use" (accent), some "free" (gray).
    const inUse = new Set([
        "3-2", "3-3", "3-4", "4-3", "4-4", "4-5",
        "7-2", "7-3", "7-4", "8-3", "8-4",
        "10-5", "10-6", "11-5", "11-6", "11-7",
        "13-1", "13-2", "14-2", "14-3",
    ]);
    const rows = 10;
    const cols = 16;
    const cellW = 16;
    const cellH = 12;
    return (
        <DataPanel
            active={active}
            label="FPGA FABRIC"
            status={`${inUse.size}/${rows * cols} LUTs`}
            accent={accent}
            minHeight={220}
        >
            <svg viewBox={`0 0 ${cols * cellW + 16} ${rows * cellH + 24}`} className="w-full h-auto">
                {Array.from({ length: rows }).map((_, r) =>
                    Array.from({ length: cols }).map((_, c) => {
                        const used = inUse.has(`${c}-${r}`);
                        return (
                            <motion.rect
                                key={`${c}-${r}`}
                                x={8 + c * cellW}
                                y={8 + r * cellH}
                                width={cellW - 2}
                                height={cellH - 2}
                                fill={used ? accent : "#fafaf8"}
                                stroke="#e4e2dd"
                                strokeWidth="0.5"
                                initial={{ opacity: 0 }}
                                animate={active ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.2 + (r * cols + c) * 0.005, duration: 0.2 }}
                            />
                        );
                    })
                )}
            </svg>
        </DataPanel>
    );
}

/** Pinnacle — longevity / certification timeline. */
export function PinnacleTimeline({
    active,
    accent,
}: {
    active: boolean;
    accent: string;
}) {
    const milestones = [
        { year: "Y0", label: "Launch" },
        { year: "Y5", label: "Mid-life" },
        { year: "Y10", label: "Refresh" },
        { year: "Y15", label: "Guarantee" },
    ];
    return (
        <DataPanel
            active={active}
            label="LONGEVITY"
            status="15 YR"
            accent={accent}
            minHeight={220}
        >
            <div className="relative pt-3 pb-2 px-2">
                <div
                    className="absolute left-3 right-3 top-[1.85rem] h-[1px]"
                    style={{ backgroundColor: accent, opacity: 0.3 }}
                />
                <div className="grid grid-cols-4 gap-2 relative">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={m.year}
                            initial={{ opacity: 0, y: 6 }}
                            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                            transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div
                                className="w-3 h-3 rounded-full border-2 bg-[#fafaf8]"
                                style={{ borderColor: accent }}
                            />
                            <span
                                className="font-mono text-[10px] font-bold"
                                style={{ color: accent }}
                            >
                                {m.year}
                            </span>
                            <span className="font-mono text-[8px] text-[#6b7075] uppercase tracking-wider text-center leading-tight">
                                {m.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mt-2 pt-2 border-t border-dashed border-[#e4e2dd] grid grid-cols-2 gap-2 font-mono text-[9px]">
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    <span className="text-[#16181a]">IEC 61508</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    <span className="text-[#16181a]">IEC 62304</span>
                </div>
            </div>
        </DataPanel>
    );
}

/** Joshua — PRU cycle-exact timing diagram. */
export function JoshuaTiming({
    active,
    accent,
}: {
    active: boolean;
    accent: string;
}) {
    return (
        <DataPanel
            active={active}
            label="PRU TIMING"
            status="200 MHz"
            accent={accent}
            minHeight={220}
        >
            <svg viewBox="0 0 320 140" className="w-full h-auto" role="img" aria-label="PRU cycle-exact timing">
                <DotGrid cols={14} rows={6} spacing={22} offsetX={14} offsetY={14} opacity={0.08} />

                {/* Three channels with square wave */}
                {[
                    { y: 35, label: "PRU_0" },
                    { y: 70, label: "PRU_1" },
                    { y: 105, label: "ARM" },
                ].map((ch, idx) => (
                    <g key={ch.label}>
                        <text
                            x={20}
                            y={ch.y + 4}
                            fill={idx === 2 ? "#6b7075" : "#16181a"}
                            className="font-mono"
                            style={{ fontSize: 9, fontWeight: 700 }}
                        >
                            {ch.label}
                        </text>
                        <motion.path
                            d={`M 70 ${ch.y} L 80 ${ch.y} L 80 ${ch.y - 12} L 90 ${ch.y - 12} L 90 ${ch.y} L 100 ${ch.y} L 100 ${ch.y - 12} L 110 ${ch.y - 12} L 110 ${ch.y} L 130 ${ch.y} L 130 ${ch.y - 12} L 140 ${ch.y - 12} L 140 ${ch.y} L 150 ${ch.y} L 150 ${ch.y - 12} L 160 ${ch.y - 12} L 160 ${ch.y} L 170 ${ch.y} L 170 ${ch.y - 12} L 180 ${ch.y - 12} L 180 ${ch.y} L 200 ${ch.y} L 200 ${ch.y - 12} L 210 ${ch.y - 12} L 210 ${ch.y} L 220 ${ch.y} L 220 ${ch.y - 12} L 230 ${ch.y - 12} L 230 ${ch.y} L 250 ${ch.y} L 250 ${ch.y - 12} L 260 ${ch.y - 12} L 260 ${ch.y} L 270 ${ch.y}`}
                            fill="none"
                            stroke={idx === 2 ? "#6b7075" : accent}
                            strokeWidth="1.2"
                            initial={{ pathLength: 0 }}
                            animate={active ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ delay: 0.3 + idx * 0.2, duration: 1.4, ease: "easeInOut" }}
                        />
                    </g>
                ))}

                {/* Time axis */}
                <line x1={70} y1={125} x2={300} y2={125} stroke="#16181a" strokeWidth="0.5" opacity="0.4" />
                {["0ns", "50ns", "100ns", "150ns", "200ns"].map((t, i) => (
                    <text
                        key={t}
                        x={70 + i * 50}
                        y={138}
                        textAnchor="middle"
                        fill="#6b7075"
                        className="font-mono"
                        style={{ fontSize: 7 }}
                    >
                        {t}
                    </text>
                ))}
            </svg>
        </DataPanel>
    );
}

/** Sequoia — PCIe lane fan-out diagram. */
export function SequoiaPcieLanes({
    active,
    accent,
}: {
    active: boolean;
    accent: string;
}) {
    // 16 lanes fanning out from a die to connector pads.
    return (
        <DataPanel
            active={active}
            label="PCIe GEN4 x16"
            status="64 LANES"
            accent={accent}
            minHeight={220}
        >
            <svg viewBox="0 0 320 180" className="w-full h-auto" role="img" aria-label="PCIe lane fan-out">
                <DotGrid cols={14} rows={6} spacing={22} offsetX={14} offsetY={14} opacity={0.08} />

                {/* Die */}
                <motion.rect
                    x={20}
                    y={50}
                    width={100}
                    height={80}
                    rx={3}
                    fill="#ffffff"
                    stroke="#16181a"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                />
                <motion.text
                    x={70}
                    y={85}
                    textAnchor="middle"
                    fill="#16181a"
                    className="font-mono"
                    style={{ fontSize: 9, fontWeight: 700 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                >
                    CPU / SoC
                </motion.text>
                <motion.text
                    x={70}
                    y={100}
                    textAnchor="middle"
                    fill={accent}
                    className="font-mono"
                    style={{ fontSize: 7, fontWeight: 700, letterSpacing: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={active ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                >
                    ROOT COMPLEX
                </motion.text>

                {/* 16 lanes */}
                {Array.from({ length: 16 }).map((_, i) => {
                    const y = 30 + i * 8;
                    const finalX = 280;
                    return (
                        <g key={`lane-${i}`}>
                            <line
                                x1={120}
                                y1={90}
                                x2={finalX}
                                y2={y}
                                stroke={accent}
                                strokeWidth="0.6"
                                opacity={active ? 0.5 : 0}
                            />
                            <motion.line
                                x1={120}
                                y1={90}
                                x2={finalX}
                                y2={y}
                                stroke={accent}
                                strokeWidth="0.6"
                                initial={{ pathLength: 0 }}
                                animate={active ? { pathLength: 1 } : { pathLength: 0 }}
                                transition={{ delay: 0.4 + i * 0.04, duration: 0.4 }}
                            />
                            <motion.rect
                                x={finalX - 4}
                                y={y - 2}
                                width={8}
                                height={4}
                                fill={accent}
                                initial={{ opacity: 0 }}
                                animate={active ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.7 + i * 0.04, duration: 0.2 }}
                            />
                        </g>
                    );
                })}

                {/* Lane count label */}
                <text
                    x={170}
                    y={170}
                    textAnchor="middle"
                    fill="#6b7075"
                    className="font-mono"
                    style={{ fontSize: 7, letterSpacing: 0.5 }}
                >
                    x16 lanes · 31.5 GB/s
                </text>
            </svg>
        </DataPanel>
    );
}

/** Home — platform matrix (6 platforms x key dimensions). */
export function PlatformMatrix({
    active,
}: {
    active: boolean;
}) {
    const rows = [
        { label: "Arches", cell: "NVIDIA Jetson", accent: "#0f7a4d" },
        { label: "Acadia", cell: "Raspberry Pi", accent: "#c43a3a" },
        { label: "Zion", cell: "AMD Xilinx Zynq", accent: "#6b4fd3" },
        { label: "Pinnacle", cell: "NXP i.MX", accent: "#1f6fd6" },
        { label: "Joshua", cell: "TI Sitara", accent: "#d4622a" },
        { label: "Sequoia", cell: "Intel / AMD x86", accent: "#4a6478" },
    ];
    return (
        <DataPanel
            active={active}
            label="PLATFORM MATRIX"
            status="6 PLATFORMS"
            accent="#16181a"
            minHeight={260}
        >
            <div className="flex flex-col gap-1">
                {rows.map((r, i) => (
                    <motion.a
                        key={r.label}
                        href={`/${r.label.toLowerCase()}`}
                        initial={{ opacity: 0, x: -8 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                        transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
                        className="flex items-center justify-between gap-2 border border-[#e4e2dd] rounded-[2px] px-2 py-1.5 hover:bg-[#fafaf8] transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="w-1 h-4 rounded-[1px]"
                                style={{ backgroundColor: r.accent }}
                            />
                            <span className="font-mono text-[10px] font-bold text-[#16181a]">
                                {r.label}
                            </span>
                        </div>
                        <span
                            className="font-mono text-[9px] uppercase tracking-wider"
                            style={{ color: r.accent }}
                        >
                            {r.cell}
                        </span>
                    </motion.a>
                ))}
            </div>
        </DataPanel>
    );
}

/** Industries grid — for Home and platform Overview slides. */
export function IndustriesGrid({
    active,
    primary,
    secondary,
    accent,
}: {
    active: boolean;
    primary: string[];
    secondary: string[];
    accent: string;
}) {
    return (
        <DataPanel
            active={active}
            label="INDUSTRIES"
            status="MATCHED"
            accent={accent}
            minHeight={200}
        >
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-1.5">
                    {primary.map((p, i) => (
                        <motion.span
                            key={p}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                            className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 border-2 rounded-[2px]"
                            style={{ borderColor: accent, color: accent }}
                        >
                            {p}
                        </motion.span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {secondary.map((p, i) => (
                        <motion.span
                            key={p}
                            initial={{ opacity: 0 }}
                            animate={active ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                            className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 border border-[#e4e2dd] text-[#6b7075] rounded-[2px]"
                        >
                            {p}
                        </motion.span>
                    ))}
                </div>
                <p className="font-mono text-[9px] text-[#6b7075] uppercase tracking-wider mt-1">
                    Primary · Secondary
                </p>
            </div>
        </DataPanel>
    );
}

/** Home/Hiring slide — "what we replace" comparison table. */
export function HiringReplacementTable({
    active,
}: {
    active: boolean;
}) {
    const rows = [
        { role: "Senior embedded Linux engineer", market: "9 mo", ours: "Day 1" },
        { role: "Yocto / BSP maintainer", market: "8 mo", ours: "Day 1" },
        { role: "Kernel / driver engineer", market: "11 mo", ours: "Day 1" },
        { role: "OTA / security engineer", market: "6 mo", ours: "Day 1" },
        { role: "Manufacturing / provisioning", market: "5 mo", ours: "Day 1" },
    ];
    return (
        <DataPanel
            active={active}
            label="HIRING VS HIRING US"
            status="TIMELINE"
            accent="#16181a"
            minHeight={260}
        >
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#16181a]">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#6b7075]">
                        Role
                    </span>
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#6b7075] w-12 text-right">
                            Market
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-[#16181a] w-12 text-right">
                            SoCcentric
                        </span>
                    </div>
                </div>
                {rows.map((r, i) => (
                    <motion.div
                        key={r.role}
                        initial={{ opacity: 0, y: 4 }}
                        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                        className="flex items-center justify-between gap-2 py-1 border-b border-dashed border-[#e4e2dd] last:border-0"
                    >
                        <span className="font-mono text-[10px] text-[#16181a] flex-1">
                            {r.role}
                        </span>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] text-[#6b7075] w-12 text-right line-through">
                                {r.market}
                            </span>
                            <span className="font-mono text-[10px] font-bold text-[#16181a] w-12 text-right">
                                {r.ours}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </DataPanel>
    );
}

/** Manufacturing panel — the "first 30 days" timeline. */
export function ManufacturingTimeline({
    active,
    accent,
    steps,
}: {
    active: boolean;
    accent: string;
    steps: { day: string; label: string }[];
}) {
    return (
        <DataPanel
            active={active}
            label="FIRST 30 DAYS"
            status="TIMELINE"
            accent={accent}
            minHeight={200}
        >
            <div className="flex flex-col gap-1.5">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.day}
                        initial={{ opacity: 0, x: -6 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                        className="flex items-center gap-2.5"
                    >
                        <span
                            className="font-mono text-[9px] font-bold w-10 text-right"
                            style={{ color: accent }}
                        >
                            {s.day}
                        </span>
                        <div className="w-[1px] h-3" style={{ backgroundColor: accent, opacity: 0.4 }} />
                        <span className="font-mono text-[10px] text-[#16181a]">
                            {s.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </DataPanel>
    );
}
