"use client";
import { useEffect, useRef } from "react";

export function MonitorAnim() {
    const pathRef = useRef<SVGPathElement>(null);
    const animRef = useRef<number>(0);
    const offsetRef = useRef(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const path = pathRef.current;
        if (!path) return;

        const animate = () => {
            offsetRef.current = (offsetRef.current + 0.6) % 80;
            if (path) {
                path.style.strokeDashoffset = String(-offsetRef.current);
            }
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    // Generate a sine-wave-like path across 80px wide.
    // Round y to 6 decimal places to ensure SSR and client produce identical strings.
    const points: string[] = [];
    for (let x = 0; x <= 160; x += 4) {
        const y = parseFloat((40 - Math.sin((x / 160) * Math.PI * 4) * 16).toFixed(6));
        points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
    }
    const d = points.join(" ");

    return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true" style={{ overflow: "hidden" }}>
            <defs>
                <filter id="glow-monitor">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <clipPath id="wave-clip">
                    <rect x="0" y="0" width="80" height="80" />
                </clipPath>
            </defs>
            <path
                ref={pathRef}
                d={d}
                fill="none"
                stroke="#00D9C0"
                strokeWidth="2"
                strokeDasharray="4,2"
                clipPath="url(#wave-clip)"
                filter="url(#glow-monitor)"
                opacity="0.9"
            />
        </svg>
    );
}
