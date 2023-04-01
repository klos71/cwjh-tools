/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    webpack: function (config) {
        config.experiments = { asyncWebAssembly: true, layers: true };

        return config;
    },
};

module.exports = nextConfig;
