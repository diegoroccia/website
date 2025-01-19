import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  experimental: {
    turbo: {
      loaders: {
        ".md": ["raw-loader"],
      },
    },
  },
};

export default nextConfig;
