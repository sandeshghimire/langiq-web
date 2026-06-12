"use client";

import React from "react";

/**
 * Shared 3D look primitives for the new per-slide diagram system.
 *
 * The look is "engineering schematic in isometric perspective" — layered
 * paths with offset fills, hairline strokes, and a soft SVG drop-shadow
 * filter that suggests depth without using real 3D. Everything is
 * pure SVG, no WebGL, no Three.js, no image assets, works in static
 * export.
 *
 * All animations stay compositor-friendly: transform / opacity /
 * stroke-dashoffset only.
 */

/**
 * SVG filter that gives a layered "lifted off the page" look. Used on
 * the top face of every 3D block. The drop-shadow is a single Gaussian
 * blur of a dark version of the shape, offset down-right, with a soft
 * alpha falloff.
 */
export const Iso3DFilter: React.FC<{ id: string; intensity?: number }> = ({
    id,
    intensity = 1,
}) => (
    <defs>
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation={2.5 * intensity} />
            <feOffset dx={3 * intensity} dy={4 * intensity} result="shadow" />
            <feComponentTransfer in="shadow" result="shadow-faded">
                <feFuncA type="linear" slope={0.25} />
            </feComponentTransfer>
            <feMerge>
                <feMergeNode in="shadow-faded" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
);

/**
 * A 3D box in isometric projection. The "top" face is a parallelogram
 * offset up-left, the "front" face is the lower-right rectangle, the
 * "right" face is the right-leaning parallelogram. All three share a
 * hairline stroke; the top is filled with white, the sides with a
 * stepped-tint of the accent for depth.
 *
 * Used as the base primitive for every block in the new diagram
 * system.
 */
export interface Iso3DBoxProps {
    x: number;
    y: number;
    w: number;
    h: number;
    depth?: number; // pixel depth in 2D
    accent: string;
    label?: string;
    sublabel?: string;
    labelColor?: string;
    active?: boolean;
    fillTop?: string;
    fillFront?: string;
    fillRight?: string;
    strokeWidth?: number;
    cornerRadius?: number;
    filterId?: string;
    className?: string;
}

export const Iso3DBox: React.FC<Iso3DBoxProps> = ({
    x,
    y,
    w,
    h,
    depth = 10,
    accent,
    label,
    sublabel,
    labelColor,
    active = true,
    fillTop,
    fillFront,
    fillRight,
    strokeWidth = 1.2,
    filterId,
    className,
}) => {
    const topFill = fillTop ?? "#ffffff";
    const frontFill = fillFront ?? "#f3f1ec";
    const rightFill = fillRight ?? "#e8e5dd";
    const inkLabel = labelColor ?? "#16181a";
    const opacity = active ? 1 : 0.4;

    // Isometric parallelogram offsets: top face shifts up-left, right face
    // shifts right, front face is the base.
    const dx = depth * 0.5;
    const dy = -depth * 0.5;

    // Round all coordinates to 2 decimal places to keep SSR and client
    // output bit-identical. Without this, floating-point math like
    // `0.5 * 8` produces different precision in V8 vs Node and the
    // static export's SVG markup doesn't match the client's, which
    // trips a React hydration mismatch warning.
    const r = (n: number) => Math.round(n * 100) / 100;

    // Top face polygon: 4 corners
    const topPts = [
        [r(x), r(y)],
        [r(x + w), r(y)],
        [r(x + w + dx), r(y + dy)],
        [r(x + dx), r(y + dy)],
    ]
        .map((p) => p.join(","))
        .join(" ");

    // Front face (the base rectangle)
    const frontPts = [
        [r(x), r(y)],
        [r(x + w), r(y)],
        [r(x + w), r(y + h)],
        [r(x), r(y + h)],
    ]
        .map((p) => p.join(","))
        .join(" ");

    // Right face
    const rightPts = [
        [r(x + w), r(y)],
        [r(x + w + dx), r(y + dy)],
        [r(x + w + dx), r(y + h + dy)],
        [r(x + w), r(y + h)],
    ]
        .map((p) => p.join(","))
        .join(" ");

    return (
        <g
            opacity={opacity}
            filter={filterId ? `url(#${filterId})` : undefined}
            className={className}
        >
            <polygon points={rightPts} fill={rightFill} stroke={accent} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <polygon points={frontPts} fill={frontFill} stroke={accent} strokeWidth={strokeWidth} strokeLinejoin="round" />
            <polygon points={topPts} fill={topFill} stroke={accent} strokeWidth={strokeWidth} strokeLinejoin="round" />

            {label && (
                <text
                    x={r(x + w / 2)}
                    y={r(y + h / 2 + (sublabel ? -2 : 3))}
                    textAnchor="middle"
                    fill={inkLabel}
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3 }}
                >
                    {label}
                </text>
            )}
            {sublabel && (
                <text
                    x={r(x + w / 2)}
                    y={r(y + h / 2 + 8)}
                    textAnchor="middle"
                    fill={accent}
                    style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.5, textTransform: "uppercase" }}
                >
                    {sublabel}
                </text>
            )}
        </g>
    );
};

