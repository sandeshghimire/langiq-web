import { PROOF_STRIP as DEFAULT_PROOF_STRIP } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type ProofStripContent = Widen<typeof DEFAULT_PROOF_STRIP>;

export function ProofStrip({ content = DEFAULT_PROOF_STRIP }: { content?: ProofStripContent }) {
    return (
        <div
            style={{
                background: "var(--bg-surface)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "14px 48px",
                overflowX: "auto",
            }}
            aria-label="Technologies and interfaces validated"
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
                {content.items.map((item, i) => (
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
                        {i < content.items.length - 1 && (
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
