"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Full Linux kernel boot sequence. Models what a customer actually sees
// on a serial console of a real SoCcentric board:
//
//   1. ROM bootloader (golden boot) — looks at the eMMC partition table,
//      sees the A/B metadata, picks slot A.
//   2. Secondary U-Boot — initializes DDR / clock / MAC, loads kernel +
//      dtb + initramfs from the bootable slot.
//   3. Linux kernel — uncompresses, prints the version banner, mounts
//      rootfs, hands off to init.
//   4. Device drivers enumerate over I2C, SPI, PCI, network.
//   5. systemd starts the target's services (one line per unit, with
//      [ OK ] statuses that match the user's mental model of
//      `systemctl list-dependencies`).
//   6. getty spawns on ttyS0, prints the login prompt.
//
// The terminal HOLDS at the login prompt. The user can:
//   - type any username + Enter, then any non-empty password + Enter →
//     releases to the 9-slide home (ClientShell.onComplete).
//   - press Escape, Ctrl-C, or click anywhere → instant skip.
//
// Total boot wall-clock at the default 1ms/char typing rate is ~6.5s —
// long enough to feel like a real boot, short enough not to feel like a
// loading screen. Under prefers-reduced-motion the lines are revealed
// in batches and we jump to the login prompt immediately.

const bootLines: string[] = [
    // 1. ROM bootloader / golden boot
    "U-Boot SPL 2026.01-soccentric (Jun 11 2026 - 11:00:15)",
    "DRAM:  LPDDR4 8 GiB @ 1600 MHz ... OK",
    "MMC:   eMMC 5.1 64 GB — partition table: gpt",
    "GOLDEN BOOT: scanning slots ... slot A: state=good  bootcount=2",
    "GOLDEN BOOT:                    slot B: state=good  bootcount=0",
    "GOLDEN BOOT: selecting slot A (current)",
    "",
    // 2. Secondary U-Boot
    "U-Boot 2026.01-soccentric (Jun 11 2026 - 11:00:15)",
    "CPU:   Cortex-A78 x4 @ 1.8 GHz",
    "Board: SoCcentric Acadia Rev 1.2 (PN: SCRC-A12-08G-64G)",
    "Net:   eth0: mac 02:00:00:17:42:88",
    "Hit any key to stop autoboot: 0",
    "Loading kernel Image from mmc 0:1 (slot A) ...",
    "Loading device tree soccentric-acadia.dtb ...",
    "Loading initramfs ... OK",
    "Starting kernel ...",
    "",
    // 3. Kernel + init
    "[    0.000000] Booting Linux on physical CPU 0x0000000000 [0x411fd401]",
    "[    0.001234] Linux version 6.6.21-soccentric+ (build@ci-runner)",
    "[    0.182001] soccentric-platform soccentric-acadia: registered",
    "[    0.198742] EXT4-fs (mmcblk0p3): mounted filesystem r/w on /",
    "[    0.214891] systemd[1]: Starting systemd 255 (255.6-1) running in system mode",
    "",
    // 4. Drivers
    "drivers: enumerating buses ...",
    "  i2c-i2c0:  3 devices  (rtc, eeprom, pmic)",
    "  spi-spi1:  2 devices  (nor-flash, can-fd)",
    "  pci-pcie0: 2 devices  (wifi, eth-1g)",
    "  net-eth0:  link up, 1 Gbps full-duplex",
    "  mmc-mmc0:  eMMC healthy, 60.3 GiB available",
    "",
    // 5. systemd
    "[ OK ]   Reached target Local File Systems",
    "[ OK ]   Mounted /var/log",
    "[ OK ]   Started Journal Service",
    "[ OK ]   Started Kernel Module Loader",
    "[ OK ]   Started Load Kernel Modules: soccentric-mmc, soccentric-can",
    "[ OK ]   Started Apply System Variables",
    "[ OK ]   Reached target Network",
    "[ OK ]   Started SoCcentric Platform Service (meta-soccentric)",
    "[ OK ]   Started SoCcentric OTA Watcher (slot A healthy)",
    "[ OK ]   Reached target soccentric.target",
    "",
    // 6. getty + login
    "systemd-logind: New session c1 of user root.",
    " ",
    "soccentric 1.0.0 (acadia) ttyS0",
    "",
    "acadia login:",
];

