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
    // IV&V Platform → Brain Card (gRPC)
    { progress: 0, speed: 0.003, color: "#00D9C0", fromX: 550, fromY: 95, toX: 550, toY: 160, id: "hd0" },
    { progress: 0.5, speed: 0.003, color: "#00D9C0", fromX: 550, fromY: 95, toX: 550, toY: 160, id: "hd1" },
    // Brain Card → DIO Slot
    { progress: 0, speed: 0.004, color: "#00D9C0", fromX: 460, fromY: 230, toX: 210, toY: 360, id: "hd2" },
    { progress: 0.5, speed: 0.004, color: "#00D9C0", fromX: 460, fromY: 230, toX: 210, toY: 360, id: "hd3" },
    // Brain Card → AIO Slot
    { progress: 0, speed: 0.005, color: "#C9A800", fromX: 490, fromY: 235, toX: 370, toY: 360, id: "hd4" },
    { progress: 0.4, speed: 0.005, color: "#C9A800", fromX: 490, fromY: 235, toX: 370, toY: 360, id: "hd5" },
    // Brain Card → CAN Slot
    { progress: 0, speed: 0.004, color: "#00D9C0", fromX: 540, fromY: 240, toX: 530, toY: 360, id: "hd6" },
    { progress: 0.6, speed: 0.004, color: "#00D9C0", fromX: 540, fromY: 240, toX: 530, toY: 360, id: "hd7" },
    // Brain Card → Adapter Slot
    { progress: 0, speed: 0.003, color: "#C9A800", fromX: 580, fromY: 235, toX: 690, toY: 360, id: "hd8" },
    { progress: 0.3, speed: 0.003, color: "#C9A800", fromX: 580, fromY: 235, toX: 690, toY: 360, id: "hd9" },
    // Brain Card → Power Slot
    { progress: 0, speed: 0.006, color: "#00D9C0", fromX: 610, fromY: 230, toX: 850, toY: 360, id: "hd10" },
    { progress: 0.7, speed: 0.006, color: "#00D9C0", fromX: 610, fromY: 230, toX: 850, toY: 360, id: "hd11" },
    // Adapter → DUT
    { progress: 0, speed: 0.004, color: "#C9A800", fromX: 690, fromY: 420, toX: 690, toY: 490, id: "hd12" },
    { progress: 0.5, speed: 0.004, color: "#C9A800", fromX: 690, fromY: 420, toX: 690, toY: 490, id: "hd13" },
];

