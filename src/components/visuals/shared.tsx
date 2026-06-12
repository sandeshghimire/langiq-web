"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Shared frame for a "data panel" that sits inside the slide's text
 * column. Visually it is a clean white card with a hairline border, a
 * mono header bar (with a status pill), and the panel content below.
 *
 * Each visual fades + slides up only when its parent slide is `active`.
 */

export function DataPanel({
    active,
    children,
    label,
    status,
    accent,
    minHeight = 280,
    className = "",
}: {
    active: boolean;
    children: React.ReactNode;
    label?: string;
    status?: string;
    accent: string;
    minHeight?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className={`w-full max-w-lg mt-2 border border-[#e4e2dd] bg-white rounded-[3px] overflow-hidden ${className}`}
            style={{ minHeight }}
        >
            {label && (
                <div
                    className="flex items-center justify-between px-3 py-1.5 border-b border-[#e4e2dd] font-mono text-[9px] uppercase tracking-wider"
                    style={{ color: "#6b7075" }}
                >
                    <span className="font-bold" style={{ color: accent }}>
                        {label}
                    </span>
                    {status && (
                        <span className="flex items-center gap-1.5">
                            <span
                                className="inline-block w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: accent }}
                            />
                            {status}
                        </span>
                    )}
                </div>
            )}
            <div className="p-4">{children}</div>
        </motion.div>
    );
}

/**
 * A small inline code block (used in the StackTrace / DriverList /
 * BootChord visual types).
 */
export function InlineCode({ children, accent }: { children: React.ReactNode; accent: string }) {
    return (
        <span
            className="font-mono text-[10px] px-1 py-0.5 rounded-[2px]"
            style={{ backgroundColor: `${accent}12`, color: accent }}
        >
            {children}
        </span>
    );
}

/**
 * A compact, monospace stat block — used in the BootStats / LiveMetrics
 * visual types. Three of these side-by-side is a common pattern.
 */
export function StatBlock({
    value,
    unit,
    label,
    accent,
}: {
    value: string;
    unit?: string;
    label: string;
    accent: string;
}) {
    return (
        <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
                <span
                    className="font-mono text-lg font-bold leading-none"
                    style={{ color: accent }}
                >
                    {value}
                </span>
                {unit && (
                    <span className="font-mono text-[10px] text-[#6b7075]">{unit}</span>
                )}
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#6b7075] mt-1">
                {label}
            </span>
        </div>
    );
}

/**
 * A row in a key/value table used by the CapabilityMatrix and SpecSheet
 * visual types.
 */
export function SpecRow({
    k,
    v,
    accent,
    isLast = false,
}: {
    k: string;
    v: React.ReactNode;
    accent: string;
    isLast?: boolean;
}) {
    return (
        <div
            className={`flex items-center justify-between gap-2 py-1.5 ${isLast ? "" : "border-b border-dashed border-[#e4e2dd]"
                }`}
        >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#6b7075]">
                {k}
            </span>
            <span
                className="font-mono text-[10px] font-bold text-right"
                style={{ color: accent }}
            >
                {v}
            </span>
        </div>
    );
}

/**
 * A small dotted-grid background for SVG visuals — matches the chip's
 * pin grid for visual consistency.
 */
export function DotGrid({
    cols = 14,
    rows = 8,
    spacing = 18,
    offsetX = 20,
    offsetY = 20,
    opacity = 0.15,
}: {
    cols?: number;
    rows?: number;
    spacing?: number;
    offsetX?: number;
    offsetY?: number;
    opacity?: number;
}) {
    const dots: React.ReactElement[] = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dots.push(
                <circle
                    key={`d-${r}-${c}`}
                    cx={offsetX + c * spacing}
                    cy={offsetY + r * spacing}
                    r="0.8"
                    fill="#16181a"
                    opacity={opacity}
                />
            );
        }
    }
    return <g>{dots}</g>;
}
