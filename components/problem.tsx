import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { PROBLEM } from "@/lib/content";

export function Problem() {
    return (
        <section
            id="problem"
            style={{
                background: "var(--bg-mid)",
                padding: "120px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="problem-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={PROBLEM.sectionLabel} />
                </Reveal>

                {/* Full-width centred headline */}
                <Reveal delay={0.05}>
                    <h2
                        id="problem-headline"
                        style={{
                            fontFamily: "var(--font-instrument-serif, serif)",
                            fontSize: "clamp(36px, 5vw, 64px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.015em",
                            fontWeight: 400,
                            color: "var(--text-primary)",
                            textAlign: "center",
                            margin: "0 0 64px",
                        }}
                    >
                        {PROBLEM.headline.before}{" "}
                        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                            {PROBLEM.headline.accent}
                        </em>{" "}
                        {PROBLEM.headline.after}
                    </h2>
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "6fr 6fr",
                        gap: "80px",
                        alignItems: "start",
                    }}
                    className="problem-grid"
                >
                    {/* Left: body */}
                    <Reveal delay={0.1}>
                        <div style={{ marginBottom: "40px" }}>
                            {PROBLEM.body.map((para, i) => (
                                <p
                                    key={i}
                                    style={{
                                        fontSize: "17px",
                                        lineHeight: 1.65,
                                        color: "var(--text-secondary)",
                                        margin: i === 0 ? "0 0 16px" : "0",
                                    }}
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    </Reveal>

                    {/* Right: failure modes */}
                    <Reveal delay={0.15}>
                        <div>
                            {PROBLEM.failureModes.map((mode) => (
                                <div
                                    key={mode.label}
                                    style={{
                                        borderTop: "1px solid var(--border)",
                                        padding: "18px 0",
                                        display: "grid",
                                        gridTemplateColumns: "180px 1fr",
                                        gap: "24px",
                                        alignItems: "start",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-jetbrains, monospace)",
                                            fontSize: "10px",
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: "var(--warm)",
                                            paddingTop: "2px",
                                        }}
                                    >
                                        {mode.label}
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "15px",
                                            lineHeight: 1.6,
                                            color: "var(--text-secondary)",
                                            margin: 0,
                                        }}
                                    >
                                        {mode.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </section>
    );
}
