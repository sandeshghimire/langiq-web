"use client";
import { useEffect, useRef } from "react";

export function OneShotAnim() {
    const circleRef = useRef<SVGCircleElement>(null);
    const checkRef = useRef<SVGPathElement>(null);
    const animRef = useRef<number>(0);
    const startRef = useRef<number | null>(null);
    const CYCLE = 2500;

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const circle = circleRef.current;
        const check = checkRef.current;
        if (!circle || !check) return;

        const animate = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = (ts - startRef.current) % CYCLE;
            const t = elapsed / CYCLE;

            if (t < 0.45) {
                // Move dot from left to center
                const progress = t / 0.45;
                const x = 8 + progress * 32;
                circle.setAttribute("cx", String(x));
                circle.setAttribute("opacity", "1");
                check.setAttribute("opacity", "0");
            } else if (t < 0.65) {
                // Show checkmark, hide dot
                circle.setAttribute("opacity", "0");
                check.setAttribute("opacity", "1");
                const p = (t - 0.45) / 0.2;
                check.setAttribute("stroke-dashoffset", String(30 * (1 - p)));
            } else if (t < 0.85) {
                // Hold
                circle.setAttribute("opacity", "0");
                check.setAttribute("opacity", "1");
                check.setAttribute("stroke-dashoffset", "0");
            } else {
                // Fade out
                const p = (t - 0.85) / 0.15;
                circle.setAttribute("opacity", "0");
                check.setAttribute("opacity", String(1 - p));
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
            <defs>
                <filter id="glow-anim">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            <line x1="4" y1="40" x2="76" y2="40" stroke="rgba(0,217,192,0.2)" strokeWidth="1" />
            <circle ref={circleRef} cx="8" cy="40" r="4" fill="#00D9C0" filter="url(#glow-anim)" opacity="0" />
            <path
                ref={checkRef}
                d="M26,40 L36,50 L54,30"
                fill="none"
                stroke="#00D9C0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                filter="url(#glow-anim)"
                opacity="0"
            />
        </svg>
    );
}
