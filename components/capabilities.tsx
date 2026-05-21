"use client";
import { motion } from "framer-motion";
import {
    Thermometer,
    Droplets,
    Zap,
    FileSearch,
    Clock,
    Database,
    Eye,
    CircuitBoard,
    Shield,
    Monitor,
    Timer,
    Route,
    Plug,
    Cpu,
    Activity,
    BarChart2,
} from "lucide-react";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { CAPABILITIES as DEFAULT_CAPABILITIES } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

const ICONS: Record<string, React.ReactNode> = {
    Thermometer: <Thermometer size={20} aria-hidden="true" />,
    Droplets: <Droplets size={20} aria-hidden="true" />,
    Zap: <Zap size={20} aria-hidden="true" />,
    FileSearch: <FileSearch size={20} aria-hidden="true" />,
    Clock: <Clock size={20} aria-hidden="true" />,
    Database: <Database size={20} aria-hidden="true" />,
    Eye: <Eye size={20} aria-hidden="true" />,
    CircuitBoard: <CircuitBoard size={20} aria-hidden="true" />,
    Shield: <Shield size={20} aria-hidden="true" />,
    Monitor: <Monitor size={20} aria-hidden="true" />,
    Timer: <Timer size={20} aria-hidden="true" />,
    Route: <Route size={20} aria-hidden="true" />,
    Plug: <Plug size={20} aria-hidden="true" />,
    Cpu: <Cpu size={20} aria-hidden="true" />,
    Activity: <Activity size={20} aria-hidden="true" />,
    BarChart2: <BarChart2 size={20} aria-hidden="true" />,
};

type CapabilitiesContent = Widen<typeof DEFAULT_CAPABILITIES>;

export function Capabilities({ content = DEFAULT_CAPABILITIES }: { content?: CapabilitiesContent }) {
    return (
        <section
            id="capabilities"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="capabilities-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={content.sectionLabel} />
                </Reveal>

                <Reveal delay={0.05}>
                    <h2
                        id="capabilities-headline"
                        style={{
                            fontFamily: "var(--font-instrument-serif, serif)",
                            fontSize: "clamp(36px, 5vw, 64px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.015em",
                            fontWeight: 400,
                            color: "var(--text-primary)",
                            margin: "0 0 20px",
                        }}
                    >
                        {content.headline}
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: 1.6,
                            color: "var(--text-secondary)",
                            margin: "0 0 64px",
                            maxWidth: "720px",
                        }}
                    >
                        {content.lead}
                    </p>
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "16px",
                    }}
                    className="capabilities-grid"
                >
                    {content.features.map((feature, i) => (
                        <Reveal key={feature.title} delay={0.05 + (i % 3) * 0.06}>
                            <motion.div
                                whileHover={{ y: -4, boxShadow: "0 12px 40px var(--accent-glow)", borderColor: "var(--accent-dim)" }}
                                transition={{ type: "spring", stiffness: 340, damping: 28 }}
                                style={{
                                    background: "var(--bg-surface)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "6px",
                                    padding: "28px 24px",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "8px",
                                        background: "var(--accent-glow)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "18px",
                                        color: "var(--accent)",
                                        flexShrink: 0,
                                    }}
                                >
                                    {ICONS[feature.icon]}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-instrument-serif, serif)",
                                        fontSize: "22px",
                                        fontWeight: 400,
                                        color: "var(--text-primary)",
                                        margin: "0 0 10px",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: 1.65,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .capabilities-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .capabilities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
