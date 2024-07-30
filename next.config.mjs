/** @type {import('next').NextConfig} */

const nextConfig = {
  // 实现部分预渲染
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
