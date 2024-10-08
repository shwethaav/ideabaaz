/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  output: "export", 
  images: {
    // domains: ["img.youtube.com"],
    unoptimized: true, 
  },
};

export default nextConfig;
