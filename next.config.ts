import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    experimental: {
        optimizeCss: true, // 确保启用 CSS 处理
        // turbopack: true,
        // webpack: true,  // 启用 Webpack 作为备用构建工具
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.revolut.com",
            },
        ],
    },
};

export default nextConfig;

