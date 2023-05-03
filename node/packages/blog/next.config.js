const withLinaria = require("next-linaria");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withLinaria({
  ...nextConfig,
});
