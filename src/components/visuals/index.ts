"use client";

/**
 * Barrel export for the visual system. Allows imports like:
 *   import { PlatformMatrix, HiringReplacementTable } from "@/components/visuals";
 *
 * All visual components are client components and the barrel is marked
 * "use client" so the consumer doesn't have to mark each import.
 */

export { SlideVisual } from "./SlideVisual";
export { HomeVisual } from "./HomeVisual";

// Terminal / log visuals
export {
    TerminalLines,
    TerminalStatic,
    PromptTrace,
    BusEnumeration,
} from "./TerminalVisuals";

// Diagram / data-viz visuals
export {
    CapabilityGrid,
    BootChainDiagram,
    ProtocolStack,
    StatStrip,
    SpecSheet,
    StackDiagram,
    OtaTimeline,
    BarChart,
    CodeBlock,
} from "./DiagramVisuals";

// Platform-specific visuals
export {
    ArchesRpmsgLink,
    AcadiaPinout,
    ZionFabricMap,
    PinnacleTimeline,
    JoshuaTiming,
    SequoiaPcieLanes,
    PlatformMatrix,
    IndustriesGrid,
    HiringReplacementTable,
    ManufacturingTimeline,
} from "./PlatformVisuals";
