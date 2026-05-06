import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { PlatformCard } from "./platform-card";
import { PLATFORMS } from "@/lib/content";

export function Platforms() {
    return (
        <section
            id="platforms"
            style={{
                background: "var(--bg-light)",
                padding: "120px 48px",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="platforms-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <Reveal>
                    <SectionLabel label={PLATFORMS.sectionLabel} light />
                </Reveal>

                <Reveal delay={0.05}>
                    <h2
                        id="platforms-headline"
                        style={{
                            fontFamily: "var(--font-instrument-serif, serif)",
                            fontSize: "clamp(36px, 5vw, 64px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.015em",
                            fontWeight: 400,
                            color: "var(--text-on-light)",
                            margin: "0 0 20px",
                        }}
                    >
                        {PLATFORMS.headline}
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: 1.6,
                            color: "var(--text-on-light-2)",
                            margin: "0 0 64px",
                            maxWidth: "720px",
                        }}
                    >
                        {PLATFORMS.lead}
                    </p>
                </Reveal>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                    }}
                    className="platforms-grid"
                >
                    {PLATFORMS.cards.map((card, i) => (
                        <Reveal key={card.number} delay={0.08 + i * 0.06}>
                            <PlatformCard card={card} />
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .platforms-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .platforms-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
