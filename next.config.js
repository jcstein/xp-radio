/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Static HTML export for Cloudflare Pages. This app has no server routes.
  output: "export",
};
