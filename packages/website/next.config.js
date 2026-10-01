/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;

const nextConfig = {
  output: "export",
  basePath: "/CosmosJourneyer",   // ← your repo name
  assetPrefix: "/CosmosJourneyer/",
  images: { unoptimized: true },
};   
