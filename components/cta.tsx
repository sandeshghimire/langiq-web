"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { CTA } from "@/lib/content";

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
const WEEKDAY_LABELS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekday(year: number, month: number) {
    // Returns 0 = Mon .. 6 = Sun
    const day = new Date(year, month, 1).getDay();
    return (day + 6) % 7;
}

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

const PANEL_LABEL_STYLE: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains, monospace)",
    fontSize: "9px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--text-tertiary)",
    marginBottom: "20px",
    display: "block",
};

function SuccessCard({ date, time, name }: { date: string | null; time: string | null; name: string }) {
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
                Demo scheduled, {name.split(" ")[0]}.
            </h3>
            <p
                style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    color: "var(--accent)",
                    margin: "0 0 20px",
                }}
            >
                {date} · {time} GMT
            </p>
            <p
                style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    maxWidth: "520px",
                    margin: "0 auto",
                }}
            >
                An IV&amp;V engineer will send a calendar invite and meeting link to your
                work email shortly. No prep required — just bring your platform details.
            </p>
        </div>
    );
}

export function CtaSection() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [viewYear, setViewYear] = useState(() => today.getFullYear());
    const [viewMonth, setViewMonth] = useState(() => today.getMonth());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [form, setForm] = useState({ name: "", email: "", company: "", notes: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const goToPrevMonth = () => {
        if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
        else { setViewMonth((m) => m - 1); }
    };

    const goToNextMonth = () => {
        if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
        else { setViewMonth((m) => m + 1); }
    };

    const totalDays = getDaysInMonth(viewYear, viewMonth);
    const blanks = getFirstWeekday(viewYear, viewMonth);

    const isDateDisabled = (day: number) => {
        const d = new Date(viewYear, viewMonth, day);
        const wd = d.getDay(); // 0 = Sun, 6 = Sat
        return d <= today || wd === 0 || wd === 6;
    };

    const isDateSelected = (day: number) =>
        !!selectedDate &&
        selectedDate.getFullYear() === viewYear &&
        selectedDate.getMonth() === viewMonth &&
        selectedDate.getDate() === day;

    const handleDayClick = (day: number) => {
        if (isDateDisabled(day)) return;
        setSelectedDate(new Date(viewYear, viewMonth, day));
        setSelectedTime(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.company) {
            setErrorMsg("NAME, WORK EMAIL, AND COMPANY ARE REQUIRED.");
            return;
        }
        if (!selectedDate || !selectedTime) {
            setErrorMsg("PLEASE SELECT A DATE AND TIME SLOT.");
            return;
        }
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "demo",
                    name: form.name,
                    email: form.email,
                    company: form.company,
                    notes: form.notes || undefined,
                    scheduledDate: selectedDate.toISOString().split("T")[0],
                    scheduledTime: selectedTime,
                }),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
        } catch {
            setStatus("error");
            setErrorMsg("SUBMISSION FAILED — PLEASE TRY AGAIN OR EMAIL US DIRECTLY.");
        }
    };

    const formattedDate = selectedDate
        ? selectedDate.toLocaleDateString("en-GB", {
            weekday: "long", day: "numeric", month: "long", year: "numeric",
        })
        : null;

    return (
        <section
            id="cta"
            style={{
                background: "var(--bg-deep)",
                padding: "120px 48px",
                position: "relative",
                overflow: "hidden",
            }}
            aria-labelledby="cta-headline"
        >
            {/* Radial glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "900px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse, rgba(0,217,192,0.10) 0%, transparent 65%)",
                    pointerEvents: "none",
                }}
                aria-hidden="true"
            />

            <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative" }}>
                {/* Section header */}
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
                        Schedule a Demo
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
                        {CTA.headline.before}{" "}
                        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                            {CTA.headline.accent}
                        </em>{" "}
                        {CTA.headline.after}
                    </h2>
                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: 1.6,
                            color: "var(--text-secondary)",
                            maxWidth: "600px",
                            margin: "0 0 48px",
                        }}
                    >
                        {CTA.subhead}
                    </p>
                </Reveal>

                {/* Form card */}
                <Reveal delay={0.1}>
                    {status === "success" ? (
                        <SuccessCard date={formattedDate} time={selectedTime} name={form.name} />
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
                            {/* Two-panel body */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                }}
                                className="cta-form-grid"
                            >
                                {/* ── Left: Contact details ── */}
                                <div
                                    style={{
                                        padding: "32px",
                                        borderRight: "1px solid var(--border)",
                                    }}
                                >
                                    <span style={PANEL_LABEL_STYLE}>Contact Details</span>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                        <div>
                                            <label htmlFor="demo-name" style={LABEL_STYLE}>
                                                Name *
                                            </label>
                                            <input
                                                id="demo-name"
                                                type="text"
                                                required
                                                placeholder="Jane Smith"
                                                value={form.name}
                                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                                style={INPUT_STYLE}
                                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                                                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="demo-email" style={LABEL_STYLE}>
                                                Work Email *
                                            </label>
                                            <input
                                                id="demo-email"
                                                type="email"
                                                required
                                                placeholder="jane@company.com"
                                                value={form.email}
                                                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                                style={INPUT_STYLE}
                                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                                                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="demo-company" style={LABEL_STYLE}>
                                                Company *
                                            </label>
                                            <input
                                                id="demo-company"
                                                type="text"
                                                required
                                                placeholder="Acme Inc."
                                                value={form.company}
                                                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                                                style={INPUT_STYLE}
                                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                                                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="demo-notes" style={LABEL_STYLE}>
                                                What are you validating? (optional)
                                            </label>
                                            <textarea
                                                id="demo-notes"
                                                rows={5}
                                                placeholder="Platform, regulatory requirements, key concerns..."
                                                value={form.notes}
                                                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                                                style={{
                                                    ...INPUT_STYLE,
                                                    resize: "vertical",
                                                    minHeight: "96px",
                                                }}
                                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                                                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* ── Right: Calendar ── */}
                                <div style={{ padding: "32px" }}>
                                    <span style={PANEL_LABEL_STYLE}>Select Date &amp; Time</span>

                                    {/* Month navigation */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginBottom: "16px",
                                        }}
                                    >
                                        <button
                                            type="button"
                                            onClick={goToPrevMonth}
                                            style={{
                                                background: "none",
                                                border: "1px solid var(--border)",
                                                borderRadius: "3px",
                                                padding: "5px 9px",
                                                color: "var(--text-secondary)",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                transition: "border-color 0.15s",
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                                            aria-label="Previous month"
                                        >
                                            <ChevronLeft size={13} />
                                        </button>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-jetbrains, monospace)",
                                                fontSize: "11px",
                                                letterSpacing: "0.14em",
                                                color: "var(--text-primary)",
                                            }}
                                        >
                                            {MONTH_NAMES[viewMonth].toUpperCase()} {viewYear}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={goToNextMonth}
                                            style={{
                                                background: "none",
                                                border: "1px solid var(--border)",
                                                borderRadius: "3px",
                                                padding: "5px 9px",
                                                color: "var(--text-secondary)",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                transition: "border-color 0.15s",
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
                                            aria-label="Next month"
                                        >
                                            <ChevronRight size={13} />
                                        </button>
                                    </div>

                                    {/* Weekday header row */}
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(7, 1fr)",
                                            gap: "2px",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        {WEEKDAY_LABELS.map((d) => (
                                            <div
                                                key={d}
                                                style={{
                                                    textAlign: "center",
                                                    fontFamily: "var(--font-jetbrains, monospace)",
                                                    fontSize: "8px",
                                                    letterSpacing: "0.08em",
                                                    color: (d === "SAT" || d === "SUN")
                                                        ? "rgba(71,85,105,0.5)"
                                                        : "var(--text-tertiary)",
                                                    padding: "4px 0",
                                                }}
                                            >
                                                {d}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Day grid */}
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(7, 1fr)",
                                            gap: "2px",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        {/* Leading blank cells */}
                                        {Array.from({ length: blanks }, (_, i) => (
                                            <div key={`b${i}`} />
                                        ))}

                                        {/* Day buttons */}
                                        {Array.from({ length: totalDays }, (_, i) => {
                                            const day = i + 1;
                                            const disabled = isDateDisabled(day);
                                            const selected = isDateSelected(day);
                                            return (
                                                <button
                                                    key={day}
                                                    type="button"
                                                    onClick={() => handleDayClick(day)}
                                                    disabled={disabled}
                                                    style={{
                                                        padding: "7px 0",
                                                        borderRadius: "3px",
                                                        border: selected
                                                            ? "1px solid var(--accent)"
                                                            : "1px solid transparent",
                                                        background: selected
                                                            ? "var(--accent)"
                                                            : "transparent",
                                                        color: selected
                                                            ? "#07090C"
                                                            : disabled
                                                                ? "var(--text-tertiary)"
                                                                : "var(--text-primary)",
                                                        fontFamily: "var(--font-jetbrains, monospace)",
                                                        fontSize: "11px",
                                                        cursor: disabled ? "not-allowed" : "pointer",
                                                        opacity: disabled ? 0.3 : 1,
                                                        textAlign: "center",
                                                        transition: "background 0.12s, border-color 0.12s, color 0.12s",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (!disabled && !selected) {
                                                            e.currentTarget.style.background = "var(--bg-surface)";
                                                            e.currentTarget.style.borderColor = "var(--border-strong)";
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (!disabled && !selected) {
                                                            e.currentTarget.style.background = "transparent";
                                                            e.currentTarget.style.borderColor = "transparent";
                                                        }
                                                    }}
                                                    aria-label={`${day} ${MONTH_NAMES[viewMonth]} ${viewYear}${disabled ? " (unavailable)" : ""}`}
                                                    aria-pressed={selected}
                                                >
                                                    {day}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Time slots */}
                                    {selectedDate ? (
                                        <div>
                                            <p
                                                style={{
                                                    fontFamily: "var(--font-jetbrains, monospace)",
                                                    fontSize: "8px",
                                                    letterSpacing: "0.14em",
                                                    textTransform: "uppercase",
                                                    color: "var(--text-tertiary)",
                                                    margin: "0 0 10px",
                                                }}
                                            >
                                                Available Slots — GMT+0
                                            </p>
                                            <div
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "repeat(3, 1fr)",
                                                    gap: "6px",
                                                }}
                                            >
                                                {TIME_SLOTS.map((slot) => {
                                                    const active = selectedTime === slot;
                                                    return (
                                                        <button
                                                            key={slot}
                                                            type="button"
                                                            onClick={() => setSelectedTime(slot)}
                                                            style={{
                                                                padding: "9px 4px",
                                                                border: active
                                                                    ? "1px solid var(--accent)"
                                                                    : "1px solid var(--border-strong)",
                                                                borderRadius: "3px",
                                                                background: active
                                                                    ? "rgba(0,217,192,0.10)"
                                                                    : "var(--bg-deep)",
                                                                color: active
                                                                    ? "var(--accent)"
                                                                    : "var(--text-secondary)",
                                                                fontFamily: "var(--font-jetbrains, monospace)",
                                                                fontSize: "11px",
                                                                letterSpacing: "0.06em",
                                                                cursor: "pointer",
                                                                textAlign: "center",
                                                                transition: "border-color 0.12s, background 0.12s, color 0.12s",
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                if (!active) {
                                                                    e.currentTarget.style.borderColor = "var(--accent)";
                                                                    e.currentTarget.style.color = "var(--text-primary)";
                                                                }
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                if (!active) {
                                                                    e.currentTarget.style.borderColor = "var(--border-strong)";
                                                                    e.currentTarget.style.color = "var(--text-secondary)";
                                                                }
                                                            }}
                                                            aria-pressed={active}
                                                            aria-label={`${slot} GMT`}
                                                        >
                                                            {slot}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ) : (
                                        <p
                                            style={{
                                                fontFamily: "var(--font-jetbrains, monospace)",
                                                fontSize: "9px",
                                                letterSpacing: "0.12em",
                                                color: "var(--text-tertiary)",
                                                fontStyle: "italic",
                                                margin: 0,
                                            }}
                                        >
                                            Select a date to see available slots
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Footer: status + submit */}
                            <div
                                style={{
                                    padding: "18px 32px",
                                    borderTop: "1px solid var(--border)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "16px",
                                    flexWrap: "wrap",
                                    background: "var(--bg-surface)",
                                }}
                            >
                                <div style={{ minHeight: "20px" }}>
                                    {selectedDate && selectedTime && !errorMsg && (
                                        <p
                                            style={{
                                                fontFamily: "var(--font-jetbrains, monospace)",
                                                fontSize: "9px",
                                                letterSpacing: "0.12em",
                                                color: "var(--accent)",
                                                margin: 0,
                                            }}
                                        >
                                            ✓ {formattedDate} · {selectedTime} GMT
                                        </p>
                                    )}
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
                                    {status === "loading" ? "Scheduling…" : "Schedule Demo"}
                                    {status !== "loading" && <ArrowRight size={16} aria-hidden="true" />}
                                </button>
                            </div>
                        </form>
                    )}
                </Reveal>

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
                        {CTA.disclaimer}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
