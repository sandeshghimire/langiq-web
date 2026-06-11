import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['108.247.124.144', '192.168.86.49'],
};

export default nextConfig;
