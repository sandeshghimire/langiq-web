interface SectionLabelProps {
    label: string;
    light?: boolean;
}

export function SectionLabel({ label, light = false }: SectionLabelProps) {
    return (
        <div
            className="mb-10"
            style={{
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: light ? "var(--text-on-light-2)" : "var(--text-tertiary)",
            }}
        >
            {label}
        </div>
    );
}
