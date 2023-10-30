/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        reactStrictMode: false,
        swcMinify: false,
        serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"]
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
            }
        ]
    }
};

module.exports = nextConfig;
