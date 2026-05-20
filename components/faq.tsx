"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { FAQ as DEFAULT_FAQ } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type FaqContent = Widen<typeof DEFAULT_FAQ>;

export function FaqSection({ content = DEFAULT_FAQ }: { content?: FaqContent }) {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section
            id="faq"
            style={{
                background: "var(--bg-mid)",
                padding: "120px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="faq-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={content.sectionLabel} />
                </Reveal>

                <Reveal delay={0.05}>
                    <h2
                        id="faq-headline"
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

                <Reveal delay={0.1}>
                    <div
                        style={{ maxWidth: "900px" }}
                        role="list"
                    >
                        {content.items.map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    borderTop: "1px solid var(--border)",
                                }}
                                role="listitem"
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    style={{
                                        width: "100%",
                                        background: "none",
                                        border: "none",
                                        padding: "20px 0",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        gap: "16px",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        color: "var(--text-primary)",
                                    }}
                                    aria-expanded={open === i}
                                    aria-controls={`faq-answer-${i}`}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-geist, sans-serif)",
                                            fontSize: "17px",
                                            lineHeight: 1.4,
                                            fontWeight: 500,
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        {item.question}
                                    </span>
                                    <span
                                        style={{
                                            color: "var(--accent)",
                                            flexShrink: 0,
                                            paddingTop: "2px",
                                        }}
                                        aria-hidden="true"
                                    >
                                        {open === i ? <Minus size={18} /> : <Plus size={18} />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {open === i && (
                                        <motion.div
                                            id={`faq-answer-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: 1.65,
                                                    color: "var(--text-secondary)",
                                                    margin: "0 0 20px",
                                                    paddingRight: "40px",
                                                }}
                                            >
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        {/* Bottom border */}
                        <div style={{ borderTop: "1px solid var(--border)" }} />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
