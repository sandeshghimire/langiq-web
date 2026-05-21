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
                padding: "80px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="usecases-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto", width: "100%" }}>
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
                            margin: "0 0 24px",
                        }}
                    >
                        {content.headline}
                    </h2>
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "10px",
                    }}
                    className="usecases-grid"
                >
                    {content.cards.map((card, i) => (
                        <Reveal key={card.industry} delay={0.05 + (i % 3) * 0.05}>
                            <motion.div
                                whileHover={{ y: -3, boxShadow: "0 8px 28px var(--accent-glow)", borderColor: "var(--accent-dim)" }}
                                transition={{ type: "spring", stiffness: 340, damping: 28 }}
                                style={{
                                    background: "var(--bg-surface)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "6px",
                                    padding: "14px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-jetbrains, monospace)",
                                        fontSize: "9px",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "var(--accent)",
                                    }}
                                >
                                    {card.industry}
                                </span>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-instrument-serif, serif)",
                                        fontStyle: "italic",
                                        fontSize: "22px",
                                        fontWeight: 400,
                                        color: "var(--text-primary)",
                                        margin: 0,
                                        letterSpacing: "-0.01em",
                                        lineHeight: 1.25,
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        lineHeight: 1.5,
                                        color: "var(--text-secondary)",
                                        margin: 0,
                                    }}
                                >
                                    {card.vignette}
                                </p>
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
