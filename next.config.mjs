/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Generate static files in the "out" folder
  output: "export",
  

  images: {
       unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;