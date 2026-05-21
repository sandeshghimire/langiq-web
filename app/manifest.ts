import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "SoCcentric",
        short_name: "SoCcentric",
        description:
            "Silicon-native test platforms for embedded systems: IV&V for autonomous validation evidence, HIL for hardware-in-the-loop testing, and Datalogger for multi-channel data acquisition.",
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#07090C",
        theme_color: "#00D9C0",
        categories: ["technology", "productivity", "utilities"],
        lang: "en-US",
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
        ],
    };
}
