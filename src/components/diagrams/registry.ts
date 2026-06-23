"use client";

/**
 * Per-stage diagram kind catalog. Each slide picks a diagram "kind"
 * based on its stage, and the SlideDiagram registry dispatches to the
 * right component. The kinds follow the rewritten 9-stage content
 * structure (src/data/platforms.ts):
 *
 *   "overview"   — full die / platform block assembly             (S1)
 *   "bsp"        — board bring-up + peripheral enumeration         (S2)
 *   "yocto"      — reproducible build pipeline → image → SBOM      (S3)
 *   "boot"       — multi-stage boot chain + golden boot            (S4, uses platform.bootChain)
 *   "kernel"     — driver modules docking onto the die             (S5)
 *   "rtos"       — Linux ↔ RTOS split with RPMsg link              (S6, per-platform RT core)
 *   "middleware" — base image → named industry image variants     (S7, per-platform image set)
 *   "ota"        — A/B partition split + rollback + staged rollout (S8)
 *   "sdk"        — cross-toolchain + profiling scope + CI/HIL      (S9, per-platform profiler)
 *
 * This file just defines the types and the (platform, stage) → kind
 * resolver. Actual rendering lives in the StageN components.
 */

import type { PlatformData } from "@/data/platforms";

export type DiagramKind =
    | "overview"
    | "bsp"
    | "yocto"
    | "boot"
    | "kernel"
    | "rtos"
    | "middleware"
    | "ota"
    | "sdk";

export interface DiagramContext {
    platform: PlatformData | null; // null on Home
    stage: number;
    isHome: boolean;
}

export const STAGE_TO_KIND: Record<number, DiagramKind> = {
    1: "overview",
    2: "bsp",
    3: "yocto",
    4: "boot",
    5: "kernel",
    6: "rtos",
    7: "middleware",
    8: "ota",
    9: "sdk",
};

export const KIND_TO_TITLE: Record<DiagramKind, string> = {
    overview: "OVERVIEW",
    bsp: "BOARD BRING-UP",
    yocto: "YOCTO BUILD",
    boot: "BOOT CHAIN",
    kernel: "KERNEL & DRIVERS",
    rtos: "RTOS & MCU",
    middleware: "MIDDLEWARE",
    ota: "OTA & FLEET",
    sdk: "SDK & PROFILING",
};