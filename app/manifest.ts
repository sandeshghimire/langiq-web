import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "silicon-centric — Independent V&V Suite",
        short_name: "silicon-centric IV&V",
        description:
            "Platform-independent validation and verification for embedded systems. Yocto Linux and FreeRTOS. Six reference platforms. Evidence for ISO 26262, DO-178C, IEC 62304, and IEC 61508.",
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
