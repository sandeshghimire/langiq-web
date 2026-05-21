import { PROOF_STRIP as DEFAULT_PROOF_STRIP } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type ProofStripContent = Widen<typeof DEFAULT_PROOF_STRIP>;

function VerticalTape({ items, direction }: { items: readonly string[]; direction: "up" | "down" }) {
    const doubled = [...items, ...items];
    return (
        <div
            className={direction === "down" ? "vtape-down" : "vtape-up"}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            {doubled.map((item, i) => (
                <span
                    key={i}
                    style={{
                        writingMode: "vertical-lr",
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--border-strong)",
                        padding: "14px 0",
                        whiteSpace: "nowrap",
                    }}
                >
                    {item}
                </span>
            ))}
        </div>
    );
}

export function ProofStrip({ content = DEFAULT_PROOF_STRIP }: { content?: ProofStripContent }) {
    return (
        <>
            {/* Left fixed vertical tape — scrolls down */}
            <div
                aria-hidden="true"
                style={{
                    position: "fixed", left: 0, top: 0, bottom: 0,
                    width: "32px", overflow: "hidden", zIndex: 50,
                    pointerEvents: "none",
                }}
            >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, var(--bg-deep), transparent)", zIndex: 2 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg-deep), transparent)", zIndex: 2 }} />
                <VerticalTape items={content.items} direction="down" />
            </div>

            {/* Right fixed vertical tape — scrolls up */}
            <div
                aria-hidden="true"
                style={{
                    position: "fixed", right: 0, top: 0, bottom: 0,
                    width: "32px", overflow: "hidden", zIndex: 50,
                    pointerEvents: "none",
                }}
            >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, var(--bg-deep), transparent)", zIndex: 2 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg-deep), transparent)", zIndex: 2 }} />
                <VerticalTape items={content.items} direction="up" />
            </div>
        </>
    );
}
