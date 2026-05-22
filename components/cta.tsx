"use client";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { CTA as DEFAULT_CTA } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

type CtaContent = Widen<typeof DEFAULT_CTA>;

const INPUT_STYLE: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "10px 12px",
    background: "var(--bg-deep)",
    border: "1px solid var(--border-strong)",
    borderRadius: "3px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-geist, sans-serif)",
    fontSize: "14px",
    lineHeight: 1.5,
    outline: "none",
    transition: "border-color 0.15s",
    boxSizing: "border-box",
};

const LABEL_STYLE: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-jetbrains, monospace)",
    fontSize: "9px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--text-tertiary)",
    marginBottom: "6px",
};

function SuccessCard({ name }: { name: string }) {
    return (
        <div
            style={{
                background: "var(--bg-elev)",
                border: "1px solid var(--accent)",
                borderRadius: "4px",
                padding: "64px 48px",
                textAlign: "center",
            }}
        >
            <CheckCircle2
                size={48}
                color="var(--accent)"
                style={{ margin: "0 auto 24px", display: "block" }}
                aria-hidden="true"
            />
            <h3
                style={{
                    fontFamily: "var(--font-instrument-serif, serif)",
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    margin: "0 0 12px",
                }}
            >
                Message received, {name.split(" ")[0]}.
            </h3>
            <p
                style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    maxWidth: "520px",
                    margin: "0 auto",
                }}
            >
                A member of our team will be in touch shortly. No prep required — just bring
                your platform details when we connect.
            </p>
        </div>
    );
}

export function CtaSection({ content = DEFAULT_CTA }: { content?: CtaContent }) {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.company) {
            setErrorMsg("NAME, COMPANY, AND EMAIL ARE REQUIRED.");
            return;
        }
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/lead.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "connect",
                    name: form.name,
                    company: form.company,
                    email: form.email,
                    phone: form.phone || undefined,
                    message: form.message || undefined,
                }),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
        } catch {
            setStatus("error");
            setErrorMsg("SUBMISSION FAILED — PLEASE TRY AGAIN OR EMAIL US DIRECTLY.");
        }
    };

    const field = (
        id: string,
        label: string,
        type: string,
        placeholder: string,
        key: keyof typeof form,
        required = false
    ) => (
        <div>
            <label htmlFor={id} style={LABEL_STYLE}>
                {label}{required ? " *" : ""}
            </label>
            <input
                id={id}
                type={type}
                required={required}
                placeholder={placeholder}
                value={form[key]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                style={INPUT_STYLE}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
            />
        </div>
    );

    return (
        <section
            id="cta"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
                position: "relative",
                overflow: "hidden",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            aria-labelledby="cta-headline"
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto", width: "100%" }}>
                <div className="cta-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
                {/* Left: section header */}
                <Reveal>
                    <p
                        style={{
                            fontFamily: "var(--font-jetbrains, monospace)",
                            fontSize: "9px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                            margin: "0 0 16px",
                        }}
                    >
                        Connect
                    </p>
                    <h2
                        id="cta-headline"
                        style={{
                            fontFamily: "var(--font-instrument-serif, serif)",
                            fontSize: "clamp(36px, 4.5vw, 56px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.015em",
                            fontWeight: 400,
                            color: "var(--text-primary)",
                            margin: "0 0 16px",
                        }}
                    >
                        {content.headline.before}{" "}
                        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                            {content.headline.accent}
                        </em>{" "}
                        {content.headline.after}
                    </h2>
                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: 1.6,
                            color: "var(--text-secondary)",
                            margin: "0 0 0",
                        }}
                    >
                        {content.subhead}
                    </p>
                </Reveal>

                {/* Right: Form card */}
                <Reveal delay={0.1}>
                    {status === "success" ? (
                        <SuccessCard name={form.name} />
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            style={{
                                background: "var(--bg-elev)",
                                border: "1px solid var(--border)",
                                borderRadius: "4px",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    padding: "32px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px",
                                }}
                            >
                                {/* Name + Company */}
                                <div
                                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
                                    className="cta-row-grid"
                                >
                                    {field("connect-name", "Name", "text", "Jane Smith", "name", true)}
                                    {field("connect-company", "Company name", "text", "Acme Inc.", "company", true)}
                                </div>

                                {/* Email + Phone */}
                                <div
                                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
                                    className="cta-row-grid"
                                >
                                    {field("connect-email", "Email", "email", "jane@company.com", "email", true)}
                                    {field("connect-phone", "Phone number", "tel", "+1 555 000 0000", "phone")}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="connect-message" style={LABEL_STYLE}>
                                        Message
                                    </label>
                                    <textarea
                                        id="connect-message"
                                        rows={5}
                                        placeholder="Tell us about your platform, target class, or validation requirements..."
                                        value={form.message}
                                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                                        style={{
                                            ...INPUT_STYLE,
                                            resize: "vertical",
                                            minHeight: "108px",
                                        }}
                                        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                                        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                    />
                                </div>
                            </div>

                            {/* Footer: error + submit */}
                            <div
                                style={{
                                    padding: "16px 32px",
                                    borderTop: "1px solid var(--border)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "16px",
                                    flexWrap: "wrap",
                                    background: "var(--bg-surface)",
                                }}
                            >
                                <div style={{ minHeight: "18px" }}>
                                    {errorMsg && (
                                        <p
                                            style={{
                                                fontFamily: "var(--font-jetbrains, monospace)",
                                                fontSize: "9px",
                                                letterSpacing: "0.12em",
                                                color: "#FF6B6B",
                                                margin: 0,
                                            }}
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "14px 28px",
                                        background: "var(--accent)",
                                        borderRadius: "4px",
                                        border: "none",
                                        color: "#07090C",
                                        fontFamily: "var(--font-geist, sans-serif)",
                                        fontWeight: 500,
                                        fontSize: "15px",
                                        cursor: status === "loading" ? "wait" : "pointer",
                                        opacity: status === "loading" ? 0.65 : 1,
                                        transition: "box-shadow 0.2s, opacity 0.2s",
                                        letterSpacing: "0.01em",
                                        flexShrink: 0,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (status !== "loading") {
                                            e.currentTarget.style.boxShadow = "0 0 0 6px var(--accent-glow)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {status === "loading" ? "Sending…" : "Send message"}
                                    {status !== "loading" && <ArrowRight size={16} aria-hidden="true" />}
                                </button>
                            </div>
                        </form>
                    )}
                </Reveal>

                </div>{/* end two-col grid */}

                <Reveal delay={0.2}>
                    <p
                        style={{
                            fontFamily: "var(--font-jetbrains, monospace)",
                            fontSize: "10px",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "var(--text-tertiary)",
                            textAlign: "center",
                            marginTop: "24px",
                        }}
                    >
                        {content.disclaimer}
                    </p>
                </Reveal>
            </div>

            <style>{`
        @media (max-width: 500px) {
          .cta-row-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 899px) {
          .cta-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
