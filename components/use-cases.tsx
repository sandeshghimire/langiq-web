"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { USE_CASES as DEFAULT_USE_CASES } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type UseCasesContent = Widen<typeof DEFAULT_USE_CASES>;

export function UseCases({ content = DEFAULT_USE_CASES }: { content?: UseCasesContent }) {
    return (
        <section
            id="use-cases"
            style={{
                background: "var(--bg-mid)",
                padding: "120px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="usecases-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={content.sectionLabel} />
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
                        {content.headline}
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
                    {content.cards.map((card, i) => (
                        <Reveal key={card.industry} delay={0.05 + (i % 3) * 0.07}>
                            <motion.div
                                whileHover={{ y: -4, boxShadow: "0 12px 40px var(--accent-glow)", borderColor: "var(--accent-dim)" }}
                                transition={{ type: "spring", stiffness: 340, damping: 28 }}
                                style={{
                                    background: "var(--bg-surface)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "6px",
                                    padding: "28px 24px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
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
                                {"subsystems" in card && Array.isArray((card as unknown as { subsystems?: readonly string[] }).subsystems) && (
                                    <ul
                                        style={{
                                            margin: "4px 0 0",
                                            padding: 0,
                                            listStyle: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "4px",
                                        }}
                                        aria-label="Validated subsystems"
                                    >
                                        {(card as unknown as { subsystems: readonly string[] }).subsystems.map((s) => (
                                            <li
                                                key={s}
                                                style={{
                                                    fontFamily: "var(--font-jetbrains, monospace)",
                                                    fontSize: "10px",
                                                    letterSpacing: "0.08em",
                                                    color: "var(--text-secondary)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                }}
                                            >
                                                <span style={{ color: "var(--accent)" }} aria-hidden="true">›</span>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {"testModes" in card && Array.isArray((card as unknown as { testModes?: readonly string[] }).testModes) && (
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
                                        MODES: {(card as unknown as { testModes: readonly string[] }).testModes.join(" · ")}
                                    </div>
                                )}
                            </motion.div>
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
