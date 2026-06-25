/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export a fully static site (no server runtime needed) — ideal for
  // Cloudflare Pages / any static host. Produces an `out/` directory.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
