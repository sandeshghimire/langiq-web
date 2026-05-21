"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { ArchitectureDiagram } from "./architecture-diagram";
import { ARCHITECTURE as DEFAULT_ARCHITECTURE } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type ArchitectureContent = Widen<typeof DEFAULT_ARCHITECTURE>;

export function Architecture({
    content = DEFAULT_ARCHITECTURE,
    diagram,
}: {
    content?: ArchitectureContent;
    diagram?: React.ReactNode;
}) {
    return (
        <section
            id="architecture"
            style={{
                background: "var(--bg-deep)",
                position: "relative",
                overflow: "hidden",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
            aria-labelledby="arch-headline"
        >
            {/* Diagram in background — faded, exactly like hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                }}
                aria-hidden="true"
            >
                <div style={{ width: "100%", maxWidth: "none", transform: "scale(1.0)" }}>
                    {diagram ?? <ArchitectureDiagram />}
                </div>
            </motion.div>

            {/* Radial centre glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "1200px",
                    height: "900px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
                aria-hidden="true"
            />

            {/* Foreground content — centred, matching hero layout */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "120px 48px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div style={{ maxWidth: "760px", width: "100%", textAlign: "center" }}>
                    <Reveal>
                        <SectionLabel label={content.sectionLabel} />
                    </Reveal>

                    <Reveal delay={0.05}>
                        <h2
                            id="arch-headline"
                            style={{
                                fontFamily: "var(--font-instrument-serif, serif)",
                                fontSize: "clamp(48px, 7vw, 100px)",
                                lineHeight: 1.02,
                                letterSpacing: "-0.02em",
                                fontWeight: 400,
                                color: "var(--text-primary)",
                                margin: "24px 0 28px",
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
                                margin: "0 auto 48px",
                                maxWidth: "600px",
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
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "12px",
                                textAlign: "left",
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
        @media (max-width: 639px) {
          .arch-legend-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
