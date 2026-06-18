import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack can't statically follow `export * from '@tanstack/table-core'`
  // inside @tanstack/react-table (pulled in by the embedded Sanity Studio).
  // Transpiling them makes the re-export resolve.
  transpilePackages: ["@tanstack/react-table", "@tanstack/table-core"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
