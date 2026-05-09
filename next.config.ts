// import type { NextConfig } from "next";
// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode:true,
// };

// export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["ultimate-qa.s3.ap-south-1.amazonaws.com","ultimate-user-data.s3.ap-south-1.amazonaws.com","ultimate-bond-prod.s3.ap-south-1.amazonaws.com", "cdn-icons-png.flaticon.com"],
      remotePatterns: [{ protocol: "https" as const, hostname: "**.amazonaws.com" }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
   async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  };
 
export default withNextIntl(nextConfig);