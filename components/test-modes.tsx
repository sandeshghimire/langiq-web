"use client";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { OneShotAnim } from "./test-mode-anims/one-shot";
import { MonitorAnim } from "./test-mode-anims/monitor";
import { EventAnim } from "./test-mode-anims/event";
import { LongRunAnim } from "./test-mode-anims/long-run";
import { TEST_MODES } from "@/lib/content";

const ANIMATIONS = [OneShotAnim, MonitorAnim, EventAnim, LongRunAnim];

export function TestModes() {
    return (
        <section
            id="test-modes"
            style={{
                background: "var(--bg-mid)",
                padding: "120px 48px",
            }}
            aria-labelledby="testmodes-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={TEST_MODES.sectionLabel} />
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
                        {TEST_MODES.headline}
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
                        {TEST_MODES.lead}
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
                    {TEST_MODES.modes.map((mode, i) => {
                        const AnimComp = ANIMATIONS[i];
                        return (
                            <Reveal key={mode.monoLabel} delay={0.1 + i * 0.07}>
                                <div
                                    style={{
                                        background: "var(--bg-surface)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "4px",
                                        padding: "32px",
                                        transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
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
                                </div>
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
