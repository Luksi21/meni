/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoBase = "/meni"; // GitHub repo name → served at https://luksi21.github.io/meni/

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? `${repoBase}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
    ]
  }
};

export default nextConfig;
