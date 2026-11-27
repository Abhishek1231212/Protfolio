import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A package-lock.json in the home folder otherwise makes Turbopack pick the wrong workspace root
  turbopack: { root: __dirname },
};

export default nextConfig;