export function HilArchitectureDiagram() {
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

    const BOX = {
        fill: "var(--bg-surface)",
        stroke: "rgba(255,255,255,0.08)",
        rx: "3",
    };
    const ACCENT_BOX = {
        fill: "rgba(0,217,192,0.06)",
        stroke: "rgba(0,217,192,0.25)",
        rx: "3",
    };
    const LABEL_MONO = {
        fontFamily: "var(--font-jetbrains, monospace)",
        fontSize: "9",
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
    };
    const LABEL_SERIF = {
        fontFamily: "var(--font-instrument-serif, serif)",
        fontStyle: "italic",
        fontSize: "15",
    };

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 1100 560"
            width="100%"
            style={{ display: "block", background: "var(--bg-surface)", borderRadius: "4px" }}
            role="img"
            aria-labelledby="hil-arch-title hil-arch-desc"
        >
            <title id="hil-arch-title">Siliconcentric HIL — System Architecture</title>
            <desc id="hil-arch-desc">
                HIL chassis with K26 brain card (APU + RPU + FPGA PL), slot backplane with six card slots (DIO, AIO,
                CAN, Adapter, Power, Extension), and platform adapter connecting to the device under test.
            </desc>

            {/* ─── Layer 0: IV&V Platform ─── */}
            <rect x="340" y="20" width="420" height="64" {...BOX} />
            <text x="550" y="44" textAnchor="middle" fill="#94A3B8" style={LABEL_MONO}>IV&amp;V Platform</text>
            <text x="550" y="62" textAnchor="middle" fill="#F1F5F9" style={LABEL_SERIF}>gRPC / REST / PTP</text>

            {/* Connector IV&V → Brain */}
            <line x1="550" y1="84" x2="550" y2="158" stroke="#00D9C0" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="550" cy="95" r="3" fill="#00D9C0" id="hd0" />
            <circle cx="550" cy="95" r="3" fill="#00D9C0" id="hd1" />

            {/* ─── Layer 1: HIL Chassis outer ─── */}
            <rect x="60" y="150" width="980" height="370" rx="4" fill="rgba(14,18,24,0.5)" stroke="rgba(0,217,192,0.18)" strokeWidth="1" />
            <text x="80" y="172" fill="#475569" style={{ ...LABEL_MONO, fontSize: "8" }}>HIL CHASSIS</text>

            {/* ─── Layer 2: Brain Card ─── */}
            <rect x="340" y="158" width="420" height="82" {...ACCENT_BOX} />
            <text x="360" y="177" fill="#00D9C0" style={LABEL_MONO}>K26 BRAIN CARD</text>

            {/* APU sub-box */}
            <rect x="360" y="184" width="110" height="44" rx="2" fill="rgba(0,217,192,0.05)" stroke="rgba(0,217,192,0.2)" />
            <text x="415" y="200" textAnchor="middle" fill="#94A3B8" style={{ ...LABEL_MONO, fontSize: "8" }}>APU</text>
            <text x="415" y="214" textAnchor="middle" fill="#F1F5F9" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>Yocto · IV&amp;V</text>
            <text x="415" y="225" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "8" }}>gRPC server</text>

            {/* RPU sub-box */}
            <rect x="490" y="184" width="110" height="44" rx="2" fill="rgba(201,168,0,0.05)" stroke="rgba(201,168,0,0.2)" />
            <text x="545" y="200" textAnchor="middle" fill="#C9A800" style={{ ...LABEL_MONO, fontSize: "8" }}>RPU</text>
            <text x="545" y="214" textAnchor="middle" fill="#F1F5F9" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>FreeRTOS</text>
            <text x="545" y="225" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "8" }}>Watchdog</text>

            {/* PL sub-box */}
            <rect x="620" y="184" width="110" height="44" rx="2" fill="rgba(0,217,192,0.05)" stroke="rgba(0,217,192,0.2)" />
            <text x="675" y="200" textAnchor="middle" fill="#94A3B8" style={{ ...LABEL_MONO, fontSize: "8" }}>PL (FPGA)</text>
            <text x="675" y="214" textAnchor="middle" fill="#F1F5F9" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>I/O soft-IP</text>
            <text x="675" y="225" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "8" }}>Timing · PTP</text>

            {/* HIL-Bus backplane line */}
            <line x1="90" y1="290" x2="1010" y2="290" stroke="rgba(0,217,192,0.3)" strokeWidth="1.5" />
            <text x="550" y="286" textAnchor="middle" fill="#475569" style={{ ...LABEL_MONO, fontSize: "7" }}>HIL-BUS BACKPLANE</text>

            {/* Connector Brain → Bus */}
            <line x1="460" y1="228" x2="460" y2="290" stroke="#00D9C0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35" />
            <line x1="550" y1="228" x2="550" y2="290" stroke="#C9A800" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35" />
            <line x1="640" y1="228" x2="640" y2="290" stroke="#00D9C0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35" />

            {/* Moving dots Brain → Slots */}
            <circle cx="460" cy="250" r="2.5" fill="#00D9C0" id="hd2" />
            <circle cx="460" cy="250" r="2.5" fill="#00D9C0" id="hd3" />
            <circle cx="490" cy="250" r="2.5" fill="#C9A800" id="hd4" />
            <circle cx="490" cy="250" r="2.5" fill="#C9A800" id="hd5" />
            <circle cx="540" cy="250" r="2.5" fill="#00D9C0" id="hd6" />
            <circle cx="540" cy="250" r="2.5" fill="#00D9C0" id="hd7" />
            <circle cx="580" cy="250" r="2.5" fill="#C9A800" id="hd8" />
            <circle cx="580" cy="250" r="2.5" fill="#C9A800" id="hd9" />
            <circle cx="610" cy="250" r="2.5" fill="#00D9C0" id="hd10" />
            <circle cx="610" cy="250" r="2.5" fill="#00D9C0" id="hd11" />

            {/* ─── Layer 3: Slot Cards ─── */}
            {/* DIO Card */}
            <rect x="90" y="300" width="150" height="90" {...BOX} />
            <text x="165" y="318" textAnchor="middle" fill="#00D9C0" style={{ ...LABEL_MONO, fontSize: "8" }}>SLOT 01</text>
            <text x="165" y="333" textAnchor="middle" fill="#F1F5F9" style={LABEL_SERIF}>DIO</text>
            <text x="165" y="348" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>32 in · 32 out</text>
            <text x="165" y="362" textAnchor="middle" fill="#475569" style={{ ...LABEL_MONO, fontSize: "7" }}>fault inject</text>
            <line x1="165" y1="290" x2="165" y2="300" stroke="#00D9C0" strokeWidth="0.8" opacity="0.5" />

            {/* AIO Card */}
            <rect x="260" y="300" width="150" height="90" {...BOX} />
            <text x="335" y="318" textAnchor="middle" fill="#C9A800" style={{ ...LABEL_MONO, fontSize: "8" }}>SLOT 02</text>
            <text x="335" y="333" textAnchor="middle" fill="#F1F5F9" style={LABEL_SERIF}>AIO</text>
            <text x="335" y="348" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>16-ch ADC · 8-ch DAC</text>
            <text x="335" y="362" textAnchor="middle" fill="#475569" style={{ ...LABEL_MONO, fontSize: "7" }}>calibrated · ±10V</text>
            <line x1="335" y1="290" x2="335" y2="300" stroke="#C9A800" strokeWidth="0.8" opacity="0.5" />

            {/* CAN Card */}
            <rect x="430" y="300" width="150" height="90" {...BOX} />
            <text x="505" y="318" textAnchor="middle" fill="#00D9C0" style={{ ...LABEL_MONO, fontSize: "8" }}>SLOT 03</text>
            <text x="505" y="333" textAnchor="middle" fill="#F1F5F9" style={LABEL_SERIF}>CAN</text>
            <text x="505" y="348" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>4× CAN-FD</text>
            <text x="505" y="362" textAnchor="middle" fill="#475569" style={{ ...LABEL_MONO, fontSize: "7" }}>12 virtual nodes</text>
            <line x1="505" y1="290" x2="505" y2="300" stroke="#00D9C0" strokeWidth="0.8" opacity="0.5" />

            {/* Adapter Card */}
            <rect x="600" y="300" width="180" height="90" fill="rgba(201,168,0,0.06)" stroke="rgba(201,168,0,0.25)" rx="3" />
            <text x="690" y="318" textAnchor="middle" fill="#C9A800" style={{ ...LABEL_MONO, fontSize: "8" }}>SLOT 04 — ADAPTER</text>
            <text x="690" y="333" textAnchor="middle" fill="#F1F5F9" style={LABEL_SERIF}>Platform Adapter</text>
            <text x="690" y="348" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>DUT-specific PCB</text>
            <text x="690" y="362" textAnchor="middle" fill="#475569" style={{ ...LABEL_MONO, fontSize: "7" }}>power · connector · signal</text>
            <line x1="690" y1="290" x2="690" y2="300" stroke="#C9A800" strokeWidth="0.8" opacity="0.5" />

            {/* Power Card */}
            <rect x="800" y="300" width="140" height="90" {...BOX} />
            <text x="870" y="318" textAnchor="middle" fill="#00D9C0" style={{ ...LABEL_MONO, fontSize: "8" }}>SLOT 05</text>
            <text x="870" y="333" textAnchor="middle" fill="#F1F5F9" style={LABEL_SERIF}>Power</text>
            <text x="870" y="348" textAnchor="middle" fill="#94A3B8" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "9" }}>1.0–5.5V · 5A</text>
            <text x="870" y="362" textAnchor="middle" fill="#475569" style={{ ...LABEL_MONO, fontSize: "7" }}>OCP · OVP · brown-out</text>
            <line x1="870" y1="290" x2="870" y2="300" stroke="#00D9C0" strokeWidth="0.8" opacity="0.5" />

            {/* ─── Layer 4: DUT ─── */}
            <rect x="570" y="430" width="240" height="60" rx="3" fill="rgba(201,168,0,0.08)" stroke="rgba(201,168,0,0.3)" />
            <text x="690" y="452" textAnchor="middle" fill="#C9A800" style={LABEL_MONO}>DEVICE UNDER TEST</text>
            <text x="690" y="472" textAnchor="middle" fill="#F1F5F9" style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "11" }}>Arches · Acadia · Zion · Pinnacle · Joshua · Sequoia</text>

            {/* Adapter → DUT connector */}
            <line x1="690" y1="390" x2="690" y2="430" stroke="#C9A800" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
            <circle cx="690" cy="410" r="3" fill="#C9A800" id="hd12" />
            <circle cx="690" cy="410" r="3" fill="#C9A800" id="hd13" />

            {/* DUT signal arrows from other slots */}
            <line x1="165" y1="390" x2="570" y2="450" stroke="#00D9C0" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.2" />
            <line x1="335" y1="390" x2="575" y2="448" stroke="#C9A800" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.2" />
            <line x1="505" y1="390" x2="590" y2="440" stroke="#00D9C0" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.2" />

            {/* Legend */}
            <circle cx="90" cy="530" r="4" fill="#00D9C0" />
            <text x="100" y="534" fill="#475569" style={{ ...LABEL_MONO, fontSize: "8" }}>gRPC / FPGA data</text>
            <circle cx="260" cy="530" r="4" fill="#C9A800" />
            <text x="270" y="534" fill="#475569" style={{ ...LABEL_MONO, fontSize: "8" }}>power / analog / DUT signals</text>
        </svg>
    );
}
