/** @type {import('next').NextConfig} */


const nextConfig = {

  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: [""],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },

  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/country/:countryName*",
          destination: "/:countryName*",
        },
      ],
    };
  },


};

module.exports = nextConfig;

