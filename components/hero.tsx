"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { HeroDiagram } from "./hero-diagram";
import { HERO as DEFAULT_HERO } from "@/lib/content";
import type { Widen } from "@/lib/content/types";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function useCountUp(target: number, duration = 1200, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function parseStatNumber(raw: string): number {
  const n = parseInt(raw, 10);
  return isNaN(n) ? 0 : n;
}

/** Returns true only when the stat string is a plain integer (e.g. "4", "128").
 *  Non-numeric values like "∞" or "1 MSPS" are displayed verbatim. */
function isCountable(raw: string): boolean {
  return /^\d+$/.test(raw.trim());
}

type HeroContent = Widen<typeof DEFAULT_HERO>;

export function Hero({
  content = DEFAULT_HERO,
  heroDiagram,
}: {
  content?: HeroContent;
  heroDiagram?: React.ReactNode;
}) {
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const stat0 = useCountUp(parseStatNumber(content.stats[0]?.number ?? "0"), 900, statsActive);
  const stat1 = useCountUp(parseStatNumber(content.stats[1]?.number ?? "0"), 700, statsActive);
  const stat2 = useCountUp(parseStatNumber(content.stats[2]?.number ?? "0"), 1100, statsActive);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="top"
      style={{ background: "var(--bg-deep)", position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column" }}
      aria-label="Hero"
    >
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true" />
      <div
        style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1200px", height: "900px", borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Dashboard in background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div style={{ width: "90%", maxWidth: "1400px", transform: "scale(1.05)" }}>
          {heroDiagram ?? <HeroDiagram />}
        </div>
      </motion.div>

      {/* Bottom fade into proof strip */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, var(--bg-deep))",
          pointerEvents: "none",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Centered foreground content */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 48px 0", position: "relative", zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ maxWidth: "760px", width: "100%", textAlign: "center" }}>
          <motion.div variants={itemVariants} style={{ marginBottom: "24px" }}>
            <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-secondary)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--warm)", flexShrink: 0, display: "inline-block" }} className="pulse-amber" aria-hidden="true" />
              {content.eyebrow}
            </span>
          </motion.div>
          <motion.h1 variants={itemVariants} style={{ fontFamily: "var(--font-instrument-serif, serif)", fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 1.02, letterSpacing: "-0.02em", fontWeight: 400, color: "var(--text-primary)", margin: "0 0 28px" }}>
            {content.headline.line1}{" "}<em style={{ color: "var(--accent)", fontStyle: "italic" }}>{content.headline.accent1}</em><br />
            {content.headline.line2}{" "}<em style={{ color: "var(--accent)", fontStyle: "italic" }}>{content.headline.accent2}</em>{content.headline.line3 ? <>{" "}<span style={{ color: "var(--text-tertiary)" }}>—</span> {content.headline.line3}</> : null}{content.headline.line4 ? <><br />{content.headline.line4}</> : null}
          </motion.h1>
          <motion.p variants={itemVariants} style={{ fontSize: "19px", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 20px" }}>
            {content.subhead}
          </motion.p>
          <motion.p variants={itemVariants} style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", maxWidth: "600px", margin: "0 auto 36px", lineHeight: 1.7 }}>
            {content.note}
          </motion.p>
          <motion.div variants={itemVariants} style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px", justifyContent: "center" }}>
            <a href="#cta" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 24px", background: "var(--accent)", borderRadius: "4px", color: "#07090C", fontFamily: "var(--font-geist, sans-serif)", fontWeight: 500, fontSize: "15px", textDecoration: "none", transition: "box-shadow 0.2s", flexShrink: 0 }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 0 6px var(--accent-glow)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}>
              <Calendar size={16} aria-hidden="true" />{content.ctas.primary}<ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#architecture" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 24px", border: "1px solid var(--border-strong)", borderRadius: "4px", color: "var(--text-primary)", fontFamily: "var(--font-geist, sans-serif)", fontSize: "15px", textDecoration: "none", transition: "border-color 0.2s", flexShrink: 0 }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--text-primary)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; }}>
              {content.ctas.secondary}<ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
          <motion.div variants={itemVariants} ref={statsRef} style={{ display: "flex", gap: "0", flexWrap: "wrap", justifyContent: "center", paddingBottom: "40px", alignItems: "center" }}>
            {content.stats.flatMap((stat, i) => {
              const displayNum = i === 0 ? stat0 : i === 1 ? stat1 : stat2;
              const countable = isCountable(stat.number);
              const card = (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
                  <span className="counter-glow" style={{ fontFamily: "var(--font-instrument-serif, serif)", fontStyle: "italic", fontSize: "38px", lineHeight: 1, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                    {countable && statsActive ? displayNum : stat.number}
                  </span>
                  <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{stat.label}</span>
                </div>
              );
              if (i === 0) return [card];
              return [
                <div key={`sep-${i}`} style={{ width: "1px", height: "36px", background: "var(--border-strong)", margin: "0 36px", flexShrink: 0, alignSelf: "center" }} aria-hidden="true" />,
                card,
              ];
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
