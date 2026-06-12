"use client";

import React from "react";
import {
    CapabilityGrid,
} from "./DiagramVisuals";
import {
    PlatformMatrix,
    HiringReplacementTable,
    SequoiaPcieLanes,
    ZionFabricMap,
    AcadiaPinout,
    PinnacleTimeline,
    JoshuaTiming,
    ArchesRpmsgLink,
} from "./PlatformVisuals";

/**
 * Per-stage visual for the Home page. The Home page morphs through all
 * six platforms, so its visuals should reflect a different platform
 * identity per slide (S2=Arches, S3=Acadia, S4=Zion, S5=Pinnacle,
 * S6=Joshua, S7=Sequoia). S1 is the hero, S8 is "the platform team",
 * S9 is the closing.
 */
export function HomeVisual({ stage, active }: { stage: number; active: boolean }) {
    // Map home stage to a platform accent.
    const accents: Record<number, string> = {
        1: "#16181a",
        2: "#0f7a4d", // Arches
        3: "#c43a3a", // Acadia
        4: "#6b4fd3", // Zion
        5: "#1f6fd6", // Pinnacle
        6: "#d4622a", // Joshua
        7: "#4a6478", // Sequoia
        8: "#16181a",
        9: "#16181a",
    };
    const accent = accents[stage] ?? "#16181a";

    if (stage === 1) {
        return (
            <CapabilityGrid
                active={active}
                accent={accent}
                label="FULL STACK"
                status="6 PLATFORMS"
                items={[
                    { name: "BSP", sub: "Bring-up" },
                    { name: "Boot", sub: "Multi-stage" },
                    { name: "Kernel", sub: "Custom" },
                    { name: "Drivers", sub: "From scratch" },
                    { name: "OTA", sub: "A/B signed" },
                    { name: "SDK", sub: "eSDK" },
                    { name: "CI/CD", sub: "Reproducible" },
                    { name: "Mfg", sub: "Provisioning" },
                ]}
            />
        );
    }

    if (stage === 2) {
        return <ArchesRpmsgLink active={active} accent={accent} />;
    }

    if (stage === 3) {
        return <AcadiaPinout active={active} accent={accent} />;
    }

    if (stage === 4) {
        return <ZionFabricMap active={active} accent={accent} />;
    }

    if (stage === 5) {
        return <PinnacleTimeline active={active} accent={accent} />;
    }

    if (stage === 6) {
        return <JoshuaTiming active={active} accent={accent} />;
    }

    if (stage === 7) {
        return <SequoiaPcieLanes active={active} accent={accent} />;
    }

    if (stage === 8) {
        return <HiringReplacementTable active={active} />;
    }

    if (stage === 9) {
        return <PlatformMatrix active={active} />;
    }

    return null;
}
