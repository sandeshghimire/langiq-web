"use client";
import { Calendar, ArrowRight, Download } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { CTA } from "@/lib/content";

export function CtaSection() {
    return (
        <section
            id="cta"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
            }}
            aria-labelledby="cta-headline"
        >
            {/* Strong radial glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "900px",
                    height: "600px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(ellipse, rgba(0,217,192,0.12) 0%, transparent 65%)",
                    pointerEvents: "none",
                }}
                aria-hidden="true"
            />

            <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}>
                <Reveal>
                    <h2
                        id="cta-headline"
                        style={{
                            fontFamily: "var(--font-instrument-serif, serif)",
                            fontSize: "clamp(40px, 5vw, 64px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.015em",
                            fontWeight: 400,
                            color: "var(--text-primary)",
                            margin: "0 auto 24px",
                            maxWidth: "800px",
                        }}
                    >
                        {CTA.headline.before}{" "}
                        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                            {CTA.headline.accent}
                        </em>{" "}
                        {CTA.headline.after}
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.6,
                            color: "var(--text-secondary)",
                            maxWidth: "640px",
                            margin: "0 auto 40px",
                        }}
                    >
                        {CTA.subhead}
                    </p>
                </Reveal>

                <Reveal delay={0.15}>
                    <div
                        style={{
                            display: "flex",
                            gap: "14px",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginBottom: "28px",
                        }}
                    >
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                fetch("/api/lead", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ type: "demo" }),
                                });
                            }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "16px 28px",
                                background: "var(--accent)",
                                borderRadius: "4px",
                                color: "#07090C",
                                fontFamily: "var(--font-geist, sans-serif)",
                                fontWeight: 500,
                                fontSize: "16px",
                                textDecoration: "none",
                                transition: "box-shadow 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 0 0 6px var(--accent-glow)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                            }}
                            aria-label="Book a technical demo"
                        >
                            <Calendar size={18} aria-hidden="true" />
                            {CTA.ctas.primary}
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                fetch("/api/lead", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ type: "brief" }),
                                });
                            }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "16px 28px",
                                border: "1px solid var(--border-strong)",
                                borderRadius: "4px",
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-geist, sans-serif)",
                                fontSize: "16px",
                                textDecoration: "none",
                                transition: "border-color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--text-primary)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--border-strong)";
                            }}
                            aria-label="Download technical brief"
                        >
                            <Download size={18} aria-hidden="true" />
                            {CTA.ctas.secondary}
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <p
                        style={{
                            fontFamily: "var(--font-jetbrains, monospace)",
                            fontSize: "10px",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "var(--text-tertiary)",
                            margin: 0,
                        }}
                    >
                        {CTA.disclaimer}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
