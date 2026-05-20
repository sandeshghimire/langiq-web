import { PROOF_STRIP as DEFAULT_PROOF_STRIP } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type ProofStripContent = Widen<typeof DEFAULT_PROOF_STRIP>;

export function ProofStrip({ content = DEFAULT_PROOF_STRIP }: { content?: ProofStripContent }) {
    // Duplicate for seamless loop
    const doubled = [...content.items, ...content.items];

    return (
        <div
            style={{
                background: "var(--bg-surface)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "13px 0",
                overflow: "hidden",
                position: "relative",
            }}
            aria-label="Technologies and interfaces validated"
        >
            {/* Left fade */}
            <div
                style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: "100px",
                    background: "linear-gradient(to right, var(--bg-surface), transparent)",
                    zIndex: 1, pointerEvents: "none",
                }}
                aria-hidden="true"
            />
            {/* Right fade */}
            <div
                style={{
                    position: "absolute", right: 0, top: 0, bottom: 0,
                    width: "100px",
                    background: "linear-gradient(to left, var(--bg-surface), transparent)",
                    zIndex: 1, pointerEvents: "none",
                }}
                aria-hidden="true"
            />

            <div className="marquee-track" style={{ width: "max-content" }}>
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        style={{
                            fontFamily: "var(--font-jetbrains, monospace)",
                            fontSize: "11px",
                            letterSpacing: "0.13em",
                            color: "var(--text-tertiary)",
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "0 20px",
                        }}
                    >
                        {item}
                        <span
                            style={{
                                display: "inline-block",
                                width: "3px",
                                height: "3px",
                                borderRadius: "50%",
                                background: "var(--border-strong)",
                                marginLeft: "20px",
                                flexShrink: 0,
                            }}
                            aria-hidden="true"
                        />
                    </span>
                ))}
            </div>
        </div>
    );
}
