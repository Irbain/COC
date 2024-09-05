/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true, // tryong for amplify
  images: {
    unoptimized: true, // For amplify
  },
  // resolve: {
  //   extensions: [".ts", ".tsx"],
  // },
};

module.exports = nextConfig;
