"use client";
import { useEffect, useRef } from "react";

const METRICS = [
    { label: "CPU TEMP", color: "#FFB547", cycleSec: 7 },
    { label: "MEM HEALTH", color: "#00D9C0", cycleSec: 9.5 },
    { label: "BUS ERR", color: "#00D9C0", cycleSec: 12 },
];

export function LongRunAnim() {
    const svgRef = useRef<SVGSVGElement>(null);
    const animRef = useRef<number>(0);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const svg = svgRef.current;
        if (!svg) return;

        const animate = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = (ts - startRef.current) / 1000;

            METRICS.forEach((m, i) => {
                const t = (elapsed % m.cycleSec) / m.cycleSec;
                const w = t * 60;

                const bar = svg.getElementById(`lr-bar-${i}`) as SVGRectElement | null;
                const head = svg.getElementById(`lr-head-${i}`) as SVGCircleElement | null;
                const pct = svg.getElementById(`lr-pct-${i}`) as SVGTextElement | null;

                if (bar) bar.setAttribute("width", String(w));
                if (head) {
                    head.setAttribute("cx", String(10 + w));
                    head.setAttribute("opacity", w > 1 ? "0.9" : "0");
                }
                if (pct) pct.textContent = `${Math.round(t * 100)}%`;
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg ref={svgRef} viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
            <defs>
                <filter id="glow-lr">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            {METRICS.map((m, i) => {
                const y = 16 + i * 20;
                return (
                    <g key={m.label}>
                        <text x="10" y={y - 2} fill="rgba(148,163,184,0.5)" fontSize="5"
                            fontFamily="var(--font-jetbrains,monospace)" letterSpacing="0.09em">{m.label}</text>
                        <rect x="10" y={y} width="60" height="5" rx="1.5"
                            fill={`${m.color}18`} stroke={`${m.color}40`} strokeWidth="0.5" />
                        {[0.25, 0.5, 0.75].map(frac => (
                            <line key={frac} x1={10 + frac * 60} y1={y} x2={10 + frac * 60} y2={y + 5}
                                stroke={`${m.color}50`} strokeWidth="0.5" />
                        ))}
                        <rect id={`lr-bar-${i}`} x="10" y={y} width="0" height="5" rx="1.5"
                            fill={m.color} filter="url(#glow-lr)" />
                        <circle id={`lr-head-${i}`} cx="10" cy={y + 2.5} r="3"
                            fill={m.color} filter="url(#glow-lr)" opacity="0" />
                        <text id={`lr-pct-${i}`} x="74" y={y + 5} fill={m.color} fontSize="5"
                            fontFamily="var(--font-jetbrains,monospace)" letterSpacing="0.07em" opacity="0.7">0%</text>
                    </g>
                );
            })}
            <text x="40" y="76" textAnchor="middle" fill="#00D9C0" fontSize="6"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.14em" opacity="0.35">LONGRUN</text>
        </svg>
    );
}
