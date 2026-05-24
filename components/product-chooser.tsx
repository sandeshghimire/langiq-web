"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Wrench, Activity, ShieldCheck, FlaskConical, Factory, Wifi, BadgeCheck, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

const TAPE_ITEMS = [
    'Yocto Linux', 'FreeRTOS', 'Linux',
    'I²C', 'SPI', 'UART', 'USB', 'PCIe', 'MIPI',
    'IMU', 'ADC', 'DAC', 'Camera', 'LiDAR',
    'CAN-FD', 'ISO 26262', 'DO-178C', 'IEC 62304', 'IEC 61508',
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const } },
};

const PRODUCTS = [
    {
        href: "/ivv",
        tag: "IV&V",
        name: "Validate what your board does.",
        tagline: "Independent verification & validation on real silicon.",
        description:
            "Drop our neutral OS and HAL onto your board and we exercise compute, memory, peripherals, busses, sensors, and environmental response — from the outside, without touching your application code. Four test modes, including long-running endurance soaks. Every run lands in an append-only record store mapped to ISO 26262, DO-178C, IEC 62304, and IEC 61508.",
        stats: [
            { number: "4", label: "test modes" },
            { number: "4", label: "cert regimes" },
            { number: "0", label: "source access" },
        ],
        accent: "#00D9C0",
        accentGlow: "rgba(0,217,192,0.15)",
        border: "rgba(0,217,192,0.25)",
        hoverBorder: "rgba(0,217,192,0.55)",
    },
    {
        href: "/hil",
        tag: "HIL",
        name: "Control the world around it.",
        tagline: "Hardware-in-the-loop with bit-level fault injection.",
        description:
            "Drive your board with synthesised stimuli, replayed field captures, and deterministic fault patterns — power glitches, bus errors, sensor dropouts, environmental ramps. Microsecond timing, repeatable to the bit. Same console, same records store, same audit trail as IV&V. Closes the loop with what the Datalogger captures from the real world.",
        stats: [
            { number: "µs", label: "timing fidelity" },
            { number: "1:1", label: "field-to-HIL replay" },
            { number: "∞", label: "deterministic reruns" },
        ],
        accent: "#C9A800",
        accentGlow: "rgba(201,168,0,0.15)",
        border: "rgba(201,168,0,0.25)",
        hoverBorder: "rgba(201,168,0,0.55)",
    },
    {
        href: "/datalogger",
        tag: "Datalogger",
        name: "Capture the real world. Close the loop.",
        tagline: "Field capture that replays as a HIL stimulus.",
        description:
            "Multi-channel capture in the field — analog, digital, bus traffic, GPS/PTP-synchronised — written into the same data format the lab uses. Pull a recording off a vehicle, drone, or industrial line, drop it into HIL, and reproduce the exact event at original timing. The bug you couldn't catch on the bench is now a regression test.",
        stats: [
            { number: "GPS/PTP", label: "time sync" },
            { number: "1", label: "data format" },
            { number: "→HIL", label: "direct replay" },
        ],
        accent: "#FF6B00",
        accentGlow: "rgba(255,107,0,0.15)",
        border: "rgba(255,107,0,0.25)",
        hoverBorder: "rgba(255,107,0,0.55)",
    },
] as const;

const TRIGGERS = [
    {
        title: "A board is landing soon.",
        body: "You need an independent test plan that turns into audit-survivable records on day one — without giving up your source tree.",
        href: "/ivv",
        cta: "Start with IV&V",
        accent: "#00D9C0",
    },
    {
        title: "Mid-program and stuck.",
        body: "Intermittent bugs only show up in the field. You need to capture them, replay them on the bench, and prove the fix held.",
        href: "/datalogger",
        cta: "Capture & replay",
        accent: "#FF6B00",
    },
    {
        title: "Planning ahead.",
        body: "You're scoping the next platform. You want one validation stack that grows with the program — not three procurement battles.",
        href: "#connect",
        cta: "Talk to us",
        accent: "#C9A800",
    },
] as const;

