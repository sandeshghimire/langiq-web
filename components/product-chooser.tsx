"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TAPE_ITEMS = [
    'Yocto Linux', 'FreeRTOS', 'FlatBuffers', 'gRPC',
    'I²C', 'SPI', 'UART', 'USB', 'PCIe', 'MIPI',
    'IMU', 'ADC', 'DAC', 'Camera', 'LiDAR',
    'CAN-FD', 'ISO 26262', 'DO-178C', 'IEC 62304', 'ASIL-B',
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const } },
};

const PRODUCTS = [
    {
        href: "/ivv",
        tag: "IV&V",
        name: "Independent Verification & Validation",
        tagline: "Autonomous evidence-generating test on real silicon.",
        description:
            "Deploy a persistent test agent onto Yocto Linux or FreeRTOS targets. Run one-shot, monitor, event, and long-run modes. Every artefact is signed and traceable to ISO 26262, DO-178C, and IEC 62304.",
        stats: [
            { number: "4", label: "test modes" },
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
        accent: "#C9A800",
        accentGlow: "rgba(201,168,0,0.15)",
        border: "rgba(201,168,0,0.25)",
        hoverBorder: "rgba(201,168,0,0.55)",
    },
    {
        href: "/datalogger",
        tag: "Datalogger",
        name: "Data Acquisition & Logging",
        tagline: "FPGA-accurate, multi-channel capture on real silicon.",
        description:
            "128 log channels. 1 MSPS burst analog capture. Passive CAN-FD, UART, SPI, I²C, and Ethernet bus monitoring. Append-only, signed evidence store. GPS/PTP synchronised. Native IV&V integration.",
        stats: [
            { number: "128", label: "log channels" },
            { number: "1 MSPS", label: "burst sample rate" },
            { number: "∞", label: "append-only retention" },
        ],
        accent: "#FF6B00",
        accentGlow: "rgba(255,107,0,0.15)",
        border: "rgba(255,107,0,0.25)",
        hoverBorder: "rgba(255,107,0,0.55)",
    },
] as const;

export function ProductChooser() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
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
            {/* Left vertical tape — scrolls downward */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: "32px", overflow: "hidden", zIndex: 1,
                }}
            >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div className="vtape-down" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {[...TAPE_ITEMS, ...TAPE_ITEMS].map((item, i) => (
                        <span key={i} style={{ writingMode: "vertical-lr", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--border-strong)", padding: "14px 0", whiteSpace: "nowrap" }}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right vertical tape — scrolls upward */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", right: 0, top: 0, bottom: 0,
                    width: "32px", overflow: "hidden", zIndex: 1,
                }}
            >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div className="vtape-up" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {[...TAPE_ITEMS, ...TAPE_ITEMS].map((item, i) => (
                        <span key={i} style={{ writingMode: "vertical-lr", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--border-strong)", padding: "14px 0", whiteSpace: "nowrap" }}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

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
            <motion.div
                variants={itemVariants}
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
                {/* Rotated square mark — split IV&V teal / HIL amber */}
                <div
                    style={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "52px",
                            height: "52px",
                            transform: "rotate(45deg)",
                            position: "relative",
                            overflow: "hidden",
                            border: "2px solid transparent",
                            borderRadius: "1px",
                            background:
                                "linear-gradient(#0E1218, #0E1218) padding-box, " +
                                "linear-gradient(135deg, #00D9C0 33%, #C9A800 66%, #FF6B00 100%) border-box",
                        }}
                    >
                        {/* Top-left — IV&V teal */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "#00D9C0",
                                clipPath: "polygon(0 0, 0% 100%, 50% 50%)",
                                opacity: 0.9,
                            }}
                        />
                        {/* Top-right — HIL amber */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "#C9A800",
                                clipPath: "polygon(0 0, 100% 0, 50% 50%)",
                                opacity: 0.9,
                            }}
                        />
                        {/* Bottom — Datalogger indigo */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "#FF6B00",
                                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 50% 50%)",
                                opacity: 0.9,
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
                    Three silicon-native test platforms — validation evidence, hardware-in-the-loop, and data acquisition. Built to work together.
                </p>
            </motion.div>

            {/* Product cards */}
            <motion.div
                variants={containerVariants}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "24px",
                    width: "100%",
                    maxWidth: "1280px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {PRODUCTS.map((p) => (
                    <motion.div
                        key={p.href}
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: `0 16px 48px ${p.accentGlow}` }}
                        transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    >
                        <Link
                            href={p.href}
                            onMouseEnter={() => setHovered(p.tag)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                padding: "36px 32px",
                                height: "100%",
                                background: hovered === p.tag ? p.accentGlow : "rgba(14,18,24,0.7)",
                                border: `1px solid ${hovered === p.tag ? p.hoverBorder : p.border}`,
                                borderRadius: "6px",
                                textDecoration: "none",
                                transition: "background 0.25s ease, border-color 0.25s ease",
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
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer note */}
            <motion.p
                variants={itemVariants}
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
                SoCcentric · Silicon-Native Test · IV&V · HIL · Datalogger
            </motion.p>
        </motion.div>
    );
}
