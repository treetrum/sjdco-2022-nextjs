/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: { images: { layoutRaw: true } },
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["images.prismic.io"],
    },
};

module.exports = nextConfig;
