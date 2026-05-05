"use client";
import { FOOTER } from "@/lib/content";

export function Footer() {
    return (
        <footer
            style={{
                background: "var(--bg-deep)",
                borderTop: "1px solid var(--border)",
                padding: "64px 48px 32px",
            }}
            aria-label="Site footer"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr",
                        gap: "64px",
                        marginBottom: "48px",
                    }}
                    className="footer-grid"
                >
                    {/* Left: Brand */}
                    <div>
                        {/* Brand lockup — same as nav */}
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
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
                                        }}
                                    />
                                </div>
                            </div>
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
                                    SOCCENTRIC
                                </span>
                                <span
                                    style={{
                                        fontFamily: "var(--font-instrument-serif, serif)",
                                        fontStyle: "italic",
                                        fontSize: "18px",
                                        color: "var(--text-primary)",
                                        lineHeight: 1,
                                    }}
                                >
                                    IV&amp;V
                                </span>
                            </div>
                        </div>
                        <p
                            style={{
                                fontSize: "14px",
                                lineHeight: 1.6,
                                color: "var(--text-tertiary)",
                                margin: 0,
                                maxWidth: "380px",
                            }}
                        >
                            {FOOTER.brand.description}
                        </p>
                    </div>

                    {/* Middle: Platforms */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "var(--font-jetbrains, monospace)",
                                fontSize: "10px",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "var(--text-secondary)",
                                margin: "0 0 16px",
                            }}
                        >
                            {FOOTER.platforms.header}
                        </h3>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                            {FOOTER.platforms.links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        style={{
                                            fontSize: "14px",
                                            color: "var(--text-tertiary)",
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Resources */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "var(--font-jetbrains, monospace)",
                                fontSize: "10px",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "var(--text-secondary)",
                                margin: "0 0 16px",
                            }}
                        >
                            {FOOTER.resources.header}
                        </h3>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                            {FOOTER.resources.links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        style={{
                                            fontSize: "14px",
                                            color: "var(--text-tertiary)",
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom strip */}
                <div
                    style={{
                        borderTop: "1px solid var(--border)",
                        paddingTop: "20px",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-jetbrains, monospace)",
                            fontSize: "11px",
                            letterSpacing: "0.1em",
                            color: "var(--text-tertiary)",
                            margin: 0,
                        }}
                    >
                        {FOOTER.copyright}
                    </p>
                </div>
            </div>

            <style>{`
        @media (max-width: 1023px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 639px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
        </footer>
    );
}
