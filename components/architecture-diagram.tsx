"use client";
import { useEffect, useRef } from "react";

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

interface Dot {
    progress: number;
    speed: number;
    color: string;
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    id: string;
}

const DOTS: Dot[] = [
    // UI → Server (REST/SSE)
    { progress: 0, speed: 0.003, color: "#00D9C0", fromX: 550, fromY: 80, toX: 550, toY: 185, id: "d0" },
    { progress: 0.5, speed: 0.003, color: "#00D9C0", fromX: 550, fromY: 80, toX: 550, toY: 185, id: "d1" },
    // Server → CM5 (gRPC)
    { progress: 0, speed: 0.004, color: "#00D9C0", fromX: 360, fromY: 230, toX: 260, toY: 335, id: "d2" },
    { progress: 0.4, speed: 0.004, color: "#00D9C0", fromX: 360, fromY: 230, toX: 260, toY: 335, id: "d3" },
    { progress: 0.8, speed: 0.004, color: "#00D9C0", fromX: 360, fromY: 230, toX: 260, toY: 335, id: "d4" },
    // CM5 → Pico (SPI/FB)
    { progress: 0, speed: 0.005, color: "#FFB547", fromX: 310, fromY: 370, toX: 490, toY: 370, id: "d5" },
    { progress: 0.5, speed: 0.005, color: "#FFB547", fromX: 310, fromY: 370, toX: 490, toY: 370, id: "d6" },
    // Server → SQLite
    { progress: 0, speed: 0.003, color: "#00D9C0", fromX: 430, fromY: 215, toX: 430, toY: 230, id: "d7" },
];

