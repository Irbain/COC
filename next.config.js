/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  // cacheHandler: require.resolve("./cache-handler.js"),
  reactStrictMode: true, // tryong for amplify
  images: {
    unoptimized: true, // For amplify
  },
  // resolve: {
  //   extensions: [".ts", ".tsx"],
  // },
};

module.exports = nextConfig;
