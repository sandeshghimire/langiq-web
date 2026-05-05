"use client";
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
} from "lucide-react";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { CAPABILITIES } from "@/lib/content";

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
};

export function Capabilities() {
    return (
        <section
            id="capabilities"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
            }}
            aria-labelledby="capabilities-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={CAPABILITIES.sectionLabel} />
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
                        {CAPABILITIES.headline}
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
                        {CAPABILITIES.lead}
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
                    {CAPABILITIES.features.map((feature, i) => (
                        <Reveal key={feature.title} delay={0.05 + (i % 3) * 0.06}>
                            <div
                                style={{
                                    background: "var(--bg-surface)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "4px",
                                    padding: "24px",
                                    height: "100%",
                                    transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.transform = "translateY(-2px)";
                                    el.style.borderColor = "rgba(0,217,192,0.3)";
                                    el.style.boxShadow = "0 0 16px var(--accent-glow)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.transform = "translateY(0)";
                                    el.style.borderColor = "var(--border)";
                                    el.style.boxShadow = "none";
                                }}
                            >
                                <div
                                    style={{ color: "var(--accent)", marginBottom: "12px" }}
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
                                        lineHeight: 1.6,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>
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
