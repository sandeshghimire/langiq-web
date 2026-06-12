"use client";

/**
 * Per-stage diagram kind catalog. Each slide picks a diagram "kind"
 * based on its stage, and the SlideDiagram registry dispatches to the
 * right component. The kinds are:
 *
 *   "overview"   — full die assembly
 *   "bsp"        — peripheral enumeration (block grid lighting up)
 *   "boot"       — boot chain flow (uses platform.bootChain)
 *   "kernel"     — driver modules docking onto the die
 *   "middleware" — pub/sub fan-out (uses platform-specific protocols)
 *   "ota"        — A/B partition split with rollback simulation
 *   "sdk"        — magnifier + code bracket glyphs + boot log
 *   "perf"       — oscilloscope + bar meters + hotspot cooling
 *   "mfg"        — panel grid stamping PROVISIONED
 *
 * This file just defines the types and the (platform, stage) → kind
 * resolver. Actual rendering lives in the StageN components.
 */

import type { PlatformData } from "@/data/platforms";

export type DiagramKind =
    | "overview"
    | "bsp"
    | "boot"
    | "kernel"
    | "middleware"
    | "ota"
    | "sdk"
    | "perf"
    | "mfg";

export interface DiagramContext {
    platform: PlatformData | null; // null on Home
    stage: number;
    isHome: boolean;
}

export const STAGE_TO_KIND: Record<number, DiagramKind> = {
    1: "overview",
    2: "bsp",
    3: "boot",
    4: "kernel",
    5: "middleware",
    6: "ota",
    7: "sdk",
    8: "perf",
    9: "mfg",
};

export const KIND_TO_TITLE: Record<DiagramKind, string> = {
    overview: "OVERVIEW",
    bsp: "BSP",
    boot: "BOOT CHAIN",
    kernel: "KERNEL & DRIVERS",
    middleware: "MIDDLEWARE",
    ota: "OTA & RECOVERY",
    sdk: "SDK & TOOLS",
    perf: "PERFORMANCE",
    mfg: "MANUFACTURING",
};
