"use client";
import { PLATFORMS } from "@/lib/content";

type PlatformCardData = (typeof PLATFORMS.cards)[number];

interface PlatformCardProps {
    card: PlatformCardData;
}

export function PlatformCard({ card }: PlatformCardProps) {
    return (
        <div
            style={{
                background: "var(--bg-light)",
                border: "1px solid var(--border-light)",
                borderRadius: "4px",
                padding: "28px 24px 20px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = "var(--border-light-strong)";
                const accent = el.querySelector<HTMLDivElement>(".card-accent-line");
                if (accent) accent.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--border-light)";
                const accent = el.querySelector<HTMLDivElement>(".card-accent-line");
                if (accent) accent.style.opacity = "0";
            }}
        >
            {/* Accent line at top */}
            <div
                className="card-accent-line"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--accent)",
                    opacity: 0,
                    transition: "opacity 0.2s",
                }}
                aria-hidden="true"
            />

            {/* Platform name */}
            <h3
                style={{
                    fontFamily: "var(--font-instrument-serif, serif)",
                    fontStyle: "italic",
                    fontSize: "40px",
                    fontWeight: 400,
                    color: "var(--text-on-light)",
                    margin: "0 0 4px",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                }}
            >
                {card.name}
            </h3>

            {/* Mono subtitle */}
            <div
                style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-on-light-2)",
                    marginBottom: "16px",
                }}
            >
                {card.number} / {card.subtitle}
            </div>

            {/* Positioning text */}
            <p
                style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--text-on-light-2)",
                    margin: "0 0 20px",
                }}
            >
                {card.positioning}
            </p>

            {/* Hairline divider */}
            <div
                style={{
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "16px",
                }}
            >
                {/* Specs strip */}
                <dl style={{ margin: 0 }}>
                    {card.specs.map((spec) => (
                        <div
                            key={spec.key}
                            style={{
                                display: "flex",
                                gap: "8px",
                                marginBottom: "4px",
                            }}
                        >
                            <dt
                                style={{
                                    fontFamily: "var(--font-jetbrains, monospace)",
                                    fontSize: "9px",
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "var(--text-on-light-2)",
                                    whiteSpace: "nowrap",
                                    minWidth: "96px",
                                    paddingTop: "1px",
                                }}
                            >
                                {spec.key}
                            </dt>
                            <dd
                                style={{
                                    fontFamily: "var(--font-jetbrains, monospace)",
                                    fontSize: "9px",
                                    letterSpacing: "0.08em",
                                    color: "var(--text-on-light)",
                                    margin: 0,
                                }}
                            >
                                {spec.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Validated badge */}
            <div
                style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    border: "1px solid var(--accent)",
                    padding: "3px 8px",
                    borderRadius: "2px",
                }}
            >
                Validated
            </div>
        </div>
    );
}
