import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "**/*.md": ["raw-loader"],
      },
    },
  },
};

export default nextConfig;
