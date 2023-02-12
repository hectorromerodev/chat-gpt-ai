/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  experimental: {
    appDir: true,
  },
  extends: ["plugin:@next/next/recommended", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};

module.exports = nextConfig;
