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
      domains: ["ultimate-qa.s3.ap-south-1.amazonaws.com"],
    },
  };
 
export default withNextIntl(nextConfig);