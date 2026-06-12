"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { DataPanel } from "./shared";

/**
 * Animated terminal log. Types out a sequence of lines (one char at a
 * time) when the panel becomes active, then holds at the final line.
 *
 * This is a self-contained component (no parent state needed) so it can
 * be reused across slides — pass a different `lines` array per slide.
 */
export function TerminalLines({
    active,
    lines,
    accent,
    label = "BOOT LOG",
    status = "LIVE",
    minHeight = 280,
    typingSpeed = 14,
    postTypeHold = 1400,
}: {
    active: boolean;
    lines: string[];
    accent: string;
    label?: string;
    status?: string;
    minHeight?: number;
    typingSpeed?: number;
    postTypeHold?: number;
}) {
    const reducedMotion = useReducedMotion();
    const [charCount, setCharCount] = useState(0);
    // Re-mount via `key` is impractical here because we want the
    // component to drive its own state. We use a ref-guard: the first time
    // the panel becomes active, kick off the typewriter; subsequent
    // re-activations without a stage change short-circuit.
    const startedRef = React.useRef(false);

    useEffect(() => {
        if (!active) {
            // Reset when leaving; this is a legitimate external-system
            // sync (slide change), not a cascading render.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCharCount(0);
            startedRef.current = false;
            return;
        }
        if (startedRef.current) return;
        startedRef.current = true;
        if (reducedMotion) {
            const total = lines.join("\n").length;
            setCharCount(total);
            return;
        }
        const total = lines.join("\n").length;
        let i = 0;
        const interval = setInterval(() => {
            i = Math.min(i + 2, total);
            setCharCount(i);
            if (i >= total) {
                clearInterval(interval);
                // Hold the final line, then nothing else — caller can re-mount to
                // re-trigger.
                void postTypeHold;
            }
        }, typingSpeed);
        return () => clearInterval(interval);
    }, [active, lines, reducedMotion, typingSpeed, postTypeHold]);

    const full = lines.join("\n");
    const visible = full.slice(0, charCount);
    const visibleLines = visible.split("\n");
    const lastLineLength = visibleLines[visibleLines.length - 1]?.length ?? 0;

    return (
        <DataPanel active={active} label={label} status={status} accent={accent} minHeight={minHeight}>
            <div className="font-mono text-[10px] leading-[1.55] text-[#16181a]">
                {visibleLines.map((line, idx) => {
                    // Highlight the active step in accent color, plus any line
                    // that ends in "OK" or "✓" — those are success markers.
                    const isStep = /^\s*\[\s*\d+\.\d+\]/.test(line);
                    const isOk = /\[ OK \]|✓/.test(line);
                    const isErr = /\[FAILED\]|ERR|panic/i.test(line);
                    const color = isErr
                        ? "#c43a3a"
                        : isOk
                            ? accent
                            : isStep
                                ? "#16181a"
                                : "#6b7075";
                    return (
                        <div
                            key={idx}
                            className="whitespace-pre-wrap break-words"
                            style={{ color }}
                        >
                            {line || "\u00A0"}
                        </div>
                    );
                })}
                {charCount < full.length && (
                    <span
                        className="inline-block w-1.5 h-3 align-middle"
                        style={{ backgroundColor: accent, marginLeft: lastLineLength > 0 ? 1 : 0 }}
                    />
                )}
            </div>
        </DataPanel>
    );
}

/**
 * Static terminal "screenshot" — no animation, just a multi-line mono
 * block. Used in BSP / Drivers / OTA slides where the log is a
 * reference, not a live trace.
 */
