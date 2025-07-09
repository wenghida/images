/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 改为 export 而不是 standalone
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
