import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow HMR/dev assets when the page is opened at 127.0.0.1 but the server hostname is localhost.
  allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;
