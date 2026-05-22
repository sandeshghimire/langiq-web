"use client";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { ARCHITECTURE as DEFAULT_ARCHITECTURE } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type ArchitectureContent = Widen<typeof DEFAULT_ARCHITECTURE>;

export function Architecture({
    content = DEFAULT_ARCHITECTURE,
}: {
    content?: ArchitectureContent;
}) {
    return (
        <section
            id="architecture"
            style={{
                background: "var(--bg-deep)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
            aria-labelledby="arch-headline"
        >
            {/* Foreground content — centred, matching hero layout */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    padding: "120px 48px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div style={{ maxWidth: "1440px", width: "100%", margin: "0 auto" }}>
                    <Reveal>
                        <SectionLabel label={content.sectionLabel} />
                    </Reveal>

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
                                margin: "24px 0 20px",
                            }}
                        >
                            {content.headline.before}{" "}
                            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                                {content.headline.accent}
                            </em>{" "}
                            {content.headline.after}
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p
                            style={{
                                fontSize: "19px",
                                lineHeight: 1.6,
                                color: "var(--text-secondary)",
                                margin: "0 0 48px",
                                maxWidth: "720px",
                            }}
                        >
                            {content.lead}
                        </p>
                    </Reveal>

                    {/* Component legend */}
                    <Reveal delay={0.15}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: "12px",
                            }}
                            className="arch-legend-grid"
                        >
                            {content.components.map((comp) => (
                                <div
                                    key={comp.number}
                                    style={{
                                        background: "rgba(20,26,34,0.72)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "4px",
                                        padding: "18px",
                                        backdropFilter: "blur(8px)",
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
                                            fontSize: "15px",
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
                                            fontSize: "13px",
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
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .arch-legend-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .arch-legend-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