/**
 * A small flat circle in the same isometric world — used for "pins" /
 * "nodes" / "LEDs" sprinkled across the diagrams.
 */
export interface IsoNodeProps {
    cx: number;
    cy: number;
    r?: number;
    accent: string;
    filled?: boolean;
    label?: string;
    pulseKey?: string; // unique key per pulse animation
}

export const IsoNode: React.FC<IsoNodeProps> = ({
    cx,
    cy,
    r = 2.5,
    accent,
    filled = true,
    label,
}) => (
    <g>
        <circle
            cx={cx}
            cy={cy}
            r={r}
            fill={filled ? accent : "#ffffff"}
            stroke={accent}
            strokeWidth={1}
        />
        {label && (
            <text
                x={cx}
                y={cy - r - 3}
                textAnchor="middle"
                fill={accent}
                style={{ fontSize: 6, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 0.3, textTransform: "uppercase" }}
            >
                {label}
            </text>
        )}
    </g>
);

/**
 * A flat connector line in the diagram's plane. Color follows the
 * accent. Animated by parent via framer-motion's `pathLength`.
 */
export const IsoLink: React.FC<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    accent: string;
    strokeWidth?: number;
    dashed?: boolean;
}> = ({ x1, y1, x2, y2, accent, strokeWidth = 1, dashed }) => (
    <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={accent}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "3 3" : undefined}
        opacity={0.6}
    />
);

/**
 * Standard diagram frame: viewBox 0 0 480 360, hairline outer border,
 * a small accent "stage label" tag in the top-left corner. All 9 stage
 * diagrams render inside this frame so the FLIP morph can interpolate
 * the bounding box smoothly.
 */
export interface DiagramFrameProps {
    accent: string;
    stage: number;
    title: string;
    children: React.ReactNode;
    width?: number;
    height?: number;
    filterId: string;
}

export const DiagramFrame: React.FC<DiagramFrameProps> = ({
    accent,
    stage,
    title,
    children,
    width = 480,
    height = 360,
    filterId,
}) => {
    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-full"
            role="img"
            aria-label={`Stage ${stage}: ${title}`}
        >
            <Iso3DFilter id={filterId} intensity={1.1} />

            {/* Hairline frame */}
            <rect
                x={0.5}
                y={0.5}
                width={width - 1}
                height={height - 1}
                fill="#ffffff"
                stroke="#e4e2dd"
                strokeWidth={1}
                rx={4}
            />

            {/* Soft accent corner glow — only in the 3D top-left corner */}
            <polygon
                points={`0,0 ${width * 0.35},0 0,${height * 0.35}`}
                fill={accent}
                opacity={0.04}
            />

            {/* Stage tag (top-left, mono) */}
            <g>
                <rect
                    x={12}
                    y={12}
                    width={120}
                    height={20}
                    fill={accent}
                    rx={2}
                />
                <text
                    x={20}
                    y={25}
                    fill="#ffffff"
                    style={{ fontSize: 8, fontWeight: 700, fontFamily: "var(--font-mono), monospace", letterSpacing: 1, textTransform: "uppercase" }}
                >
                    STAGE {String(stage).padStart(2, "0")} / {title}
                </text>
            </g>

            {/* Coordinate grid hairline (very subtle) */}
            <g opacity={0.06}>
                {Array.from({ length: Math.floor(width / 40) }).map((_, i) => (
                    <line
                        key={`v-${i}`}
                        x1={i * 40 + 40}
                        y1={40}
                        x2={i * 40 + 40}
                        y2={height - 20}
                        stroke="#16181a"
                        strokeWidth={0.5}
                    />
                ))}
                {Array.from({ length: Math.floor(height / 40) }).map((_, i) => (
                    <line
                        key={`h-${i}`}
                        x1={20}
                        y1={i * 40 + 60}
                        x2={width - 20}
                        y2={i * 40 + 60}
                        stroke="#16181a"
                        strokeWidth={0.5}
                    />
                ))}
            </g>

            {children}
        </svg>
    );
};