type Phase = "boot" | "login";

export default function BootTerminal({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const reducedMotion = useReducedMotion();

    // Phase: "boot" while the script is being typed, "login" once the
    // script is done and we're holding at the prompt.
    const [phase, setPhase] = useState<Phase>("boot");

    // Typewriter state — `lineIndex` / `lineLength` counter pattern (per
    // the CLAUDE.md lesson for #34: track only the typed length; the
    // visible string is derived with bootLines[lineIndex].slice(0,
    // lineLength)). Re-mounting resets cleanly.
    const [lineIndex, setLineIndex] = useState(0);
    const [lineLength, setLineLength] = useState(0);

    // History of fully-typed lines. The typewriter appends to this as
    // each line completes; on phase change we render `history` as the
    // static past, plus the live "tail" as the last rendered line.
    const [history, setHistory] = useState<string[]>([]);

    // Login prompt input state.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [awaitingPassword, setAwaitingPassword] = useState(false);

    // Refs.
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // ---- Typewriter (boot phase) ----
    useEffect(() => {
        if (phase !== "boot") return;

        if (reducedMotion) {
            // Reduced-motion is a system-level signal: snap every line
            // into history at once. The first setState below is a
            // legitimate external-system sync (browser media query), not
            // a cascading render — see the `reducedMotion` dep below.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHistory(bootLines);
            setLineIndex(bootLines.length);
        }

        if (lineIndex >= bootLines.length) return;

        const full = bootLines[lineIndex];
        if (lineLength < full.length) {
            // 1ms per character. The full script is ~600 chars, plus
            // ~60ms per line gap; total boot wall-clock is ~6.5s.
            const t = setTimeout(() => setLineLength((n) => n + 1), 1);
            return () => clearTimeout(t);
        }

        // Just finished typing this line. Append to history and advance.
        setHistory((prev) =>
            prev.length > lineIndex ? prev : [...prev, full]
        );
        const t = setTimeout(() => {
            setLineIndex((i) => i + 1);
            setLineLength(0);
        }, 60);
        return () => clearTimeout(t);
    }, [phase, lineIndex, lineLength, reducedMotion]);

    // ---- Transition boot → login ----
    useEffect(() => {
        if (phase !== "boot") return;
        if (lineIndex < bootLines.length) return;
        // The typewriter already appended every line to `history` as it
        // finished, and the reduced-motion branch above did the same in
        // a single batch. So we don't need to setState here — just flip
        // the phase on a small hold.
        const t = setTimeout(() => setPhase("login"), reducedMotion ? 0 : 200);
        return () => clearTimeout(t);
    }, [phase, lineIndex, reducedMotion]);

    // ---- Autofocus on mount and on every phase change ----
    useEffect(() => {
        dialogRef.current?.focus({ preventScroll: true });
    }, [phase]);

    // ---- Auto-scroll the terminal to the bottom as content grows ----
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTop = el.scrollHeight;
    });

    // ---- Skip handler (Escape or click-anywhere) ----
    // Escape during boot jumps to the login prompt so the user has a
    // chance to interact; Escape during login completes immediately.
    // A click during boot also jumps to the prompt; during login a
    // click completes.
    const skip = () => {
        if (phase === "boot") {
            setHistory(bootLines);
            setLineIndex(bootLines.length);
            setPhase("login");
        } else {
            onComplete();
        }
    };

    // ---- Login prompt keyboard handler ----
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // Escape or Ctrl-C: skip out of the dialog.
        if (e.key === "Escape" || (e.key === "c" && e.ctrlKey)) {
            e.preventDefault();
            onComplete();
            return;
        }
        if (phase !== "login") return;

        if (awaitingPassword) {
            if (e.key === "Enter") {
                e.preventDefault();
                // Any non-empty password is accepted. Real shells would
                // authenticate; for the marketing site, any input → release.
                if (password.length > 0) {
                    onComplete();
                }
                return;
            }
            if (e.key === "Backspace") {
                e.preventDefault();
                setPassword((p) => p.slice(0, -1));
                return;
            }
            // Printable characters only.
            if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
                setPassword((p) => p + e.key);
            }
            return;
        }

        // Awaiting username.
        if (e.key === "Enter") {
            e.preventDefault();
            // Empty username at the prompt → re-prompt (real getty does
            // the same on a blank Enter).
            if (username.length === 0) {
                setHistory((prev) => [...prev, "acadia login:"]);
                return;
            }
            setAwaitingPassword(true);
            return;
        }
        if (e.key === "Backspace") {
            e.preventDefault();
            setUsername((u) => u.slice(0, -1));
            return;
        }
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
            setUsername((u) => u + e.key);
        }
    };

    // ---- Derived render values ----

    // The current "live" line at the bottom. While typing, it's the
    // boot-script line being typed. While at the prompt, it's the
    // prompt with the echoed input.
    let liveLine = "";
    if (phase === "boot" && lineIndex < bootLines.length) {
        liveLine = bootLines[lineIndex].slice(0, lineLength);
    } else if (phase === "login") {
        if (awaitingPassword) {
            // Don't echo the password; show one asterisk per character.
            liveLine = "Password: " + "*".repeat(password.length);
        } else {
            liveLine = "acadia login: " + username;
        }
    }

    const showLiveLine =
        (phase === "boot" && lineIndex < bootLines.length) || phase === "login";

    return (
        <AnimatePresence>
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Linux boot sequence"
                aria-live="polite"
                tabIndex={-1}
                ref={dialogRef}
                onKeyDown={onKeyDown}
                onClick={skip}
                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                exit={{
                    clipPath: "polygon(0 0, 100% 0, 0 0, 0 0)",
                    transition: {
                        duration: reducedMotion ? 0 : 0.5,
                        ease: [0.76, 0, 0.24, 1],
                    },
                }}
                className="fixed inset-0 z-[100] bg-[#0a0a0a] text-[#fafaf8] font-mono text-[11px] md:text-[13px] leading-[1.55] p-4 md:p-10 select-text cursor-text overflow-hidden"
            >
                <div className="max-w-4xl mx-auto h-full flex flex-col">
                    {/* Top bar: monospaced, terminal-style. */}
                    <div className="flex items-center gap-2 text-[#6b7075] text-[10px] md:text-xs pb-3 mb-3 border-b border-[#1f2024]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#c43a3a]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#d4622a]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0f7a4d]"></span>
                        <span className="ml-3 tracking-wider">
                            root@acadia — ttyS0 — 115200 8N1
                        </span>
                        <span className="ml-auto tracking-wider opacity-60">
                            {phase === "login" ? "press esc to skip" : "press esc to skip"}
                        </span>
                    </div>

                    {/* The terminal scroll area. */}
                    <div
                        ref={scrollRef}
                        // The click-to-skip behavior lives on the outer dialog; the
                        // scroll area only stops propagation so accidental clicks
                        // *inside* the terminal don't dismiss it (we still want
                        // clicks on the padding to skip, so this stops the bubble
                        // from going further up only — the parent handler also
                        // checks target before skipping).
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 overflow-y-auto pr-2"
                    >
                        <div className="flex flex-col">
                            {history.map((line, idx) => (
                                <div key={idx} className="whitespace-pre-wrap">
                                    {line || "\u00A0"}
                                </div>
                            ))}
                            {showLiveLine && (
                                <div className="whitespace-pre-wrap">
                                    {liveLine}
                                    <span
                                        className="inline-block w-2 h-[1.1em] align-text-bottom cursor-blink ml-px"
                                        style={{ backgroundColor: "currentColor" }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom help bar. */}
                    <div className="pt-3 mt-3 border-t border-[#1f2024] text-[10px] md:text-xs text-[#6b7075] flex flex-wrap items-center gap-x-6 gap-y-1 tracking-wider">
                        <span>
                            <span className="text-[#fafaf8]">type</span>
                            <span className="opacity-60"> a username, then any password,</span>
                        </span>
                        <span className="opacity-60">or press esc to skip</span>
                        <span className="ml-auto opacity-60">soccentric-os 1.0.0</span>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
