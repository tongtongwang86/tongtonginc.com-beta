import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '9to5mac.com',
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts', // Path to a custom module for aliasing `canvas`
      },
    },
  },
  devIndicators: {
    buildActivity: false,  // Disable the build activity indicator

  },
};

export default nextConfig;
