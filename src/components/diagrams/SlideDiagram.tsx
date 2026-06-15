"use client";

import React, { useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { StageDiagram, getHomeContext } from "./stages";
import type { PlatformData } from "@/data/platforms";

/**
 * SlideDiagram — the diagram that fills one column of the 50/50 layout.
 *
 * Morph strategy:
 *  - The **frame is persistent**: same `<motion.div>` with the same
 *    `layoutId`, so it never re-mounts across stage changes.
 *  - Only the **inner diagram body** crossfades. The crossfade is a
 *    plain opacity tween — no scale, no y-translate, no per-block
 *    stagger — so the transition reads as the diagram morphing into
 *    a new shape, not as a card flipping or a new card sliding in.
 *  - The block-level animations inside each stage (`BlockReveal`)
 *    are suppressed by default so they don't re-fire on every
 *    stage change. The result: stage 3's blocks don't fly in every
 *    time you scroll past stage 3.
 *  - Under `prefers-reduced-motion`, the crossfade is disabled and
 *    the new diagram appears instantly.
 */

export interface SlideDiagramProps {
    platform: PlatformData | null;
    stage: number;
    isHome?: boolean;
}

export const SlideDiagram: React.FC<SlideDiagramProps> = ({
    platform,
    stage,
    isHome = false,
}) => {
    const filterId = useId().replace(/:/g, "-") + "-filter";
    const reducedMotion = useReducedMotion();
    const ctx = isHome ? getHomeContext(stage) : { platform, stage, isHome: false };

    // Each slide mounts its own SlideDiagram, so the frame's layoutId must
    // be unique per instance. A shared layoutId across the 9 simultaneously
    // mounted frames makes framer-motion's shared-layout system collapse
    // them into one element and leave the rest invisible until a scroll
    // re-measures the layout.
    const frameLayoutId = `slide-diagram-frame-${isHome ? "home" : platform?.id ?? "none"}-${stage}`;

    return (
        <div className="w-full h-full flex items-center justify-center p-2 lg:p-4">
            {/* Persistent frame. The `layout` prop lets framer-motion
                FLIP-interpolate size if the parent reflows, but since
                the wrapper has a fixed aspect ratio it never does. */}
            <motion.div
                layout
                layoutId={frameLayoutId}
                transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeInOut" }}
                className="w-full max-w-[640px] aspect-[4/3] relative"
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={`diagram-${stage}`}
                        // Plain opacity crossfade. No scale, no y-shift,
                        // no rotation. The previous diagram fades out
                        // and the new one fades in over the same frame.
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                            duration: reducedMotion ? 0 : 0.45,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <StageDiagram stage={stage} ctx={ctx} filterId={filterId} />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
