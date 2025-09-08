// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Opsi konfigurasi Anda di sini
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;