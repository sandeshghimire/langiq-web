"use client";
import { useEffect, useRef } from "react";

export function EventAnim() {
    const spikesRef = useRef<SVGGElement>(null);
    const animRef = useRef<number>(0);
    const startRef = useRef<number | null>(null);
    const nextSpikeRef = useRef<number>(800 + Math.random() * 1200);
    const spikeAgeRef = useRef<number>(-1);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const g = spikesRef.current;
        if (!g) return;

        const animate = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = ts - startRef.current;

            const spike = g.querySelector<SVGLineElement>("#evt-spike");

            if (elapsed > nextSpikeRef.current) {
                spikeAgeRef.current = elapsed;
                nextSpikeRef.current = elapsed + 800 + Math.random() * 1200;
            }

            if (spike) {
                if (spikeAgeRef.current > 0) {
                    const age = elapsed - spikeAgeRef.current;
                    if (age < 300) {
                        const opacity = age < 150 ? age / 150 : 1 - (age - 150) / 150;
                        spike.setAttribute("opacity", String(opacity));
                    } else {
                        spike.setAttribute("opacity", "0");
                    }
                } else {
                    spike.setAttribute("opacity", "0");
                }
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
            <defs>
                <filter id="glow-event">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            {/* Flat baseline */}
            <line x1="4" y1="48" x2="76" y2="48" stroke="rgba(0,217,192,0.3)" strokeWidth="1" />
            {/* Spike */}
            <g ref={spikesRef}>
                <line
                    id="evt-spike"
                    x1="40" y1="48" x2="40" y2="16"
                    stroke="#00D9C0"
                    strokeWidth="2"
                    filter="url(#glow-event)"
                    opacity="0"
                />
                <line
                    x1="36" y1="20" x2="40" y2="16"
                    stroke="#00D9C0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    id="evt-spike"
                    opacity="0"
                />
            </g>
            {/* Baseline dots to show it's active */}
            <circle cx="20" cy="48" r="1.5" fill="#00D9C0" opacity="0.4" />
            <circle cx="60" cy="48" r="1.5" fill="#00D9C0" opacity="0.4" />
        </svg>
    );
}
