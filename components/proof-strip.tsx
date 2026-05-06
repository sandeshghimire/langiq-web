import { PROOF_STRIP } from "@/lib/content";

export function ProofStrip() {
    return (
        <div
            style={{
                background: "var(--bg-surface)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "14px 48px",
                overflowX: "auto",
            }}
            aria-label="Technologies and interfaces validated by the Independent V&V Suite"
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    alignItems: "center",
                    maxWidth: "1440px",
                    margin: "0 auto",
                }}
            >
                {PROOF_STRIP.items.map((item, i) => (
                    <span
                        key={item}
                        style={{
                            fontFamily: "var(--font-jetbrains, monospace)",
                            fontSize: "11px",
                            letterSpacing: "0.12em",
                            color: "var(--text-tertiary)",
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "24px",
                        }}
                    >
                        {item}
                        {i < PROOF_STRIP.items.length - 1 && (
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "3px",
                                    height: "3px",
                                    borderRadius: "50%",
                                    background: "var(--border-strong)",
                                    flexShrink: 0,
                                }}
                                aria-hidden="true"
                            />
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
}
