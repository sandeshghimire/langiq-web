"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
    {
        href: "/ivv",
        tag: "IV&V",
        name: "Independent Verification & Validation",
        tagline: "Autonomous evidence-generating test on real silicon.",
        description:
            "Deploy a persistent test agent onto Yocto Linux or FreeRTOS targets. Run one-shot, monitor, event, and long-run modes. Every artefact is signed and traceable to ISO 26262, DO-178C, and IEC 62304.",
        stats: [
            { number: "6", label: "test modes" },
            { number: "4", label: "compliance frameworks" },
            { number: "∞", label: "evidence artefacts" },
        ],
        accent: "#00D9C0",
        accentGlow: "rgba(0,217,192,0.15)",
        border: "rgba(0,217,192,0.25)",
        hoverBorder: "rgba(0,217,192,0.55)",
    },
    {
        href: "/hil",
        tag: "HIL",
        name: "Hardware-in-the-Loop",
        tagline: "Modular, slot-based HIL on Kria K26 silicon.",
        description:
            "Three chassis tiers — Bench, Rack, Cert — with a backplane carrying DIO, AIO, CAN-FD, Power, and DUT-specific adapter cards. First test in minutes, not weeks. Natively connected to IV&V.",
        stats: [
            { number: "3", label: "chassis tiers" },
            { number: "6", label: "platform adapters" },
            { number: "5", label: "extension card types" },
        ],
        accent: "#FFB547",
        accentGlow: "rgba(255,181,71,0.15)",
        border: "rgba(255,181,71,0.25)",
        hoverBorder: "rgba(255,181,71,0.55)",
    },
] as const;

export function ProductChooser() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "var(--bg-deep)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 24px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle grid pattern */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                    pointerEvents: "none",
                }}
            />

            {/* Brand lockup */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "64px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Rotated square mark */}
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "24px",
                            height: "24px",
                            border: "2px solid var(--accent)",
                            transform: "rotate(45deg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                background: "var(--accent)",
                            }}
                        />
                    </div>
                </div>

                <span
                    style={{
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--text-secondary)",
                    }}
                >
                    SILICON-CENTRIC
                </span>

                <h1
                    style={{
                        fontFamily: "var(--font-instrument-serif, serif)",
                        fontStyle: "italic",
                        fontSize: "clamp(28px, 5vw, 48px)",
                        color: "var(--text-primary)",
                        textAlign: "center",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        margin: 0,
                    }}
                >
                    Choose your platform
                </h1>

                <p
                    style={{
                        fontFamily: "var(--font-geist, sans-serif)",
                        fontSize: "15px",
                        color: "var(--text-secondary)",
                        textAlign: "center",
                        maxWidth: "440px",
                        lineHeight: 1.6,
                        margin: 0,
                    }}
                >
                    Two silicon-native test platforms. One for validation evidence, one for hardware-in-the-loop. Built to work together.
                </p>
            </div>

            {/* Product cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                    gap: "24px",
                    width: "100%",
                    maxWidth: "880px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {PRODUCTS.map((p) => (
                    <a
                        key={p.href}
                        href={p.href}
                        onMouseEnter={() => setHovered(p.tag)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            padding: "36px 32px",
                            background: hovered === p.tag ? p.accentGlow : "rgba(14,18,24,0.7)",
                            border: `1px solid ${hovered === p.tag ? p.hoverBorder : p.border}`,
                            borderRadius: "6px",
                            textDecoration: "none",
                            transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                            boxShadow: hovered === p.tag ? `0 0 40px ${p.accentGlow}` : "none",
                            cursor: "pointer",
                        }}
                        aria-label={`Go to ${p.tag} — ${p.name}`}
                    >
                        {/* Tag + name */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <span
                                style={{
                                    fontFamily: "var(--font-jetbrains, monospace)",
                                    fontSize: "10px",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: p.accent,
                                }}
                            >
                                {p.tag}
                            </span>
                            <h2
                                style={{
                                    fontFamily: "var(--font-instrument-serif, serif)",
                                    fontStyle: "italic",
                                    fontSize: "clamp(20px, 3vw, 28px)",
                                    color: "var(--text-primary)",
                                    lineHeight: 1.2,
                                    letterSpacing: "-0.01em",
                                    margin: 0,
                                }}
                            >
                                {p.name}
                            </h2>
                            <p
                                style={{
                                    fontFamily: "var(--font-geist, sans-serif)",
                                    fontSize: "13px",
                                    color: p.accent,
                                    margin: 0,
                                    opacity: 0.9,
                                }}
                            >
                                {p.tagline}
                            </p>
                        </div>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "var(--font-geist, sans-serif)",
                                fontSize: "14px",
                                color: "var(--text-secondary)",
                                lineHeight: 1.65,
                                margin: 0,
                                flexGrow: 1,
                            }}
                        >
                            {p.description}
                        </p>

                        {/* Stats row */}
                        <div
                            style={{
                                display: "flex",
                                gap: "20px",
                                paddingTop: "16px",
                                borderTop: `1px solid rgba(255,255,255,0.06)`,
                            }}
                        >
                            {p.stats.map((s) => (
                                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-instrument-serif, serif)",
                                            fontStyle: "italic",
                                            fontSize: "22px",
                                            color: p.accent,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {s.number}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-jetbrains, monospace)",
                                            fontSize: "9px",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            color: "var(--text-secondary)",
                                        }}
                                    >
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA row */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                color: p.accent,
                                fontFamily: "var(--font-geist, sans-serif)",
                                fontSize: "13px",
                                fontWeight: 500,
                            }}
                        >
                            Explore {p.tag}
                            <ArrowRight size={14} aria-hidden="true" />
                        </div>
                    </a>
                ))}
            </div>

            {/* Footer note */}
            <p
                style={{
                    marginTop: "48px",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    opacity: 0.5,
                    position: "relative",
                    zIndex: 1,
                }}
            >
                SoCcentric · Silicon-Native Test
            </p>
        </div>
    );
}
