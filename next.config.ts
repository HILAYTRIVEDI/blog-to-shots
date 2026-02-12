import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  serverExternalPackages: ["remotion", "@remotion/player"],
};

export default nextConfig;
