/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com"],
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
