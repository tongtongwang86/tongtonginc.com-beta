import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts', // Path to a custom module for aliasing `canvas`
      },
    },
  },
};

export default nextConfig;
