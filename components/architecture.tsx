"use client";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { ArchitectureDiagram } from "./architecture-diagram";
import { ARCHITECTURE } from "@/lib/content";

export function Architecture() {
    return (
        <section
            id="architecture"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
                position: "relative",
                overflow: "hidden",
            }}
            aria-labelledby="arch-headline"
        >
            {/* Soft left glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "-200px",
                    transform: "translateY(-50%)",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,217,192,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
                aria-hidden="true"
            />

            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={ARCHITECTURE.sectionLabel} />
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "7fr 5fr",
                        gap: "64px",
                        alignItems: "end",
                        marginBottom: "64px",
                    }}
                    className="arch-header-grid"
                >
                    {/* Headline */}
                    <Reveal delay={0.05}>
                        <h2
                            id="arch-headline"
                            style={{
                                fontFamily: "var(--font-instrument-serif, serif)",
                                fontSize: "clamp(36px, 5vw, 64px)",
                                lineHeight: 1.08,
                                letterSpacing: "-0.015em",
                                fontWeight: 400,
                                color: "var(--text-primary)",
                                margin: 0,
                            }}
                        >
                            {ARCHITECTURE.headline.before}{" "}
                            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                                {ARCHITECTURE.headline.accent}
                            </em>{" "}
                            {ARCHITECTURE.headline.after}
                        </h2>
                    </Reveal>

                    {/* Lead */}
                    <Reveal delay={0.1}>
                        <p
                            style={{
                                fontSize: "17px",
                                lineHeight: 1.65,
                                color: "var(--text-secondary)",
                                margin: 0,
                            }}
                        >
                            {ARCHITECTURE.lead}
                        </p>
                    </Reveal>
                </div>

                {/* Architecture diagram */}
                <Reveal delay={0.15}>
                    <ArchitectureDiagram />
                </Reveal>

                {/* Component legend */}
                <Reveal delay={0.2}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "16px",
                            marginTop: "32px",
                        }}
                        className="arch-legend-grid"
                    >
                        {ARCHITECTURE.components.map((comp) => (
                            <div
                                key={comp.number}
                                style={{
                                    background: "var(--bg-surface)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "4px",
                                    padding: "18px",
                                    transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.transform = "translateY(-2px)";
                                    el.style.borderColor = "var(--accent-dim)";
                                    el.style.boxShadow = "0 0 12px var(--accent-glow)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.transform = "translateY(0)";
                                    el.style.borderColor = "var(--border)";
                                    el.style.boxShadow = "none";
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "var(--font-jetbrains, monospace)",
                                        fontSize: "10px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--accent)",
                                        marginBottom: "8px",
                                    }}
                                >
                                    {comp.number}
                                </div>
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontFamily: "var(--font-geist, sans-serif)",
                                        color: "var(--text-primary)",
                                        marginBottom: "6px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {comp.label}
                                </div>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {comp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .arch-header-grid { grid-template-columns: 1fr !important; }
          .arch-legend-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .arch-legend-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
