"use client";
import { useEffect, useRef } from "react";

// ── Thermal profile path — computed at module level for SSR/client consistency ──
const CHART_X0 = 196;
const CHART_X1 = 488;
const CHART_Y_BOT = 126; // 60 °C
const CHART_Y_TOP = 70;  // 90 °C

const THERMAL_PTS: Array<{ x: number; y: number }> = [];
for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const temp = parseFloat(
        (68 + t * 18 + Math.sin(t * Math.PI * 5) * 2.5 + Math.sin(t * Math.PI * 12) * 1).toFixed(5)
    );
    const y = parseFloat(
        (CHART_Y_BOT - ((temp - 60) / 30) * (CHART_Y_BOT - CHART_Y_TOP)).toFixed(5)
    );
    const x = parseFloat((CHART_X0 + t * (CHART_X1 - CHART_X0)).toFixed(5));
    THERMAL_PTS.push({ x, y });
}

const THERMAL_LINE = THERMAL_PTS.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
const THERMAL_AREA =
    `${THERMAL_LINE} L${THERMAL_PTS[THERMAL_PTS.length - 1].x},128 L${CHART_X0},128 Z`;

const TEST_RUNS = [
    { label: "BOOT VALIDATION", status: "PASS" as const },
    { label: "PERIPHERAL SCAN", status: "PASS" as const },
    { label: "THERMAL SOAK", status: "RUN" as const },
    { label: "HUMIDITY TEST", status: "QUEUE" as const },
    { label: "ENDURANCE RUN", status: "QUEUE" as const },
];

const COVERAGE = [
    { label: "SENSOR / IMU", pct: 100 },
    { label: "NETWORK", pct: 100 },
    { label: "STORAGE", pct: 74 },
    { label: "CUSTOM I/O", pct: 62 },
];

const LOG_LINES = [
    { time: "12:44:01", level: "PASS" as const, msg: "boot/cold-start — 1.24 s" },
    { time: "12:44:03", level: "PASS" as const, msg: "peripheral/scan — 48 / 48 checks valid" },
    { time: "12:44:05", level: "RUN " as const, msg: "thermal/soak — sample 1847 / est. 28800" },
];

