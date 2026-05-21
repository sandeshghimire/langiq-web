"use client";
import { motion } from "framer-motion";

export function TelemetryBar() {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: "rgba(0,0,0,0.72)",
                borderTop: "1px solid var(--border)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                gap: "0",
                overflowX: "auto",
            }}
            aria-label="Telemetry status bar"
        >
            <span
                style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    color: "var(--accent)",
                    whiteSpace: "nowrap",
                    opacity: 0.85,
                }}
            >
                IV&amp;V / TELEMETRY
            </span>
            <Sep />
            <Stat label="ACTIVE NODE_COUNT" value="02" />
            <Sep />
            <Stat label="SAMPLES" value="123,526" />
            <Sep />
            <Stat label="UPTIME" value="99.94%" />
            <Sep />
            <Stat label="SCHEMA" value="v1.0.0" />
        </motion.div>
    );
}

function Sep() {
    return (
        <span
            style={{
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "10px",
                color: "var(--border)",
                margin: "0 10px",
                opacity: 0.7,
            }}
        >
            ::
        </span>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <span
            style={{
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
            }}
        >
            <span style={{ color: "var(--text-secondary)", opacity: 0.7 }}>{label} </span>
            <span style={{ color: "var(--text-primary)" }}>{value}</span>
        </span>
    );
}
