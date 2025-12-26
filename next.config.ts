import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Nếu bạn dùng ảnh từ các nguồn khác (ví dụ cdn.tailwindcss.com), thêm vào dưới đây
      {
        protocol: 'https',
        hostname: 'cdn.tailwindcss.com',
      }
    ],
  },
};

export default nextConfig;