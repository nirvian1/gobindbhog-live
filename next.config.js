/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  
  images: {
    unoptimized: true, // Critical for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    qualities: [75, 90, 95, 100],
    
  },
  
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
// 🔥 FIX: Netlify Tailwind resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: require.resolve('tailwindcss'),
    };
    return config;
  },
}

module.exports = nextConfig
