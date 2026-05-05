"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NAV } from "@/lib/content";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            aria-label="Main navigation"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                height: "68px",
                background: scrolled ? "rgba(7, 9, 12, 0.82)" : "transparent",
                backdropFilter: scrolled ? "blur(14px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
                transition: "background 0.3s ease, backdrop-filter 0.3s ease",
                borderBottom: scrolled ? "1px solid var(--border)" : "none",
            }}
        >
            {/* Scroll progress bar */}
            <motion.div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "1px",
                    width: progressWidth,
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent-glow)",
                }}
                aria-hidden="true"
            />

            <div
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    padding: "0 48px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                }}
            >
                {/* Left: Brand lockup */}
                <a
                    href="#top"
                    style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
                    aria-label="SoCcentric IV&V — go to top"
                >
                    {/* Rotated square mark */}
                    <div
                        style={{
                            width: "28px",
                            height: "28px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <div
                            style={{
                                width: "18px",
                                height: "18px",
                                border: "1.5px solid var(--accent)",
                                transform: "rotate(45deg)",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    background: "var(--accent)",
                                    transform: "rotate(0deg)",
                                }}
                            />
                        </div>
                    </div>
                    {/* Text lockup */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                        <span
                            style={{
                                fontFamily: "var(--font-jetbrains, monospace)",
                                fontSize: "10px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "var(--text-secondary)",
                                lineHeight: 1,
                            }}
                        >
                            {NAV.brand.eyebrow}
                        </span>
                        <span
                            style={{
                                fontFamily: "var(--font-instrument-serif, serif)",
                                fontStyle: "italic",
                                fontSize: "18px",
                                color: "var(--text-primary)",
                                lineHeight: 1,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {NAV.brand.name}
                        </span>
                    </div>
                </a>

                {/* Center: Anchor links */}
                <div
                    className="hidden lg:flex"
                    style={{ gap: "32px", alignItems: "center" }}
                >
                    {NAV.links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-geist, sans-serif)",
                                fontSize: "14px",
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right: CTAs */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                    <a
                        href="#cta"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "8px 16px",
                            background: "var(--accent)",
                            borderRadius: "4px",
                            color: "#07090C",
                            fontFamily: "var(--font-geist, sans-serif)",
                            fontSize: "14px",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "box-shadow 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 0 6px var(--accent-glow)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                        }}
                        aria-label="Book demo"
                    >
                        {NAV.ctas.primary}
                        <ArrowRight size={14} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