export function ArchitectureDiagram() {
    const svgRef = useRef<SVGSVGElement>(null);
    const animRef = useRef<number>(0);
    const stateRef = useRef(DOTS.map((d) => ({ ...d })));

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const svg = svgRef.current;
        if (!svg) return;

        const animate = () => {
            stateRef.current.forEach((dot) => {
                dot.progress = (dot.progress + dot.speed) % 1;
                const t = dot.progress;
                const x = lerp(dot.fromX, dot.toX, t);
                const y = lerp(dot.fromY, dot.toY, t);
                const opacity = Math.sin(t * Math.PI);
                const el = svg.getElementById(dot.id) as SVGCircleElement;
                if (el) {
                    el.setAttribute("cx", String(x));
                    el.setAttribute("cy", String(y));
                    el.setAttribute("opacity", String(opacity));
                }
            });
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 1100 540"
            width="100%"
            style={{ display: "block", background: "var(--bg-surface)", borderRadius: "4px" }}
            role="img"
            aria-labelledby="arch-title arch-desc"
        >
            <title id="arch-title">IV&amp;V Framework Architecture — Platform-Independent</title>
            <desc id="arch-desc">
                Four-lane system architecture: Operator (Web UI), IV&amp;V Framework (Server, Evidence Store, SSE),
                HAL Interface (App Processor &amp; optional RT Co-Processor clients), and Your Hardware (any peripherals).
            </desc>

            <defs>
                <filter id="glow-arch" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="glow-arch-amber" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Corner tick marks */}
            <path d="M10,22 L10,10 L22,10" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
            <path d="M1078,10 L1090,10 L1090,22" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
            <path d="M10,518 L10,530 L22,530" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
            <path d="M1078,530 L1090,530 L1090,518" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />

            {/* Header labels */}
            <text x="20" y="24" fill="var(--accent)" fontSize="9"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">
                IV&amp;V FRAMEWORK :: PLATFORM-INDEPENDENT
            </text>
            <text x="1080" y="24" fill="var(--text-tertiary)" fontSize="9"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.12em" textAnchor="end">
                rev 1.0 / 2026
            </text>

            {/* ── Lane separators ── */}
            {/* Lane 1: OPERATOR (y 35–130) */}
            <rect x="30" y="35" width="1040" height="95" rx="2"
                fill="rgba(20,26,34,0.5)" stroke="var(--border)" strokeWidth="1" />
            <text x="44" y="57" fill="var(--text-tertiary)" fontSize="9"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">OPERATOR</text>

            {/* Lane 2: CONTROL PLANE (y 145–260) */}
            <rect x="30" y="145" width="1040" height="115" rx="2"
                fill="rgba(20,26,34,0.5)" stroke="var(--border)" strokeWidth="1" />
            <text x="44" y="167" fill="var(--text-tertiary)" fontSize="9"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">IV&amp;V FRAMEWORK</text>

            {/* Lane 3: EDGE / DEVICE (y 275–400) */}
            <rect x="30" y="275" width="1040" height="125" rx="2"
                fill="rgba(20,26,34,0.5)" stroke="var(--border)" strokeWidth="1" />
            <text x="44" y="297" fill="var(--text-tertiary)" fontSize="9"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">HAL INTERFACE — CUSTOMIZED TO YOUR HARDWARE BY US</text>

            {/* Lane 4: HARDWARE (y 415–525) */}
            <rect x="30" y="415" width="1040" height="110" rx="2"
                fill="rgba(14,18,24,0.8)" stroke="var(--border)" strokeWidth="1" />
            <text x="44" y="437" fill="var(--text-tertiary)" fontSize="9"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">YOUR HARDWARE (ANY PLATFORM)</text>

            {/* ══ LANE 1: Web UI box ══ */}
            <rect x="450" y="52" width="200" height="62" rx="2"
                fill="var(--bg-elev)" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="550" y="78" fill="var(--accent)" fontSize="10"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" textAnchor="middle" fontWeight="500">
                WEB UI
            </text>
            <text x="550" y="96" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" textAnchor="middle">
                Next.js · shadcn · SSE
            </text>

            {/* ══ LANE 2: Server + subsystems ══ */}
            {/* Main server box */}
            <rect x="270" y="170" width="560" height="75" rx="2"
                fill="var(--bg-elev)" stroke="var(--border-strong)" strokeWidth="1" />
            <text x="302" y="191" fill="var(--text-secondary)" fontSize="9"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.12em">SERVER</text>

            {/* gRPC service sub-box */}
            <rect x="290" y="198" width="120" height="35" rx="1"
                fill="var(--bg-surface)" stroke="rgba(0,217,192,0.3)" strokeWidth="1" />
            <text x="350" y="214" fill="var(--accent)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" textAnchor="middle">gRPC SERVICE</text>
            <text x="350" y="226" fill="var(--text-tertiary)" fontSize="7"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">C++ / protobuf</text>

            {/* Domain layer */}
            <rect x="425" y="198" width="120" height="35" rx="1"
                fill="var(--bg-surface)" stroke="rgba(0,217,192,0.2)" strokeWidth="1" />
            <text x="485" y="214" fill="var(--text-secondary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" textAnchor="middle">DOMAIN</text>
            <text x="485" y="226" fill="var(--text-tertiary)" fontSize="7"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">run orchestration</text>

            {/* SQLite */}
            <rect x="560" y="198" width="120" height="35" rx="1"
                fill="var(--bg-surface)" stroke="rgba(0,217,192,0.2)" strokeWidth="1" />
            <text x="620" y="214" fill="var(--text-secondary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" textAnchor="middle">SQLITE WAL</text>
            <text x="620" y="226" fill="var(--text-tertiary)" fontSize="7"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">evidence store</text>

            {/* REST/SSE */}
            <rect x="695" y="198" width="120" height="35" rx="1"
                fill="var(--bg-surface)" stroke="rgba(0,217,192,0.2)" strokeWidth="1" />
            <text x="755" y="214" fill="var(--text-secondary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" textAnchor="middle">REST / SSE</text>
            <text x="755" y="226" fill="var(--text-tertiary)" fontSize="7"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">operator feed</text>

            {/* ══ LANE 3: Client apps ══ */}
            {/* CM5 client */}
            <rect x="150" y="305" width="160" height="70" rx="2"
                fill="var(--bg-elev)" stroke="var(--border-strong)" strokeWidth="1" />
            <text x="230" y="320" fill="var(--text-primary)" fontSize="10"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.08em" textAnchor="middle">APP PROCESSOR</text>
            <text x="230" y="334" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">any Linux SoC · gRPC stub</text>
            <text x="230" y="348" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">HAL adapter (customized)</text>
            <circle cx="300" cy="320" r="3" fill="var(--accent)" opacity="0.8" />

            {/* FB↔proto translator annotation */}
            <text x="400" y="348" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em" textAnchor="middle"
                fontStyle="italic">
                schema bridge
            </text>

            {/* Pico client */}
            <rect x="490" y="305" width="160" height="70" rx="2"
                fill="var(--bg-elev)" stroke="var(--border-strong)" strokeWidth="1" />
            <text x="570" y="320" fill="var(--text-primary)" fontSize="10"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.08em" textAnchor="middle">RT CO-PROCESSOR</text>
            <text x="570" y="334" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">bare-metal / RTOS (optional)</text>
            <text x="570" y="348" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle">compact transport</text>
            <circle cx="642" cy="320" r="3" fill="var(--warm)" opacity="0.8" />

            {/* ══ LANE 4: Hardware peripherals ══ */}
            {[
                { x: 80, label: "ETH" },
                { x: 165, label: "USB" },
                { x: 250, label: "PCIe" },
                { x: 335, label: "eMMC" },
                { x: 420, label: "CAM / VIDEO" },
                { x: 520, label: "DISPLAY" },
                { x: 625, label: "IMU / SENSOR" },
                { x: 720, label: "TEMP / HUM" },
                { x: 820, label: "ACTUATOR" },
                { x: 920, label: "CUSTOM I/O" },
            ].map(({ x, label }, i) => (
                <g key={label}>
                    <rect
                        x={x - 42}
                        y="445"
                        width="84"
                        height="56"
                        rx="2"
                        fill="var(--bg-deep)"
                        stroke={i < 8 ? "rgba(0,217,192,0.2)" : "rgba(255,181,71,0.2)"}
                        strokeWidth="1"
                    />
                    <text
                        x={x}
                        y="476"
                        fill={i < 8 ? "var(--text-secondary)" : "var(--text-tertiary)"}
                        fontSize="9"
                        fontFamily="var(--font-jetbrains, monospace)"
                        letterSpacing="0.08em"
                        textAnchor="middle"
                    >
                        {label}
                    </text>
                </g>
            ))}

            {/* ── Connection lines between lanes ── */}
            {/* Web UI → Server (REST/SSE) */}
            <line x1="550" y1="114" x2="550" y2="170" stroke="#00D9C0" strokeWidth="1" opacity="0.4" />
            <text x="565" y="148" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.08em">REST / SSE</text>

            {/* Server → CM5 */}
            <line x1="360" y1="245" x2="250" y2="305" stroke="#00D9C0" strokeWidth="1" opacity="0.4" />
            <text x="276" y="283" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.08em">gRPC / proto</text>

            {/* Server → Pico (Wi-Fi / FB, dashed) */}
            <line x1="620" y1="245" x2="570" y2="305" stroke="#00D9C0" strokeWidth="1"
                strokeDasharray="4,3" opacity="0.3" />
            <text x="630" y="280" fill="var(--text-tertiary)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.08em">direct channel</text>

            {/* CM5 → Pico relay */}
            <line x1="310" y1="370" x2="490" y2="370" stroke="var(--warm)" strokeWidth="1" opacity="0.4" />
            <text x="400" y="385" fill="var(--warm)" fontSize="8"
                fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.08em" textAnchor="middle">async bridge (opt.)</text>

            {/* CM5 → peripherals */}
            {[80, 165, 250, 335, 420, 520, 625, 720].map((x, i) => (
                <line key={i} x1="230" y1="375" x2={x} y2="445"
                    stroke="#00D9C0" strokeWidth="0.5" opacity="0.2" />
            ))}

            {/* Pico → peripherals */}
            {[820, 920].map((x, i) => (
                <line key={i} x1="570" y1="375" x2={x} y2="445"
                    stroke="#FFB547" strokeWidth="0.5" opacity="0.2" />
            ))}

            {/* Animated dots */}
            {DOTS.map((dot) => (
                <circle
                    key={dot.id}
                    id={dot.id}
                    cx={dot.fromX}
                    cy={dot.fromY}
                    r="3.5"
                    fill={dot.color}
                    opacity="0"
                    filter={dot.color === "#FFB547" ? "url(#glow-arch-amber)" : "url(#glow-arch)"}
                />
            ))}
        </svg>
    );
}
