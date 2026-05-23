import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { EVIDENCE as DEFAULT_EVIDENCE } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type EvidenceContent = Omit<Widen<typeof DEFAULT_EVIDENCE>, 'closingLine'> & {
    closingLine?: string;
};

export function Evidence({ content = DEFAULT_EVIDENCE }: { content?: EvidenceContent }) {
    return (
        <section
            id="evidence"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="evidence-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={content.sectionLabel} />
                </Reveal>

                <Reveal delay={0.05}>
                    <h2
                        id="evidence-headline"
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
                        }}
                    >
                        {content.lead}
                    </p>
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "24px",
                    }}
                    className="evidence-grid"
                >
                    {content.columns.map((col, i) => (
                        <Reveal key={col.number} delay={0.1 + i * 0.08}>
                            <div
                                style={{
                                    border: "1px solid var(--border)",
                                    borderTop: "2px solid var(--accent)",
                                    borderRadius: "6px",
                                    overflow: "hidden",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Header */}
                                <div
                                    style={{
                                        background: "linear-gradient(140deg, var(--bg-elev) 0%, var(--bg-surface) 100%)",
                                        borderBottom: "1px solid var(--border)",
                                        padding: "20px 24px",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Watermark number */}
                                    <span
                                        style={{
                                            position: "absolute",
                                            right: "16px",
                                            bottom: "-8px",
                                            fontFamily: "var(--font-instrument-serif, serif)",
                                            fontStyle: "italic",
                                            fontSize: "72px",
                                            lineHeight: 1,
                                            color: "var(--accent)",
                                            opacity: 0.07,
                                            pointerEvents: "none",
                                            userSelect: "none",
                                        }}
                                        aria-hidden="true"
                                    >
                                        {col.number}
                                    </span>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px", position: "relative" }}>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-jetbrains, monospace)",
                                                fontSize: "10px",
                                                letterSpacing: "0.14em",
                                                color: "var(--accent)",
                                                opacity: 0.7,
                                            }}
                                        >
                                            {col.number}
                                        </span>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-instrument-serif, serif)",
                                                fontSize: "24px",
                                                fontWeight: 400,
                                                color: "var(--text-primary)",
                                                margin: 0,
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            {col.title}
                                        </h3>
                                    </div>
                                    {"subtitle" in col && (
                                        <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-tertiary)", margin: 0, position: "relative" }}>
                                            {(col as unknown as { subtitle: string }).subtitle}
                                        </p>
                                    )}
                                </div>

                                {/* Items — hairline divided rows */}
                                <div style={{ flex: 1 }}>
                                    {col.items.map((item, j) => (
                                        <div
                                            key={j}
                                            style={{
                                                padding: "13px 24px",
                                                borderTop: j === 0 ? "none" : "1px solid var(--border)",
                                                fontSize: "14px",
                                                lineHeight: 1.5,
                                                color: "var(--text-secondary)",
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "10px",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: "var(--accent)",
                                                    fontFamily: "var(--font-jetbrains, monospace)",
                                                    fontSize: "10px",
                                                    flexShrink: 0,
                                                    paddingTop: "2px",
                                                }}
                                                aria-hidden="true"
                                            >
                                                ✓
                                            </span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {content.closingLine && (
                <Reveal delay={0.3}>
                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: 1.6,
                            color: "var(--text-secondary)",
                            margin: "48px 0 0",
                            maxWidth: "860px",
                        }}
                    >
                        {content.closingLine}
                    </p>
                </Reveal>
            )}

            <style>{`
        @media (max-width: 1023px) {
          .evidence-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1279px) {
          .evidence-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
        </section>
    );
}
