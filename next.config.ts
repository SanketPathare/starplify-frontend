import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Automatically ensure favicon.ico and icon.png exist before Next.js builds/starts
try {
  const publicDir = path.join(process.cwd(), "public");
  const srcApple = path.join(publicDir, "apple-icon.png");
  const destIcon = path.join(publicDir, "icon.png");
  const destFav = path.join(publicDir, "favicon.ico");

  if (fs.existsSync(srcApple)) {
    if (!fs.existsSync(destIcon)) fs.copyFileSync(srcApple, destIcon);
    if (!fs.existsSync(destFav)) fs.copyFileSync(srcApple, destFav);
  }
} catch (err) {
  console.error("Failed to copy icons in next.config:", err);
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
