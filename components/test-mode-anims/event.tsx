"use client";
import { useEffect, useRef } from "react";

const SPIKE_POSITIONS = [18, 40, 62];
const SPIKE_INTERVALS = [2200, 1700, 2900];

export function EventAnim() {
    const svgRef = useRef<SVGSVGElement>(null);
    const animRef = useRef<number>(0);
    const startRef = useRef<number | null>(null);
    const nextSpikeRef = useRef<number[]>([]);
    const spikeAgeRef = useRef<number[]>(SPIKE_POSITIONS.map(() => -1));

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const svg = svgRef.current;
        if (!svg) return;
        nextSpikeRef.current = SPIKE_POSITIONS.map((_, i) => i * 400 + Math.random() * 600);

        const animate = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = ts - startRef.current;

            SPIKE_POSITIONS.forEach((x, i) => {
                if (elapsed > nextSpikeRef.current[i]) {
                    spikeAgeRef.current[i] = elapsed;
                    nextSpikeRef.current[i] = elapsed + SPIKE_INTERVALS[i] + Math.random() * 400;
                }

                const spikeLine = svg.getElementById(`evt-spike-${i}`) as SVGLineElement | null;
                const ring = svg.getElementById(`evt-ring-${i}`) as SVGCircleElement | null;
                const fill = svg.getElementById(`evt-fill-${i}`) as SVGRectElement | null;

                const age = spikeAgeRef.current[i] >= 0 ? elapsed - spikeAgeRef.current[i] : -1;
                if (age >= 0 && age < 650) {
                    const spikeP = Math.min(age / 180, 1);
                    const fadeP = age > 350 ? (age - 350) / 300 : 0;
                    const opacity = spikeP * (1 - fadeP);
                    const spikeH = spikeP * 30;

                    if (spikeLine) {
                        spikeLine.setAttribute("y1", String(48 - spikeH));
                        spikeLine.setAttribute("opacity", String(opacity));
                    }
                    if (fill) {
                        fill.setAttribute("height", String(spikeH));
                        fill.setAttribute("y", String(48 - spikeH));
                        fill.setAttribute("opacity", String(opacity * 0.2));
                    }
                    if (ring) {
                        const rr = spikeP * 14;
                        ring.setAttribute("r", String(rr));
                        ring.setAttribute("cy", String(48 - spikeH * 0.7));
                        ring.setAttribute("cx", String(x));
                        ring.setAttribute("opacity", String(0.7 * (1 - spikeP)));
                    }
                } else {
                    if (spikeLine) spikeLine.setAttribute("opacity", "0");
                    if (ring) ring.setAttribute("opacity", "0");
                    if (fill) fill.setAttribute("opacity", "0");
                }
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg ref={svgRef} viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
            <defs>
                <filter id="glow-evt">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            {/* Threshold line */}
            <line x1="4" y1="22" x2="76" y2="22" style={{ stroke: "rgba(var(--warm-rgb), 0.3)" }} strokeWidth="0.75" strokeDasharray="3,3" />
            <text x="75" y="20" style={{ fill: "rgba(var(--warm-rgb), 0.5)" }} fontSize="5"
                fontFamily="var(--font-jetbrains,monospace)" textAnchor="end">THR</text>
            {/* Baseline */}
            <line x1="4" y1="48" x2="76" y2="48" style={{ stroke: "rgba(var(--accent-rgb), 0.25)" }} strokeWidth="1" />
            {[10, 30, 50, 70].map(cx => (
                <circle key={cx} cx={cx} cy="48" r="1" style={{ fill: "var(--accent)" }} opacity="0.2" />
            ))}
            {SPIKE_POSITIONS.map((sx, i) => (
                <g key={i}>
                    <rect id={`evt-fill-${i}`} x={sx - 2} y="48" width="4" height="0" style={{ fill: "var(--accent)" }} opacity="0" />
                    <line id={`evt-spike-${i}`} x1={sx} y1="48" x2={sx} y2="48"
                        style={{ stroke: "var(--accent)" }} strokeWidth="2" filter="url(#glow-evt)" opacity="0" />
                    <circle id={`evt-ring-${i}`} cx={sx} cy="48" r="0"
                        fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="1" opacity="0" />
                </g>
            ))}
            <text x="40" y="72" textAnchor="middle" style={{ fill: "var(--accent)" }} fontSize="6"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.14em" opacity="0.4">EVENT</text>
        </svg>
    );
}