export function HeroDiagram() {
    const svgRef = useRef<SVGSVGElement>(null);
    const animRef = useRef<number>(0);
    const progressRef = useRef(0);
    const sampleRef = useRef(1847);
    const coverageStartRef = useRef(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const svg = svgRef.current;
        if (!svg) return;
        coverageStartRef.current = Date.now();

        const animate = () => {
            progressRef.current = (progressRef.current + 0.0015) % 1;
            const ptIdx = Math.min(
                Math.floor(progressRef.current * THERMAL_PTS.length),
                THERMAL_PTS.length - 1
            );
            const pt = THERMAL_PTS[ptIdx];
            const dot = svg.getElementById("scan-dot") as SVGCircleElement | null;
            if (dot && pt) {
                dot.setAttribute("cx", String(pt.x));
                dot.setAttribute("cy", String(pt.y));
                dot.setAttribute("opacity", "0.9");
            }
            sampleRef.current += 1;
            const ctr = svg.getElementById("sample-ctr") as SVGTextElement | null;
            if (ctr) {
                ctr.textContent = `thermal/soak — sample ${sampleRef.current.toLocaleString()} / est. 28800`;
            }

            // Animate coverage bars filling up over 3 seconds then holding
            const coverageElapsed = (Date.now() - coverageStartRef.current) / 1000;
            const coverageProgress = Math.min(coverageElapsed / 2.5, 1);
            const ease = 1 - Math.pow(1 - coverageProgress, 3);
            COVERAGE.forEach((item, i) => {
                const bar = svg.getElementById(`cov-fill-${i}`) as SVGRectElement | null;
                if (bar) {
                    const BAR_W = 220;
                    const targetW = (BAR_W * item.pct) / 100;
                    bar.setAttribute("width", String(targetW * ease));
                }
            });

            // Scanline sweep
            const scanLine = svg.getElementById("scanline") as SVGRectElement | null;
            if (scanLine) {
                const scanT = (Date.now() / 3000) % 1;
                const scanY = 38 + scanT * 360;
                scanLine.setAttribute("y", String(scanY));
                scanLine.setAttribute("opacity", String(0.06 * Math.sin(scanT * Math.PI)));
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <div style={{ position: "relative" }}>
            {/* Eyebrow labels */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", padding: "0 4px" }}>
                <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>
                    iv&amp;v / dashboard
                </span>
                <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--warm)", display: "inline-block" }} className="pulse-amber" aria-hidden="true" />
                    streaming
                </span>
            </div>

            <svg
                ref={svgRef}
                viewBox="0 0 500 400"
                width="100%"
                style={{ maxWidth: "500px", display: "block" }}
                role="img"
                aria-label="IV&V live dashboard — test execution, thermal monitoring, and evidence capture"
            >
                <defs>
                    <filter id="glow-dash" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="thermal-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00D9C0" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#00D9C0" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="chart-clip">
                        <rect x={CHART_X0} y="68" width={CHART_X1 - CHART_X0} height="60" />
                    </clipPath>
                </defs>

                {/* ── Corner brackets ── */}
                <path d="M6,20 L6,6 L20,6" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6" />
                <path d="M480,6 L494,6 L494,20" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6" />
                <path d="M6,380 L6,394 L20,394" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6" />
                <path d="M480,394 L494,394 L494,380" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6" />

                {/* ── Outer shell ── */}
                <rect x="6" y="6" width="488" height="388" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" rx="2" />

                {/* ── Chrome top bar ── */}
                <rect x="6" y="6" width="488" height="32" fill="var(--bg-elev)" rx="2" />
                <rect x="6" y="28" width="488" height="10" fill="var(--bg-elev)" />
                <line x1="6" y1="38" x2="494" y2="38" stroke="var(--border)" strokeWidth="1" />

                <text x="18" y="27" fill="var(--accent)" fontSize="10" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em" fontWeight="500">IV&amp;V</text>
                <circle cx="64" cy="22" r="3.5" fill="var(--warm)" opacity="0.9" />
                <text x="72" y="27" fill="var(--warm)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em">LIVE</text>
                <text x="250" y="27" fill="var(--text-tertiary)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.11em" textAnchor="middle">INDEPENDENT VALIDATION &amp; VERIFICATION</text>
                <circle cx="460" cy="22" r="3.5" fill="rgba(255,255,255,0.07)" />
                <circle cx="472" cy="22" r="3.5" fill="rgba(255,255,255,0.07)" />
                <circle cx="484" cy="22" r="3.5" fill="rgba(255,255,255,0.07)" />

                {/* ── Panel dividers ── */}
                <line x1="192" y1="38" x2="192" y2="310" stroke="var(--border)" strokeWidth="1" />
                <line x1="192" y1="138" x2="494" y2="138" stroke="var(--border)" strokeWidth="1" />
                <line x1="6" y1="310" x2="494" y2="310" stroke="var(--border)" strokeWidth="1" />

                {/* ════ LEFT PANEL: TEST SUITE ════ */}
                <text x="18" y="57" fill="var(--text-tertiary)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">TEST SUITE</text>
                <line x1="12" y1="62" x2="186" y2="62" stroke="var(--border)" strokeWidth="0.5" />

                {TEST_RUNS.map((run, i) => {
                    const y = 82 + i * 40;
                    const isPass = run.status === "PASS";
                    const isRun = run.status === "RUN";
                    const clr = isPass ? "var(--accent)" : isRun ? "#FFE600" : "var(--text-tertiary)";
                    return (
                        <g key={run.label}>
                            {isRun && <rect x="12" y={y - 10} width="174" height="28" rx="2" fill="rgba(255,230,0,0.06)" />}
                            {isPass && (
                                <>
                                    <circle cx="28" cy={y + 3} r="7.5" fill="none" stroke="#00D9C0" strokeWidth="1" opacity="0.6" />
                                    <path d={`M24,${y + 3} L27,${y + 6.5} L33,${y - 1.5}`} fill="none" stroke="#00D9C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </>
                            )}
                            {isRun && (
                                <>
                                    <circle cx="28" cy={y + 3} r="7.5" fill="none" stroke="#FFE600" strokeWidth="1" />
                                    <circle cx="28" cy={y + 3} r="3.5" fill="#FFE600" opacity="0.85" />
                                </>
                            )}
                            {run.status === "QUEUE" && <circle cx="28" cy={y + 3} r="7.5" fill="none" stroke="var(--border-strong)" strokeWidth="1" opacity="0.35" />}
                            <text x="44" y={y + 8} fill={clr} fontSize="9" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.07em">{run.label}</text>
                            {isPass && <text x="182" y={y + 8} fill="#00D9C0" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.07em" textAnchor="end" opacity="0.7">PASS</text>}
                            {isRun && <text x="182" y={y + 8} fill="#FFE600" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.07em" textAnchor="end">RUN</text>}
                        </g>
                    );
                })}

                <line x1="12" y1="285" x2="186" y2="285" stroke="var(--border)" strokeWidth="0.5" />
                <text x="18" y="299" fill="var(--text-tertiary)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.07em">2 / 5 complete · ETA 14 h 22 m</text>

                {/* ════ RIGHT TOP: THERMAL CHART ════ */}
                <text x="202" y="57" fill="var(--text-tertiary)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">THERMAL PROFILE</text>
                <text x="486" y="57" fill="var(--accent)" fontSize="12" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.06em" textAnchor="end">87.3°C</text>

                <rect x={CHART_X0} y="68" width={CHART_X1 - CHART_X0} height="60" fill="var(--bg-deep)" />
                {[0, 1, 2, 3].map((i) => (
                    <line key={i} x1={CHART_X0} y1={68 + i * 20} x2={CHART_X1} y2={68 + i * 20} stroke="var(--border)" strokeWidth="0.5" />
                ))}
                <text x={CHART_X1 + 4} y={68 + 4} fill="var(--text-tertiary)" fontSize="6" fontFamily="var(--font-jetbrains, monospace)">90°</text>
                <text x={CHART_X1 + 4} y={68 + 24} fill="var(--text-tertiary)" fontSize="6" fontFamily="var(--font-jetbrains, monospace)">80°</text>
                <text x={CHART_X1 + 4} y={68 + 44} fill="var(--text-tertiary)" fontSize="6" fontFamily="var(--font-jetbrains, monospace)">70°</text>
                <text x={CHART_X1 + 4} y={68 + 64} fill="var(--text-tertiary)" fontSize="6" fontFamily="var(--font-jetbrains, monospace)">60°</text>

                <path d={THERMAL_AREA} fill="url(#thermal-grad)" clipPath="url(#chart-clip)" />
                <path d={THERMAL_LINE} fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.9" clipPath="url(#chart-clip)" filter="url(#glow-dash)" />
                <circle id="scan-dot" cx={THERMAL_PTS[0].x} cy={THERMAL_PTS[0].y} r="4" fill="var(--accent)" opacity="0" filter="url(#glow-dash)" />
                {/* Scanline sweep overlay */}
                <rect id="scanline" x="6" y="38" width="488" height="3" fill="white" opacity="0" pointerEvents="none" />

                {/* ════ RIGHT BOTTOM: PERIPHERAL COVERAGE ════ */}
                <text x="202" y="155" fill="var(--text-tertiary)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">PERIPHERAL COVERAGE</text>

                {COVERAGE.map((item, i) => {
                    const BAR_W = 220;
                    const barY = 166 + i * 36;
                    return (
                        <g key={item.label}>
                            <text x="202" y={barY + 10} fill="var(--text-tertiary)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.08em">{item.label}</text>
                            <rect x="202" y={barY + 15} width={BAR_W} height="5" rx="1" fill="var(--bg-deep)" />
                            <rect id={`cov-fill-${i}`} x="202" y={barY + 15} width="0" height="5" rx="1" fill={item.pct === 100 ? "var(--accent)" : "rgba(0,217,192,0.55)"} />
                            <text x={202 + BAR_W + 7} y={barY + 21} fill={item.pct === 100 ? "var(--accent)" : "var(--text-secondary)"} fontSize="8" fontFamily="var(--font-jetbrains, monospace)">{item.pct}%</text>
                        </g>
                    );
                })}

                {/* ════ BOTTOM: EVIDENCE LOG ════ */}
                <text x="18" y="326" fill="var(--text-tertiary)" fontSize="8" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.18em">EVIDENCE LOG</text>
                <line x1="12" y1="331" x2="488" y2="331" stroke="var(--border)" strokeWidth="0.5" />

                {LOG_LINES.map((line, i) => {
                    const ly = 346 + i * 17;
                    const clr = line.level.trim() === "PASS" ? "#00D9C0" : "#FFE600";
                    return (
                        <g key={i}>
                            <text x="18" y={ly} fill="var(--text-tertiary)" fontSize="7.5" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.04em">[{line.time}]</text>
                            <text x="96" y={ly} fill={clr} fontSize="7.5" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.1em">{line.level}</text>
                            {i === 2 ? (
                                <text id="sample-ctr" x="136" y={ly} fill="var(--text-secondary)" fontSize="7.5" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.03em">{line.msg}</text>
                            ) : (
                                <text x="136" y={ly} fill="var(--text-secondary)" fontSize="7.5" fontFamily="var(--font-jetbrains, monospace)" letterSpacing="0.03em">{line.msg}</text>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