const COVERAGE_LAYERS = [
    { name: "Compute & memory", note: "CPU, cache, MMU, RAM, flash" },
    { name: "Peripherals & busses", note: "GPIO, I²C, SPI, UART, USB, PCIe, MIPI" },
    { name: "Sensors & perception", note: "IMU, ADC, camera, LiDAR, radar" },
    { name: "Comms & networking", note: "Ethernet, CAN-FD, wireless" },
    { name: "Power & thermals", note: "rails, brown-out, dissipation" },
    { name: "Environmental", note: "temperature, humidity, vibration, EMC" },
] as const;

const COVERAGE_CONDITIONS = ["Internal (IV&V)", "Simulated (HIL)", "Real-world (Datalogger)"] as const;

const INDUSTRIES = [
    {
        name: "Safety-critical & certified",
        verticals: "Automotive · Aerospace · Defence · Medical · Rail",
        concern: "audit-survivable records mapped to ISO 26262, DO-178C / DO-254, IEC 62304, IEC 61508",
        Icon: ShieldCheck,
    },
    {
        name: "Industrial & long-lifecycle",
        verticals: "Industrial automation · Energy · Marine · Heavy equipment",
        concern: "20-year programs, environmental abuse, endurance soaks",
        Icon: Factory,
    },
    {
        name: "R&D & high-rate",
        verticals: "Robotics · Consumer · Semiconductors · Research labs",
        concern: "fast iteration without giving up the audit trail",
        Icon: FlaskConical,
    },
    {
        name: "Distributed field",
        verticals: "Telecom · Smart infrastructure · Agritech · Logistics",
        concern: "field capture that becomes a HIL regression the same week",
        Icon: Wifi,
    },
] as const;

const TRUST = [
    {
        title: "Independent by construction",
        body: "Our OS and HAL form a neutral stack. We test your board from the outside — no source-code access, no shared CI, no shared history. The independence cert regimes demand is built in.",
        Icon: ShieldCheck,
    },
    {
        title: "Dogfooded on six real platforms",
        body: "We run the suite against six in-house reference boards spanning the silicon families behind ~90% of embedded designs. Every release ships only after it survives them all.",
        Icon: Cpu,
    },
    {
        title: "25+ years in embedded",
        body: "The team has shipped silicon, bring-up, drivers, RTOS ports, and certification programs in automotive, aerospace, medical, and industrial. The platform is built on that scar tissue.",
        Icon: Wrench,
    },
    {
        title: "Records that survive an audit",
        body: "Append-only store. Three-stamp timing on every cross-boundary measurement. Operator attribution. Firmware and schema versions snapshotted at run start. Drops counted, never silent.",
        Icon: BadgeCheck,
    },
    {
        title: "AI that assists, never decides",
        body: "An on-prem LLM flags anomalies and drafts reports. Engineers own every conclusion that goes into a submission. No cloud required — suitable for classified, regulated, air-gapped programs.",
        Icon: Activity,
    },
    {
        title: "Configure-to-order, no shelfware",
        body: "Pay for the channels, protocols, and modes you actually use. Add capacity when the program grows. No bundled rack you didn't ask for, no licence tier you can't justify.",
        Icon: Settings2,
    },
] as const;

const PLATFORMS = [
    { code: "Arches", silicon: "NVIDIA Jetson", focus: "GPU compute · perception" },
    { code: "Acadia", silicon: "Raspberry Pi CM", focus: "Linux mid-range" },
    { code: "Zion", silicon: "AMD Zynq", focus: "SoC + programmable logic" },
    { code: "Pinnacle", silicon: "NXP i.MX", focus: "industrial Linux" },
    { code: "Joshua", silicon: "TI Sitara", focus: "real-time + Linux" },
    { code: "Sequoia", silicon: "x86", focus: "high-throughput compute" },
] as const;

