"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV as DEFAULT_NAV } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type NavContent = Widen<typeof DEFAULT_NAV>;

export function Nav({
    content = DEFAULT_NAV,
    product,
}: {
    content?: NavContent;
    product?: "ivv" | "hil" | "datalogger";
}) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const ALL_PRODUCTS = [
        { id: "ivv", label: "IV&V", href: "/ivv" },
        { id: "hil", label: "HIL", href: "/hil" },
        { id: "datalogger", label: "Datalogger", href: "/datalogger" },
    ] as const;
    const otherProducts = product ? ALL_PRODUCTS.filter((p) => p.id !== product) : [];

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
                borderBottom: scrolled ? `1px solid ${product ? "var(--accent-dim)" : "var(--border)"}` : "none",
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
                {/* Left: Brand lockup — logo+company → home, product name → top */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {/* Diamond logo + company name → landing page */}
                    <Link
                        href="/"
                        style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
                        aria-label="SoCcentric — home"
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
                        {/* Company eyebrow */}
                        <span
                            style={{
                                fontFamily: "var(--font-jetbrains, monospace)",
                                fontSize: "10px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "var(--text-secondary)",
                                lineHeight: 1,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {content.brand.eyebrow}
                        </span>
                    </Link>

                    {/* Divider */}
                    <span
                        style={{
                            color: "var(--border-strong)",
                            fontSize: "16px",
                            lineHeight: 1,
                            userSelect: "none",
                            flexShrink: 0,
                        }}
                        aria-hidden="true"
                    >
                        /
                    </span>

                    {/* Product name → scroll to top */}
                    <a
                        href="#top"
                        style={{ textDecoration: "none" }}
                        aria-label={`${content.brand.name} — scroll to top`}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-instrument-serif, serif)",
                                fontStyle: "italic",
                                fontSize: "18px",
                                color: product ? "var(--accent)" : "var(--text-primary)",
                                lineHeight: 1,
                                letterSpacing: "-0.01em",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {content.brand.name}
                        </span>
                    </a>
                </div>

                {/* Center: Anchor links — desktop */}
                <div
                    className="hidden lg:flex"
                    style={{ gap: "24px", alignItems: "center", flexWrap: "nowrap" }}
                >
                    {content.links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-geist, sans-serif)",
                                fontSize: "13px",
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                transition: "color 0.2s",
                                whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right: Product switcher + CTA + mobile menu button */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                    {/* Product switcher badges */}
                    {otherProducts.map((p) => (
                        <Link
                            key={p.id}
                            href={p.href}
                            className="hidden lg:flex"
                            style={{
                                alignItems: "center",
                                gap: "5px",
                                padding: "5px 10px",
                                border: "1px solid var(--border-strong)",
                                borderRadius: "4px",
                                color: "var(--text-secondary)",
                                fontFamily: "var(--font-jetbrains, monospace)",
                                fontSize: "10px",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                transition: "border-color 0.2s, color 0.2s",
                                whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "var(--accent)";
                                e.currentTarget.style.color = "var(--accent)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "var(--border-strong)";
                                e.currentTarget.style.color = "var(--text-secondary)";
                            }}
                            aria-label={`Switch to ${p.label}`}
                        >
                            ⇌ {p.label}
                        </Link>
                    ))}
                    {/* Mobile hamburger */}
                    <button
                        className="flex lg:hidden"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        style={{
                            background: "none",
                            border: "1px solid var(--border-strong)",
                            borderRadius: "4px",
                            color: "var(--text-primary)",
                            cursor: "pointer",
                            padding: "6px",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
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
                        aria-label="Connect"
                    >
                        {content.ctas.primary}
                        <ArrowRight size={14} aria-hidden="true" />
                    </a>
                </div>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "absolute",
                            top: "68px",
                            left: 0,
                            right: 0,
                            background: "rgba(7,9,12,0.96)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            borderBottom: "1px solid var(--border)",
                            padding: "16px 24px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            zIndex: 99,
                        }}
                    >
                        {otherProducts.map((p) => (
                            <Link
                                key={p.id}
                                href={p.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    fontFamily: "var(--font-jetbrains, monospace)",
                                    fontSize: "12px",
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "var(--accent)",
                                    textDecoration: "none",
                                    padding: "10px 8px",
                                    borderBottom: "1px solid var(--border)",
                                }}
                            >
                                ⇌ Switch to {p.label}
                            </Link>
                        ))}
                        {content.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    fontFamily: "var(--font-geist, sans-serif)",
                                    fontSize: "15px",
                                    color: "var(--text-secondary)",
                                    textDecoration: "none",
                                    padding: "10px 8px",
                                    borderBottom: "1px solid var(--border)",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#cta"
                            onClick={() => setMobileOpen(false)}
                            style={{
                                marginTop: "12px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "12px 20px",
                                background: "var(--accent)",
                                borderRadius: "4px",
                                color: "#07090C",
                                fontFamily: "var(--font-geist, sans-serif)",
                                fontSize: "14px",
                                fontWeight: 500,
                                textDecoration: "none",
                            }}
                        >
                            {content.ctas.primary} <ArrowRight size={14} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
