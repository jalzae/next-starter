/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "serverless",
  ssr: false,
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
}

module.exports = nextConfig