export function ProductChooser() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{
                minHeight: "100vh",
                background: "var(--bg-deep)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 24px 120px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Left vertical tape — scrolls downward */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: "32px", overflow: "hidden", zIndex: 1,
                }}
            >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div className="vtape-down" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {[...TAPE_ITEMS, ...TAPE_ITEMS].map((item, i) => (
                        <span key={i} style={{ writingMode: "vertical-lr", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--border-strong)", padding: "14px 0", whiteSpace: "nowrap" }}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right vertical tape — scrolls upward */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute", right: 0, top: 0, bottom: 0,
                    width: "32px", overflow: "hidden", zIndex: 1,
                }}
            >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, var(--bg-deep), transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div className="vtape-up" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {[...TAPE_ITEMS, ...TAPE_ITEMS].map((item, i) => (
                        <span key={i} style={{ writingMode: "vertical-lr", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--border-strong)", padding: "14px 0", whiteSpace: "nowrap" }}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Subtle grid pattern */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                    pointerEvents: "none",
                }}
            />

            {/* ─── SECTION 1: HERO ─── */}
            <motion.section
                variants={itemVariants}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    marginTop: "56px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    maxWidth: "1100px",
                }}
            >
                {/* Rotated square mark — IV&V teal / HIL amber / Datalogger orange */}
                <div style={{ width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div
                        style={{
                            width: "52px",
                            height: "52px",
                            transform: "rotate(45deg)",
                            position: "relative",
                            overflow: "hidden",
                            border: "2px solid transparent",
                            borderRadius: "1px",
                            background:
                                "linear-gradient(#0E1218, #0E1218) padding-box, " +
                                "linear-gradient(135deg, #00D9C0 33%, #C9A800 66%, #FF6B00 100%) border-box",
                        }}
                    >
                        <div style={{ position: "absolute", inset: 0, background: "#00D9C0", clipPath: "polygon(0 0, 0% 100%, 50% 50%)", opacity: 0.9 }} />
                        <div style={{ position: "absolute", inset: 0, background: "#C9A800", clipPath: "polygon(0 0, 100% 0, 50% 50%)", opacity: 0.9 }} />
                        <div style={{ position: "absolute", inset: 0, background: "#FF6B00", clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 50% 50%)", opacity: 0.9 }} />
                    </div>
                </div>

                <span
                    style={{
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--text-secondary)",
                    }}
                >
                    INDEPENDENT EMBEDDED VALIDATION
                </span>

                <h1
                    style={{
                        fontFamily: "var(--font-instrument-serif, serif)",
                        fontStyle: "italic",
                        fontSize: "clamp(34px, 6.2vw, 68px)",
                        color: "var(--text-primary)",
                        textAlign: "center",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.08,
                        margin: 0,
                        maxWidth: "20ch",
                    }}
                >
                    Validate every part of your board — and walk into the audit with the records to prove it.
                </h1>

                <p
                    style={{
                        fontFamily: "var(--font-geist, sans-serif)",
                        fontSize: "16px",
                        color: "var(--text-secondary)",
                        textAlign: "center",
                        maxWidth: "780px",
                        lineHeight: 1.65,
                        margin: "8px 0 0",
                    }}
                >
                    Independent V&V, hardware-in-the-loop, and field capture — on one shared platform.
                    We run on the six silicon families behind roughly 90% of embedded designs, so your board is almost certainly one of ours.
                    No source-code access. Audit-survivable records on day one.
                </p>

                <p
                    style={{
                        fontFamily: "var(--font-instrument-serif, serif)",
                        fontStyle: "italic",
                        fontSize: "17px",
                        color: "var(--accent)",
                        textAlign: "center",
                        margin: "12px 0 8px",
                        opacity: 0.95,
                    }}
                >
                    embedded platforms, engineered honestly.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
                    <Link
                        href="/ivv"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 22px",
                            background: "rgba(0,217,192,0.12)",
                            border: "1px solid rgba(0,217,192,0.45)",
                            borderRadius: "4px",
                            color: "#00D9C0",
                            fontFamily: "var(--font-geist, sans-serif)",
                            fontSize: "14px",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "background 0.2s ease, border-color 0.2s ease",
                        }}
                    >
                        Explore IV&V
                        <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                    <Link
                        href="#loop"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "12px 22px",
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.18)",
                            borderRadius: "4px",
                            color: "var(--text-primary)",
                            fontFamily: "var(--font-geist, sans-serif)",
                            fontSize: "14px",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "background 0.2s ease, border-color 0.2s ease",
                        }}
                    >
                        See how it all connects
                        <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                </div>
            </motion.section>

            {/* ─── SECTION 2: TRIGGER STRIP ─── */}
            <motion.section
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <SectionLabel>Three doors in</SectionLabel>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "20px",
                        marginTop: "24px",
                    }}
                >
                    {TRIGGERS.map((t) => (
                        <Link
                            key={t.title}
                            href={t.href}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                padding: "28px 26px",
                                background: "rgba(14,18,24,0.7)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "6px",
                                textDecoration: "none",
                                borderLeft: `2px solid ${t.accent}`,
                                transition: "background 0.2s ease, border-color 0.2s ease",
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: "var(--font-instrument-serif, serif)",
                                    fontStyle: "italic",
                                    fontSize: "22px",
                                    color: "var(--text-primary)",
                                    margin: 0,
                                    lineHeight: 1.25,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {t.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-geist, sans-serif)",
                                    fontSize: "14px",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.65,
                                    margin: 0,
                                }}
                            >
                                {t.body}
                            </p>
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: t.accent,
                                    fontFamily: "var(--font-geist, sans-serif)",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    marginTop: "4px",
                                }}
                            >
                                {t.cta}
                                <ArrowRight size={13} aria-hidden="true" />
                            </span>
                        </Link>
                    ))}
                </div>
            </motion.section>

            {/* ─── SECTION 3: CLOSED LOOP ─── */}
            <motion.section
                id="loop"
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1180px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                    scrollMarginTop: "80px",
                }}
            >
                <SectionLabel>The closed loop</SectionLabel>
                <h2 style={sectionHeadingStyle}>One platform, three jobs, one record of truth.</h2>
                <p style={sectionLeadStyle}>
                    Most teams stitch validation together: a V&V vendor, a HIL rig, a separate logger,
                    a binder of CSVs. Each speaks its own dialect. The handoff is where bugs hide and the
                    audit trail breaks. We made the three jobs first-class citizens on the same platform —
                    so a capture from the field replays as a HIL stimulus, and a HIL run drops into the
                    same records store as a V&V campaign.
                </p>

                {/* Loop diagram */}
                <div
                    style={{
                        marginTop: "32px",
                        padding: "36px 24px",
                        background: "rgba(14,18,24,0.6)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "8px",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "20px",
                            alignItems: "stretch",
                        }}
                    >
                        <LoopNode color="#00D9C0" tag="IV&V" title="Validate" body="Run our neutral stack against your board. Exercise every layer from the outside." />
                        <LoopNode color="#C9A800" tag="HIL" title="Stress & inject" body="Drive it with synthetic stimuli, replayed field events, and deterministic faults." />
                        <LoopNode color="#FF6B00" tag="Datalogger" title="Capture & replay" body="Record the real world. Feed it back into HIL. Turn the field into a regression test." />
                    </div>

                    {/* Unifying bar */}
                    <div
                        style={{
                            marginTop: "28px",
                            padding: "14px 18px",
                            background: "rgba(0,0,0,0.35)",
                            border: "1px dashed rgba(255,255,255,0.14)",
                            borderRadius: "4px",
                            fontFamily: "var(--font-jetbrains, monospace)",
                            fontSize: "11px",
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--text-secondary)",
                            textAlign: "center",
                            lineHeight: 1.7,
                        }}
                    >
                        ONE BSP · ONE PROTOCOL LIBRARY · ONE DATA FORMAT · ONE RECORDS STORE · ONE CONSOLE
                    </div>
                </div>
            </motion.section>

            {/* ─── SECTION 4: THREE PRODUCT CARDS ─── */}
            <motion.section
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1440px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <SectionLabel>The three products</SectionLabel>
                <h2 style={sectionHeadingStyle}>Three jobs. Same platform.</h2>
                <p style={sectionLeadStyle}>
                    Each product can stand alone. Together they form a closed loop that shortens the path
                    from a field anomaly to a verified fix — without ever leaving the same records store.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "24px",
                        marginTop: "32px",
                    }}
                >
                    {PRODUCTS.map((p) => (
                        <motion.div
                            key={p.href}
                            whileHover={{ y: -5, boxShadow: `0 16px 48px ${p.accentGlow}` }}
                            transition={{ type: "spring", stiffness: 320, damping: 26 }}
                        >
                            <Link
                                href={p.href}
                                onMouseEnter={() => setHovered(p.tag)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    padding: "36px 32px",
                                    height: "100%",
                                    background: hovered === p.tag ? p.accentGlow : "rgba(14,18,24,0.7)",
                                    border: `1px solid ${hovered === p.tag ? p.hoverBorder : p.border}`,
                                    borderRadius: "6px",
                                    textDecoration: "none",
                                    transition: "background 0.25s ease, border-color 0.25s ease",
                                    cursor: "pointer",
                                }}
                                aria-label={`Go to ${p.tag} — ${p.name}`}
                            >
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-jetbrains, monospace)",
                                            fontSize: "10px",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: p.accent,
                                        }}
                                    >
                                        {p.tag}
                                    </span>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-instrument-serif, serif)",
                                            fontStyle: "italic",
                                            fontSize: "clamp(22px, 3vw, 30px)",
                                            color: "var(--text-primary)",
                                            lineHeight: 1.18,
                                            letterSpacing: "-0.01em",
                                            margin: 0,
                                        }}
                                    >
                                        {p.name}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-geist, sans-serif)",
                                            fontSize: "13px",
                                            color: p.accent,
                                            margin: 0,
                                            opacity: 0.9,
                                        }}
                                    >
                                        {p.tagline}
                                    </p>
                                </div>

                                <p
                                    style={{
                                        fontFamily: "var(--font-geist, sans-serif)",
                                        fontSize: "14px",
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.65,
                                        margin: 0,
                                        flexGrow: 1,
                                    }}
                                >
                                    {p.description}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "20px",
                                        paddingTop: "16px",
                                        borderTop: `1px solid rgba(255,255,255,0.06)`,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {p.stats.map((s) => (
                                        <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                            <span
                                                style={{
                                                    fontFamily: "var(--font-instrument-serif, serif)",
                                                    fontStyle: "italic",
                                                    fontSize: "22px",
                                                    color: p.accent,
                                                    lineHeight: 1,
                                                }}
                                            >
                                                {s.number}
                                            </span>
                                            <span
                                                style={{
                                                    fontFamily: "var(--font-jetbrains, monospace)",
                                                    fontSize: "9px",
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    color: "var(--text-secondary)",
                                                }}
                                            >
                                                {s.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        color: p.accent,
                                        fontFamily: "var(--font-geist, sans-serif)",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Explore {p.tag}
                                    <ArrowRight size={14} aria-hidden="true" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ─── SECTION 5: COVERAGE MATRIX ─── */}
            <motion.section
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1180px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <SectionLabel>The coverage map</SectionLabel>
                <h2 style={sectionHeadingStyle}>Every layer. Every condition. Internal, simulated, and real-world.</h2>
                <p style={sectionLeadStyle}>
                    Most validation tools cover one slice — a few peripherals, or a few environmental
                    conditions, or a few buses. Our three products were designed so the union covers the
                    whole grid: every layer of the board, exercised under every condition that matters,
                    in every domain you ship into.
                </p>

                <div
                    style={{
                        marginTop: "32px",
                        background: "rgba(14,18,24,0.65)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "8px",
                        overflow: "hidden",
                    }}
                >
                    {/* Header row */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "minmax(220px,1.4fr) repeat(3, minmax(120px,1fr))",
                            background: "rgba(0,0,0,0.35)",
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <div style={matrixHeadCell}>Layer</div>
                        {COVERAGE_CONDITIONS.map((c) => (
                            <div key={c} style={matrixHeadCell}>{c}</div>
                        ))}
                    </div>
                    {COVERAGE_LAYERS.map((row, idx) => (
                        <div
                            key={row.name}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "minmax(220px,1.4fr) repeat(3, minmax(120px,1fr))",
                                borderBottom: idx === COVERAGE_LAYERS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            <div style={{ padding: "16px 18px" }}>
                                <div style={{ fontFamily: "var(--font-geist, sans-serif)", fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>{row.name}</div>
                                <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", color: "var(--text-secondary)", letterSpacing: "0.06em", marginTop: "4px" }}>{row.note}</div>
                            </div>
                            <CoverageCell color="#00D9C0" />
                            <CoverageCell color="#C9A800" />
                            <CoverageCell color="#FF6B00" />
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        marginTop: "24px",
                        fontFamily: "var(--font-instrument-serif, serif)",
                        fontStyle: "italic",
                        fontSize: "17px",
                        color: "var(--text-secondary)",
                        textAlign: "center",
                        lineHeight: 1.6,
                    }}
                >
                    NI covers some cells. LabVIEW covers some cells. A binder of CSVs covers some cells.
                    <br />
                    <span style={{ color: "var(--text-primary)" }}>We do.</span>
                </p>
            </motion.section>

            {/* ─── SECTION 6: INDUSTRIES ─── */}
            <motion.section
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <SectionLabel>Who we build this for</SectionLabel>
                <h2 style={sectionHeadingStyle}>Four kinds of program. One platform that fits all four.</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "20px",
                        marginTop: "32px",
                    }}
                >
                    {INDUSTRIES.map((ind) => {
                        const Icon = ind.Icon;
                        return (
                            <div
                                key={ind.name}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    padding: "26px 24px",
                                    background: "rgba(14,18,24,0.7)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: "6px",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Icon size={18} aria-hidden="true" style={{ color: "var(--accent)" }} />
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-instrument-serif, serif)",
                                            fontStyle: "italic",
                                            fontSize: "20px",
                                            color: "var(--text-primary)",
                                            margin: 0,
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {ind.name}
                                    </h3>
                                </div>
                                <div
                                    style={{
                                        fontFamily: "var(--font-jetbrains, monospace)",
                                        fontSize: "10px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {ind.verticals}
                                </div>
                                <p
                                    style={{
                                        fontFamily: "var(--font-geist, sans-serif)",
                                        fontSize: "14px",
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    Dominant concern: {ind.concern}.
                                </p>
                            </div>
                        );
                    })}
                </div>
            </motion.section>

            {/* ─── SECTION 7: TRUST ROW ─── */}
            <motion.section
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <SectionLabel>Why teams bet on us</SectionLabel>
                <h2 style={sectionHeadingStyle}>Six reasons we are still on the floor when the auditor walks in.</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "20px",
                        marginTop: "32px",
                    }}
                >
                    {TRUST.map((t) => {
                        const Icon = t.Icon;
                        return (
                            <div
                                key={t.title}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    padding: "24px 22px",
                                    background: "rgba(14,18,24,0.65)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: "6px",
                                }}
                            >
                                <Icon size={18} aria-hidden="true" style={{ color: "var(--accent)" }} />
                                <h3
                                    style={{
                                        fontFamily: "var(--font-geist, sans-serif)",
                                        fontSize: "15px",
                                        color: "var(--text-primary)",
                                        margin: 0,
                                        fontWeight: 500,
                                    }}
                                >
                                    {t.title}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "var(--font-geist, sans-serif)",
                                        fontSize: "13.5px",
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {t.body}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </motion.section>

            {/* ─── SECTION 8: SIX PLATFORMS PROOF STRIP ─── */}
            <motion.section
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    marginBottom: "96px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <SectionLabel>The six platforms we dogfood</SectionLabel>
                <h2 style={sectionHeadingStyle}>Six in-house reference boards. ~90% of embedded silicon, covered.</h2>
                <p style={sectionLeadStyle}>
                    We run the entire suite against six platforms we own and maintain. Every release ships
                    only after it survives them all. Your board is almost certainly a derivative of one of these —
                    so porting the HAL is a short step, not a rebuild.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "14px",
                        marginTop: "32px",
                    }}
                >
                    {PLATFORMS.map((pf) => (
                        <div
                            key={pf.code}
                            style={{
                                padding: "20px 18px",
                                background: "rgba(14,18,24,0.7)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                borderRadius: "6px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <Cpu size={14} aria-hidden="true" style={{ color: "var(--text-secondary)" }} />
                                <span
                                    style={{
                                        fontFamily: "var(--font-jetbrains, monospace)",
                                        fontSize: "10px",
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {pf.code}
                                </span>
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-instrument-serif, serif)",
                                    fontStyle: "italic",
                                    fontSize: "18px",
                                    color: "var(--text-primary)",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {pf.silicon}
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-geist, sans-serif)",
                                    fontSize: "12px",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.5,
                                }}
                            >
                                {pf.focus}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* ─── SECTION 9: CONNECT / CTA ─── */}
            <motion.section
                id="connect"
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "780px",
                    marginBottom: "64px",
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    scrollMarginTop: "80px",
                }}
            >
                <SectionLabel center>Bring us your board</SectionLabel>
                <h2 style={{ ...sectionHeadingStyle, textAlign: "center" }}>Tell us what you are shipping. We&apos;ll scope the validation plan.</h2>
                <p style={{ ...sectionLeadStyle, textAlign: "center", margin: "16px auto 28px" }}>
                    A short conversation is enough to map your board to one of the six platforms, identify
                    which test modes earn their keep, and outline the records your auditor will actually
                    accept. No deck. No pitch. An engineer on the call.
                </p>
                <Link
                    href="mailto:hello@soccentric.com"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "14px 26px",
                        background: "rgba(0,217,192,0.14)",
                        border: "1px solid rgba(0,217,192,0.5)",
                        borderRadius: "4px",
                        color: "#00D9C0",
                        fontFamily: "var(--font-geist, sans-serif)",
                        fontSize: "14px",
                        fontWeight: 500,
                        textDecoration: "none",
                    }}
                >
                    Start a conversation
                    <ArrowRight size={14} aria-hidden="true" />
                </Link>
            </motion.section>

            {/* ─── FOOTER ─── */}
            <motion.footer
                variants={itemVariants}
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    paddingTop: "32px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        fontFamily: "var(--font-geist, sans-serif)",
                        fontSize: "13px",
                    }}
                >
                    <Link href="/ivv" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>IV&V</Link>
                    <Link href="/hil" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>HIL</Link>
                    <Link href="/datalogger" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Datalogger</Link>
                    <Link href="#connect" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Contact</Link>
                </div>
                <p
                    style={{
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--text-secondary)",
                        opacity: 0.6,
                        margin: 0,
                        textAlign: "center",
                    }}
                >
                    SoCcentric · embedded platforms, engineered honestly
                </p>
                <p
                    style={{
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        color: "var(--text-tertiary)",
                        margin: 0,
                    }}
                >
                    © SoCcentric · 2026
                </p>
            </motion.footer>
        </motion.div>
    );
}

