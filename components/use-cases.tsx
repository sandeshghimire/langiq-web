"use client";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { USE_CASES } from "@/lib/content";

export function UseCases() {
    return (
        <section
            id="use-cases"
            style={{
                background: "var(--bg-mid)",
                padding: "120px 48px",
            }}
            aria-labelledby="usecases-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={USE_CASES.sectionLabel} />
                </Reveal>

                <Reveal delay={0.05}>
                    <h2
                        id="usecases-headline"
                        style={{
                            fontFamily: "var(--font-instrument-serif, serif)",
                            fontSize: "clamp(36px, 5vw, 64px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.015em",
                            fontWeight: 400,
                            color: "var(--text-primary)",
                            margin: "0 0 64px",
                        }}
                    >
                        {USE_CASES.headline}
                    </h2>
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                    }}
                    className="usecases-grid"
                >
                    {USE_CASES.cards.map((card, i) => (
                        <Reveal key={card.industry} delay={0.05 + (i % 3) * 0.07}>
                            <div
                                style={{
                                    background: "var(--bg-surface)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "4px",
                                    padding: "28px 24px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
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
                                <span
                                    style={{
                                        fontFamily: "var(--font-jetbrains, monospace)",
                                        fontSize: "10px",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {card.industry}
                                </span>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-instrument-serif, serif)",
                                        fontStyle: "italic",
                                        fontSize: "26px",
                                        fontWeight: 400,
                                        color: "var(--text-primary)",
                                        margin: 0,
                                        letterSpacing: "-0.01em",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: 1.6,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                        flex: 1,
                                    }}
                                >
                                    {card.vignette}
                                </p>
                                <div
                                    style={{
                                        fontFamily: "var(--font-jetbrains, monospace)",
                                        fontSize: "10px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--accent)",
                                        borderTop: "1px solid var(--border)",
                                        paddingTop: "12px",
                                        marginTop: "4px",
                                    }}
                                >
                                    PLATFORM: {card.platform}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .usecases-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .usecases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
