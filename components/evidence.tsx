import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { EVIDENCE } from "@/lib/content";

export function Evidence() {
    return (
        <section
            id="evidence"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
            }}
            aria-labelledby="evidence-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={EVIDENCE.sectionLabel} />
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
                        {EVIDENCE.headline}
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
                        {EVIDENCE.lead}
                    </p>
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px",
                    }}
                    className="evidence-grid"
                >
                    {EVIDENCE.columns.map((col, i) => (
                        <Reveal key={col.number} delay={0.1 + i * 0.08}>
                            <div
                                style={{
                                    border: "1px solid var(--border)",
                                    borderRadius: "4px",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Header */}
                                <div
                                    style={{
                                        background: "var(--bg-surface)",
                                        borderBottom: "1px solid var(--border)",
                                        padding: "16px 20px",
                                        display: "flex",
                                        alignItems: "baseline",
                                        gap: "12px",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-jetbrains, monospace)",
                                            fontSize: "10px",
                                            letterSpacing: "0.14em",
                                            color: "var(--accent)",
                                        }}
                                    >
                                        {col.number}
                                    </span>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-instrument-serif, serif)",
                                            fontSize: "22px",
                                            fontWeight: 400,
                                            color: "var(--text-primary)",
                                            margin: 0,
                                        }}
                                    >
                                        {col.title}
                                    </h3>
                                </div>

                                {/* Items — hairline divided rows */}
                                <div>
                                    {col.items.map((item, j) => (
                                        <div
                                            key={j}
                                            style={{
                                                padding: "14px 20px",
                                                borderTop: j === 0 ? "none" : "1px solid var(--border)",
                                                fontSize: "14px",
                                                lineHeight: 1.5,
                                                color: "var(--text-secondary)",
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "10px",
                                            }}
                                        >
                                            {/* Tick mark */}
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

            <style>{`
        @media (max-width: 1023px) {
          .evidence-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
