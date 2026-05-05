"use client";
import { useEffect, useRef } from "react";

export function OneShotAnim() {
    const svgRef = useRef<SVGSVGElement>(null);
    const animRef = useRef<number>(0);
    const startRef = useRef<number | null>(null);
    const CYCLE = 2800;

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const svg = svgRef.current;
        if (!svg) return;

        const animate = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = (ts - startRef.current) % CYCLE;
            const t = elapsed / CYCLE;

            const dot = svg.getElementById("os-dot") as SVGCircleElement | null;
            const check = svg.getElementById("os-check") as SVGPathElement | null;
            const ring1 = svg.getElementById("os-ring1") as SVGCircleElement | null;
            const ring2 = svg.getElementById("os-ring2") as SVGCircleElement | null;
            const statusLabel = svg.getElementById("os-status") as SVGTextElement | null;
            const trail = svg.getElementById("os-trail") as SVGPathElement | null;

            if (t < 0.35) {
                // Dot travels left → center with cubic ease-out + trail
                const p = t / 0.35;
                const ease = 1 - Math.pow(1 - p, 3);
                const x = 8 + ease * 32;
                if (dot) { dot.setAttribute("cx", String(x)); dot.setAttribute("opacity", "1"); }
                if (trail) { trail.setAttribute("opacity", String(0.35 * ease)); trail.setAttribute("d", `M8,40 L${x},40`); }
                if (check) check.setAttribute("opacity", "0");
                if (ring1) { ring1.setAttribute("r", "0"); ring1.setAttribute("opacity", "0"); }
                if (ring2) { ring2.setAttribute("r", "0"); ring2.setAttribute("opacity", "0"); }
                if (statusLabel) statusLabel.setAttribute("opacity", "0");
            } else if (t < 0.55) {
                // Impact: dot disappears, rings expand, check draws
                const p = (t - 0.35) / 0.20;
                if (dot) dot.setAttribute("opacity", "0");
                if (trail) trail.setAttribute("opacity", "0");
                if (ring1) { ring1.setAttribute("r", String(4 + p * 18)); ring1.setAttribute("opacity", String(0.85 * (1 - p))); }
                if (ring2) { ring2.setAttribute("r", String(4 + p * 28)); ring2.setAttribute("opacity", String(0.4 * (1 - p))); }
                if (check) { check.setAttribute("opacity", "1"); check.setAttribute("stroke-dashoffset", String(30 * (1 - p))); }
                if (statusLabel) statusLabel.setAttribute("opacity", "0");
            } else if (t < 0.80) {
                // Hold — check stays, PASS label fades in
                const p = (t - 0.55) / 0.25;
                if (dot) dot.setAttribute("opacity", "0");
                if (trail) trail.setAttribute("opacity", "0");
                if (ring1) { ring1.setAttribute("r", "22"); ring1.setAttribute("opacity", "0"); }
                if (ring2) { ring2.setAttribute("r", "32"); ring2.setAttribute("opacity", "0"); }
                if (check) { check.setAttribute("opacity", "1"); check.setAttribute("stroke-dashoffset", "0"); }
                if (statusLabel) statusLabel.setAttribute("opacity", String(Math.min(1, p * 3)));
            } else {
                // Fade everything out
                const p = (t - 0.80) / 0.20;
                const fade = 1 - p;
                if (dot) dot.setAttribute("opacity", "0");
                if (trail) trail.setAttribute("opacity", "0");
                if (ring1) { ring1.setAttribute("opacity", "0"); }
                if (ring2) { ring2.setAttribute("opacity", "0"); }
                if (check) check.setAttribute("opacity", String(fade));
                if (statusLabel) statusLabel.setAttribute("opacity", String(fade));
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg ref={svgRef} viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
            <defs>
                <filter id="glow-os">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            {/* Rail with tick marks */}
            <line x1="4" y1="40" x2="76" y2="40" stroke="rgba(0,217,192,0.15)" strokeWidth="1" />
            {[8, 24, 40, 56, 72].map(x => (
                <line key={x} x1={x} y1="37" x2={x} y2="43" stroke="rgba(0,217,192,0.22)" strokeWidth="0.75" />
            ))}
            {/* Trail */}
            <path id="os-trail" d="M8,40 L8,40" fill="none" stroke="#00D9C0" strokeWidth="2.5"
                strokeLinecap="round" opacity="0" filter="url(#glow-os)" />
            {/* Impact rings */}
            <circle id="os-ring1" cx="40" cy="40" r="0" fill="none" stroke="#00D9C0" strokeWidth="1" opacity="0" />
            <circle id="os-ring2" cx="40" cy="40" r="0" fill="none" stroke="#00D9C0" strokeWidth="0.5" opacity="0" />
            {/* Moving dot */}
            <circle id="os-dot" cx="8" cy="40" r="4" fill="#00D9C0" filter="url(#glow-os)" opacity="0" />
            {/* Checkmark */}
            <path id="os-check" d="M26,40 L36,50 L54,30" fill="none" stroke="#00D9C0"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="30" strokeDashoffset="30" filter="url(#glow-os)" opacity="0" />
            {/* PASS label */}
            <text id="os-status" x="40" y="68" textAnchor="middle" fill="#00D9C0"
                fontSize="7" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em" opacity="0">
                PASS
            </text>
        </svg>
    );
}
