import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";

const securityHeaders = [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
    },
];

const nextConfig: NextConfig = {
    // allowedDevOrigins is intentionally dev-only; safe to leave for local
    allowedDevOrigins: ["108.247.124.144", "pabi"],
    ...(isStaticExport
        ? { output: "export", distDir: "out" }
        : {
            async headers() {
                return [
                    {
                        source: "/(.*)",
                        headers: securityHeaders,
                    },
                ];
            },
        }),
};

export default nextConfig;
