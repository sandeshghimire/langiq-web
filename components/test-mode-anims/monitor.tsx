"use client";
import { useEffect, useRef } from "react";

const W = 80;
const POINTS = 200;

function getY(i: number, offset: number): number {
    const x = i / POINTS;
    return W / 2 - (
        Math.sin((x * 3 + offset * 0.008) * Math.PI * 2) * 14 +
        Math.sin((x * 7 + offset * 0.014) * Math.PI * 2) * 5 +
        Math.sin((x * 13 + offset * 0.023) * Math.PI * 2) * 2.5
    );
}

export function MonitorAnim() {
    const svgRef = useRef<SVGSVGElement>(null);
    const animRef = useRef<number>(0);
    const frameRef = useRef(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const svg = svgRef.current;
        if (!svg) return;

        const tracePath = svg.getElementById("mon-trace") as SVGPathElement | null;
        const headDot = svg.getElementById("mon-head") as SVGCircleElement | null;
        const sampleText = svg.getElementById("mon-sample") as SVGTextElement | null;

        const animate = () => {
            frameRef.current += 1;
            const offset = frameRef.current;

            let d = "";
            for (let i = 0; i <= POINTS; i++) {
                const x = (i / POINTS) * W;
                const y = getY(i, offset);
                d += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)} `;
            }
            if (tracePath) tracePath.setAttribute("d", d);

            const headY = getY(POINTS, offset);
            if (headDot) {
                headDot.setAttribute("cx", "80");
                headDot.setAttribute("cy", headY.toFixed(2));
            }

            if (sampleText && frameRef.current % 4 === 0) {
                const sample = 1000 + Math.floor(frameRef.current * 3.7);
                sampleText.textContent = String(sample);
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg ref={svgRef} viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" style={{ overflow: "hidden" }}>
            <defs>
                <filter id="glow-mon">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <clipPath id="mon-clip"><rect x="0" y="0" width="80" height="80" /></clipPath>
                <linearGradient id="mon-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" style={{ stopColor: "var(--accent)", stopOpacity: 0.1 }} />
                    <stop offset="70%" style={{ stopColor: "var(--accent)", stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: "var(--accent)", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            {/* Grid */}
            {[20, 40, 60].map(y => (
                <line key={y} x1="0" y1={y} x2="80" y2={y} style={{ stroke: "rgba(var(--accent-rgb), 0.07)" }} strokeWidth="0.5" />
            ))}
            {[20, 40, 60].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="80" style={{ stroke: "rgba(var(--accent-rgb), 0.07)" }} strokeWidth="0.5" />
            ))}
            {/* Trace */}
            <path id="mon-trace" d="" fill="none" stroke="url(#mon-grad)" strokeWidth="1.5"
                clipPath="url(#mon-clip)" filter="url(#glow-mon)" />
            {/* Live head dot */}
            <circle id="mon-head" cx="80" cy="40" r="3" style={{ fill: "var(--accent)" }} filter="url(#glow-mon)" />
            {/* Sample counter */}
            <text id="mon-sample" x="4" y="74" style={{ fill: "var(--accent)" }} fontSize="6"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" opacity="0.45" />
        </svg>
    );
}
