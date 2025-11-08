import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // <-- явно говорим, где корень проекта
  },
};

export default nextConfig;