export function TerminalStatic({
    active,
    lines,
    accent,
    label = "OUTPUT",
    status,
    minHeight = 200,
    highlightLast = false,
}: {
    active: boolean;
    lines: string[];
    accent: string;
    label?: string;
    status?: string;
    minHeight?: number;
    highlightLast?: boolean;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            status={status}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="font-mono text-[10px] leading-[1.55] text-[#6b7075]">
                {lines.map((line, idx) => {
                    const isOk = /\[ OK \]|✓/.test(line);
                    const isErr = /\[FAILED\]|panic/i.test(line);
                    const isLast = highlightLast && idx === lines.length - 1;
                    const color = isErr
                        ? "#c43a3a"
                        : isOk
                            ? accent
                            : isLast
                                ? "#16181a"
                                : "#6b7075";
                    return (
                        <div
                            key={idx}
                            className="whitespace-pre-wrap break-words"
                            style={{ color }}
                        >
                            {line || "\u00A0"}
                        </div>
                    );
                })}
            </div>
        </DataPanel>
    );
}

/**
 * Compact "trace" panel — a few short mono lines with a colored marker
 * to the left of each (think: a `>` prompt prefix). Useful as a
 * minimal text visualization when the slide is already content-heavy.
 */
export function PromptTrace({
    active,
    rows,
    accent,
    label = "COMMAND",
    minHeight = 180,
}: {
    active: boolean;
    rows: { prompt?: string; text: string; ok?: boolean }[];
    accent: string;
    label?: string;
    minHeight?: number;
}) {
    return (
        <DataPanel
            active={active}
            label={label}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="flex flex-col gap-1.5">
                {rows.map((row, i) => (
                    <div key={i} className="flex items-start gap-2 font-mono text-[10px]">
                        <span
                            className="font-bold select-none"
                            style={{ color: row.ok === false ? "#c43a3a" : accent }}
                        >
                            {row.prompt ?? ">"}
                        </span>
                        <span
                            className="leading-[1.5]"
                            style={{ color: row.ok === false ? "#c43a3a" : "#16181a" }}
                        >
                            {row.text}
                        </span>
                    </div>
                ))}
            </div>
        </DataPanel>
    );
}

/**
 * Bus-enumeration visual — for the BSP slide. Renders a list of bus
 * interfaces (UART / I2C / SPI / …) lighting up one by one in the
 * panel's accent color, with a hex address and a 0/1 "enumerated" flag.
 */
export function BusEnumeration({
    active,
    buses,
    accent,
    label = "ENUMERATING",
    minHeight = 240,
}: {
    active: boolean;
    buses: { name: string; addr: string; devices: number }[];
    accent: string;
    label?: string;
    minHeight?: number;
}) {
    const [revealed, setRevealed] = useState(0);
    useEffect(() => {
        if (!active) {
            // Reset on slide leave — legitimate external-system sync.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setRevealed(0);
            return;
        }
        let i = 0;
        const tick = () => {
            i = Math.min(i + 1, buses.length);
            setRevealed(i);
            if (i < buses.length) {
                setTimeout(tick, 380);
            }
        };
        const t = setTimeout(tick, 350);
        return () => clearTimeout(t);
    }, [active, buses.length]);

    return (
        <DataPanel
            active={active}
            label={label}
            status={`${revealed}/${buses.length} BUSSES`}
            accent={accent}
            minHeight={minHeight}
        >
            <div className="flex flex-col gap-1">
                {buses.map((bus, i) => {
                    const lit = i < revealed;
                    return (
                        <div
                            key={bus.name}
                            className="flex items-center justify-between gap-2 font-mono text-[10px] py-1.5 border-b border-dashed border-[#e4e2dd] last:border-0"
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    className="inline-block w-1.5 h-1.5 rounded-full transition-colors"
                                    style={{ backgroundColor: lit ? accent : "#e4e2dd" }}
                                />
                                <span
                                    className="font-bold"
                                    style={{ color: lit ? "#16181a" : "#6b7075" }}
                                >
                                    {bus.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#6b7075]">{bus.addr}</span>
                                <span
                                    className="font-bold"
                                    style={{ color: lit ? accent : "#e4e2dd" }}
                                >
                                    {bus.devices} {bus.devices === 1 ? "dev" : "devs"}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </DataPanel>
    );
}
