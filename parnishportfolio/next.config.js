/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/graphql/:path*',
        destination: 'https://leetcode.com/graphql/:path*', // Proxy to LeetCode GraphQL endpoint
      },
    ];
  },
};

module.exports = nextConfig;
