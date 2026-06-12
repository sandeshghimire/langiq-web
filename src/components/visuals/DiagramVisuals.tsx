"use client";

import React from "react";
import { motion } from "framer-motion";
import { DataPanel, DotGrid, SpecRow, StatBlock } from "./shared";

/**
 * Capability matrix — a 2-column or 3-column grid of capability chips,
 * each chip tinted in the platform accent. Used in the Overview and
 * Middleware slides where the platform's key strengths are listed.
 */
export function CapabilityGrid({
    active,
    items,
    accent,
    label = "CAPABILITIES",
    status,
    minHeight = 220,
}: {
    active: boolean;
    items: { name: string; sub?: string }[];
    accent: string;
    label?: string;
    status?: string;
    minHeight?: number;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            status={status}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="grid grid-cols-2 gap-2">
                {items.map((it, i) => (
                    <motion.div
                        key={it.name}
                        initial={{ opacity: 0, y: 6 }}
                        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                        className="flex items-center gap-2 border border-[#e4e2dd] bg-[#fafaf8] rounded-[2px] px-2 py-1.5"
                    >
                        <span
                            className="font-mono text-[9px] font-bold uppercase tracking-wider"
                            style={{ color: accent }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex flex-col leading-tight">
                            <span className="font-mono text-[10px] font-bold text-[#16181a]">
                                {it.name}
                            </span>
                            {it.sub && (
                                <span className="font-mono text-[8px] text-[#6b7075] uppercase tracking-wider">
                                    {it.sub}
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </DataPanel>
    );
}

/**
 * BootChainDiagram — the actual boot sequence visualized as a horizontal
 * flow of stages with a connector line and a stage label below each
 * node. Mirrors the per-platform boot chain from `data/platforms.ts`.
 */
export function BootChainDiagram({
    active,
    stages,
    accent,
    label = "BOOT CHAIN",
    minHeight = 220,
}: {
    active: boolean;
    stages: string[];
    accent: string;
    label?: string;
    minHeight?: number;
}) {
    const width = 320;
    const nodeW = 56;
    const nodeH = 36;
    const totalGaps = stages.length - 1;
    const usableW = width - 40;
    const stepX = totalGaps > 0 ? usableW / totalGaps : 0;
    const baseY = 90;

    return (
        <DataPanel
            active={active}
            label={label}
            status={`${stages.length} STAGES`}
            accent={accent}
            minHeight={minHeight}
        >
            <svg
                viewBox={`0 0 ${width} 180`}
                className="w-full h-auto"
                role="img"
                aria-label={`Boot chain: ${stages.join(" → ")}`}
            >
                <DotGrid cols={14} rows={6} spacing={22} offsetX={14} offsetY={14} opacity={0.08} />

                {/* Connector line */}
                <line
                    x1={20}
                    y1={baseY + nodeH / 2}
                    x2={width - 20}
                    y2={baseY + nodeH / 2}
                    stroke={accent}
                    strokeWidth="1.2"
                    opacity="0.3"
                />
                <motion.line
                    x1={20}
                    y1={baseY + nodeH / 2}
                    x2={width - 20}
                    y2={baseY + nodeH / 2}
                    stroke={accent}
                    strokeWidth="1.2"
                    initial={{ pathLength: 0 }}
                    animate={active ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />

                {stages.map((s, i) => {
                    const cx = 20 + i * stepX;
                    const x = cx - nodeW / 2;
                    const y = baseY;
                    return (
                        <g key={s}>
                            <motion.rect
                                x={x}
                                y={y}
                                width={nodeW}
                                height={nodeH}
                                rx="2"
                                fill="#ffffff"
                                stroke={accent}
                                strokeWidth="1"
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                                transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                                style={{ transformOrigin: `${cx}px ${baseY + nodeH / 2}px`, transformBox: "view-box" }}
                            />
                            <motion.text
                                x={cx}
                                y={y + nodeH / 2 + 3}
                                textAnchor="middle"
                                fill="#16181a"
                                className="font-mono"
                                style={{ fontSize: 8, fontWeight: 700 }}
                                initial={{ opacity: 0 }}
                                animate={active ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                            >
                                {s}
                            </motion.text>
                            <motion.text
                                x={cx}
                                y={y + nodeH + 16}
                                textAnchor="middle"
                                fill="#6b7075"
                                className="font-mono uppercase"
                                style={{ fontSize: 6, letterSpacing: 0.5 }}
                                initial={{ opacity: 0 }}
                                animate={active ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.7 + i * 0.15, duration: 0.3 }}
                            >
                                STAGE {i + 1}
                            </motion.text>
                        </g>
                    );
                })}
            </svg>
        </DataPanel>
    );
}

/**
 * ProtocolStack — a vertical stack of labeled protocol layers with
 * arrows indicating pub/sub flow. Used on the Middleware slide.
 */
export function ProtocolStack({
    active,
    layers,
    accent,
    label = "EDGE STACK",
    minHeight = 240,
}: {
    active: boolean;
    layers: { name: string; role: string; protocols: string[] }[];
    accent: string;
    label?: string;
    minHeight?: number;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            status={`${layers.length} LAYERS`}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="flex flex-col gap-1.5">
                {layers.map((layer, i) => (
                    <motion.div
                        key={layer.name}
                        initial={{ opacity: 0, x: -8 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 border border-[#e4e2dd] rounded-[2px] px-2 py-1.5 bg-[#fafaf8]"
                    >
                        <span
                            className="font-mono text-[9px] font-bold w-4 text-right"
                            style={{ color: accent }}
                        >
                            L{i}
                        </span>
                        <div className="flex-1 flex flex-col leading-tight">
                            <span className="font-mono text-[10px] font-bold text-[#16181a]">
                                {layer.name}
                            </span>
                            <span className="font-mono text-[8px] text-[#6b7075] uppercase tracking-wider">
                                {layer.role}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-1 justify-end max-w-[160px]">
                            {layer.protocols.map((p) => (
                                <span
                                    key={p}
                                    className="font-mono text-[8px] px-1.5 py-0.5 border rounded-[2px]"
                                    style={{ borderColor: accent, color: accent }}
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </DataPanel>
    );
}

/**
 * StatStrip — three or four stat blocks side-by-side. Used in
 * Performance and Manufacturing slides.
 */
export function StatStrip({
    active,
    stats,
    accent,
    label = "TELEMETRY",
    status = "MEASURED",
    minHeight = 160,
}: {
    active: boolean;
    stats: { value: string; unit?: string; label: string }[];
    accent: string;
    label?: string;
    status?: string;
    minHeight?: number;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            status={status}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="grid grid-cols-3 gap-3">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 6 }}
                        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    >
                        <StatBlock
                            value={s.value}
                            unit={s.unit}
                            label={s.label}
                            accent={accent}
                        />
                    </motion.div>
                ))}
            </div>
        </DataPanel>
    );
}

/**
 * SpecSheet — a dense list of key/value rows (think: a datasheet
 * preview). Used in the Manufacturing slide and in Sequoia's PCIe
 * slide.
 */
export function SpecSheet({
    active,
    rows,
    accent,
    label = "DATASHEET",
    status,
    minHeight = 240,
}: {
    active: boolean;
    rows: { k: string; v: React.ReactNode }[];
    accent: string;
    label?: string;
    status?: string;
    minHeight?: number;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            status={status}
            accent={accent}
            minHeight={minHeight}
        >
            <div>
                {rows.map((r, i) => (
                    <SpecRow key={r.k} k={r.k} v={r.v} accent={accent} isLast={i === rows.length - 1} />
                ))}
            </div>
        </DataPanel>
    );
}

/**
 * StackDiagram — a stack of horizontal "blocks" representing layers
 * (Hardware / Kernel / Middleware / App). Used in the Overview and
 * Middleware slides to show what the platform covers.
 */
export function StackDiagram({
    active,
    layers,
    accent,
    label = "STACK",
    minHeight = 240,
}: {
    active: boolean;
    layers: { name: string; sub: string }[];
    accent: string;
    label?: string;
    minHeight?: number;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            status={`${layers.length} LAYERS`}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="flex flex-col gap-1">
                {layers.map((layer, i) => (
                    <motion.div
                        key={layer.name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-3 border border-[#e4e2dd] bg-[#fafaf8] rounded-[2px] px-2 py-1.5"
                    >
                        <div
                            className="w-1 h-5 rounded-[1px]"
                            style={{ backgroundColor: accent, opacity: 0.3 + (i / layers.length) * 0.7 }}
                        />
                        <div className="flex-1 flex items-center justify-between">
                            <span className="font-mono text-[10px] font-bold text-[#16181a]">
                                {layer.name}
                            </span>
                            <span className="font-mono text-[9px] text-[#6b7075] uppercase tracking-wider">
                                {layer.sub}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </DataPanel>
    );
}

/**
 * OtaTimeline — a horizontal timeline with checkpoints (A → B →
 * verified → swap). Used in OTA slides.
 */
export function OtaTimeline({
    active,
    accent,
    label = "OTA LIFECYCLE",
    minHeight = 200,
}: {
    active: boolean;
    accent: string;
    label?: string;
    minHeight?: number;
}) {
    const steps = ["A active", "Image write", "Verify", "Swap B → A", "Rollback safe"];
    return (
        <DataPanel
            active={active}
            label={label}
            status="A/B"
            accent={accent}
            minHeight={minHeight}
        >
            <div className="flex items-center justify-between gap-1">
                {steps.map((s, i) => (
                    <React.Fragment key={s}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: accent }}
                            />
                            <span className="font-mono text-[8px] uppercase tracking-wider text-[#6b7075] text-center max-w-[60px] leading-tight">
                                {s}
                            </span>
                        </motion.div>
                        {i < steps.length - 1 && (
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={active ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                                className="flex-1 h-[1px] origin-left"
                                style={{ backgroundColor: accent, opacity: 0.4 }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </DataPanel>
    );
}

/**
 * BarChart — a horizontal bar chart with platform-specific data. Used
 * in the Performance slides to show things like utilization %
 * breakdown, boot time across stages, etc.
 */
export function BarChart({
    active,
    rows,
    accent,
    label = "PERFORMANCE",
    status = "MEASURED",
    minHeight = 220,
}: {
    active: boolean;
    rows: { label: string; value: number; unit?: string }[];
    accent: string;
    label?: string;
    status?: string;
    minHeight?: number;
}) {
    const max = Math.max(...rows.map((r) => r.value), 1);
    return (
        <DataPanel
            active={active}
            label={label}
            status={status}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="flex flex-col gap-2">
                {rows.map((r, i) => {
                    const pct = (r.value / max) * 100;
                    return (
                        <div key={r.label} className="flex flex-col gap-1">
                            <div className="flex items-baseline justify-between">
                                <span className="font-mono text-[10px] text-[#16181a] font-bold">
                                    {r.label}
                                </span>
                                <span className="font-mono text-[10px] font-bold" style={{ color: accent }}>
                                    {r.value}
                                    {r.unit ?? ""}
                                </span>
                            </div>
                            <div className="h-1.5 w-full bg-[#e4e2dd] rounded-[1px] overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={active ? { width: `${pct}%` } : { width: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                                    className="h-full rounded-[1px]"
                                    style={{ backgroundColor: accent }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </DataPanel>
    );
}

/**
 * CodeBlock — a syntax-highlighted, monospace code/SDK snippet. Used
 * in the SDK & Tools slide to show what a developer actually writes.
 */
export function CodeBlock({
    active,
    filename,
    code,
    accent,
    label = "eSDK SAMPLE",
    status = "BUILDABLE",
    minHeight = 240,
}: {
    active: boolean;
    filename: string;
    code: { text: string; color?: string }[];
    accent: string;
    label?: string;
    status?: string;
    minHeight?: number;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            status={status}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] text-[#6b7075] uppercase tracking-wider">
                    {filename}
                </span>
                <span className="flex items-center gap-1.5">
                    <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: accent }}
                    />
                    <span className="font-mono text-[9px] text-[#6b7075]">SDK</span>
                </span>
            </div>
            <pre className="font-mono text-[10px] leading-[1.6] overflow-x-auto bg-[#fafaf8] border border-[#e4e2dd] rounded-[2px] p-2">
                <code>
                    {code.map((line, i) => (
                        <div key={i}>
                            {line.text.split(/(\s+)/).map((tok, j) => {
                                // Lightweight token coloring: keywords + comments +
                                // strings get colored using the line's color or accent.
                                const isComment = line.text.trim().startsWith("//");
                                const baseColor = line.color ?? (isComment ? "#6b7075" : "#16181a");
                                return (
                                    <span key={j} style={{ color: baseColor }}>
                                        {tok}
                                    </span>
                                );
                            })}
                        </div>
                    ))}
                </code>
            </pre>
        </DataPanel>
    );
}
