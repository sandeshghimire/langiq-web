"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { OneShotAnim } from "./test-mode-anims/one-shot";
import { MonitorAnim } from "./test-mode-anims/monitor";
import { EventAnim } from "./test-mode-anims/event";
import { LongRunAnim } from "./test-mode-anims/long-run";
import { TEST_MODES as DEFAULT_TEST_MODES } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

const ANIMATIONS = [OneShotAnim, MonitorAnim, EventAnim, LongRunAnim];

type TestModesContent = Widen<typeof DEFAULT_TEST_MODES>;

export function TestModes({ content = DEFAULT_TEST_MODES }: { content?: TestModesContent }) {
    return (
        <section
            id="test-modes"
            style={{
                background: "var(--bg-mid)",
                padding: "120px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="testmodes-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={content.sectionLabel} />
                </Reveal>

                <Reveal delay={0.05}>
                    <h2
                        id="testmodes-headline"
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
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "20px",
                    }}
                    className="modes-grid"
                >
                    {content.modes.map((mode, i) => {
                        const AnimComp = ANIMATIONS[i];
                        return (
                            <Reveal key={mode.monoLabel} delay={0.1 + i * 0.07}>
                                <motion.div
                                    whileHover={{ y: -4, boxShadow: "0 12px 40px var(--accent-glow)", borderColor: "var(--accent-dim)" }}
                                    transition={{ type: "spring", stiffness: 340, damping: 28 }}
                                    style={{
                                        background: "var(--bg-surface)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "6px",
                                        padding: "32px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                    }}
                                >
                                    <AnimComp />

                                    <div>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-instrument-serif, serif)",
                                                fontSize: "28px",
                                                fontWeight: 400,
                                                color: "var(--text-primary)",
                                                margin: "0 0 4px",
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            {mode.title}
                                        </h3>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-jetbrains, monospace)",
                                                fontSize: "10px",
                                                letterSpacing: "0.14em",
                                                textTransform: "uppercase",
                                                color: "var(--text-tertiary)",
                                            }}
                                        >
                                            {mode.monoLabel}
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                            fontSize: "15px",
                                            lineHeight: 1.6,
                                            color: "var(--text-secondary)",
                                            margin: 0,
                                            flex: 1,
                                        }}
                                    >
                                        {mode.description}
                                    </p>

                                    <div
                                        style={{
                                            borderTop: "1px solid var(--border)",
                                            paddingTop: "12px",
                                            fontFamily: "var(--font-jetbrains, monospace)",
                                            fontSize: "10px",
                                            letterSpacing: "0.12em",
                                            color: "var(--text-tertiary)",
                                        }}
                                    >
                                        {mode.example}
                                    </div>
                                </motion.div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @media (max-width: 767px) {
          .modes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
