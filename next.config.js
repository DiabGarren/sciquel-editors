/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        reactStrictMode: false,
        swcMinify: false,
        serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"]
    },
};

module.exports = nextConfig;