/* ──────────────────────── helpers ──────────────────────── */

const sectionHeadingStyle: React.CSSProperties = {
    fontFamily: "var(--font-instrument-serif, serif)",
    fontStyle: "italic",
    fontSize: "clamp(26px, 3.8vw, 40px)",
    color: "var(--text-primary)",
    margin: "10px 0 0",
    lineHeight: 1.18,
    letterSpacing: "-0.015em",
    maxWidth: "26ch",
};

const sectionLeadStyle: React.CSSProperties = {
    fontFamily: "var(--font-geist, sans-serif)",
    fontSize: "15px",
    color: "var(--text-secondary)",
    lineHeight: 1.7,
    margin: "16px 0 0",
    maxWidth: "70ch",
};

const matrixHeadCell: React.CSSProperties = {
    padding: "14px 18px",
    fontFamily: "var(--font-jetbrains, monospace)",
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--text-secondary)",
};

function SectionLabel({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: center ? "center" : "flex-start",
                marginBottom: "4px",
            }}
        >
            <span
                style={{
                    width: "24px",
                    height: "1px",
                    background: "var(--accent)",
                    opacity: 0.6,
                }}
            />
            <span
                style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                }}
            >
                {children}
            </span>
        </div>
    );
}

function LoopNode({ color, tag, title, body }: { color: string; tag: string; title: string; body: string }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "22px 20px",
                background: "rgba(0,0,0,0.3)",
                border: `1px solid ${color}40`,
                borderTop: `2px solid ${color}`,
                borderRadius: "4px",
            }}
        >
            <span
                style={{
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color,
                }}
            >
                {tag}
            </span>
            <h3
                style={{
                    fontFamily: "var(--font-instrument-serif, serif)",
                    fontStyle: "italic",
                    fontSize: "22px",
                    color: "var(--text-primary)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontFamily: "var(--font-geist, sans-serif)",
                    fontSize: "13.5px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    margin: 0,
                }}
            >
                {body}
            </p>
        </div>
    );
}

function CoverageCell({ color }: { color: string }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                borderLeft: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <span
                style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: color,
                    boxShadow: `0 0 12px ${color}90`,
                }}
                aria-label="covered"
            />
        </div>
    );
}
