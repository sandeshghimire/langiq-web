/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable ESLint during builds
    eslint: {
        // Warning: this will completely disable ESLint during builds
        ignoreDuringBuilds: true,
    },
    // Disable type checking during builds (optional, if you also want to skip TypeScript checking)
    typescript: {
        // Warning: this will completely disable TypeScript checking during builds
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
