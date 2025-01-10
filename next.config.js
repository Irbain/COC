/** @type {import('next').NextConfig} */
const nextConfig = {
  //distDir: "build", removed cause it stop ".next/required-server-files.json not to be build"
  images: {
    unoptimized: true, // For amplify
  },
  // resolve: {
  //   extensions: [".ts", ".tsx"],
  // },

  async headers() {
    return [
      {
        // Match all API routes
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.clash-gems.com",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
