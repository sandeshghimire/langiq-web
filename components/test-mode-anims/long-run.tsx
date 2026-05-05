"use client";
import { useEffect, useRef } from "react";

export function LongRunAnim() {
    const barRef = useRef<SVGRectElement>(null);
    const animRef = useRef<number>(0);
    const startRef = useRef<number | null>(null);
    const CYCLE = 4500;

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const bar = barRef.current;
        if (!bar) return;

        const animate = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = (ts - startRef.current) % CYCLE;
            const t = elapsed / CYCLE;

            let progress: number;
            if (t < 0.8) {
                progress = t / 0.8; // fill 0→1 over 80% of cycle
            } else {
                progress = 1 - (t - 0.8) / 0.2; // quick fade back
            }

            const maxWidth = 64;
            bar.setAttribute("width", String(maxWidth * progress));
            bar.setAttribute("opacity", t > 0.82 ? String(1 - (t - 0.82) / 0.18) : "1");

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
            <defs>
                <filter id="glow-longrun">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            {/* Track */}
            <rect x="8" y="36" width="64" height="8" rx="2"
                fill="rgba(0,217,192,0.1)" stroke="rgba(0,217,192,0.3)" strokeWidth="1" />
            {/* Fill bar */}
            <rect ref={barRef} x="8" y="36" width="0" height="8" rx="2"
                fill="#00D9C0" filter="url(#glow-longrun)" opacity="0" />
            {/* Percentage label */}
            <text x="40" y="60" fill="var(--accent)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.12em" textAnchor="middle"
                opacity="0.6">
                LONGRUN
            </text>
        </svg>
    );
}
