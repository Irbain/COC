/** @type {import('next').NextConfig} */
const nextConfig = {
  //distDir: "build", removed cause it stop ".next/required-server-files.json not to be build"
  reactStrictMode: true, // tryong for amplify
  images: {
    unoptimized: true, // For amplify
  },
  // resolve: {
  //   extensions: [".ts", ".tsx"],
  // },
};

module.exports = nextConfig;
