interface SectionLabelProps {
    label: string;
    light?: boolean;
}

export function SectionLabel({ label, light = false }: SectionLabelProps) {
    return (
        <div
            className="mb-10"
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: light ? "var(--text-on-light-2)" : "var(--text-tertiary)",
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    width: "18px",
                    height: "1px",
                    background: "var(--accent)",
                    opacity: light ? 0.45 : 0.65,
                    flexShrink: 0,
                }}
                aria-hidden="true"
            />
            {label}
        </div>
    );
}
