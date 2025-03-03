// eslint.config.mjs
export default {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended", // 使用 ESLint 推荐的规则
        "plugin:react/recommended", // 如果使用 React，请加入 React 插件
        "plugin:prettier/recommended", // 启用 Prettier 的 ESLint 配置
    ],
    parserOptions: {
        ecmaVersion: "latest", // 支持最新的 ECMAScript 特性
        sourceType: "module", // 使用模块化代码
        ecmaFeatures: {
            jsx: true, // 如果使用 JSX，启用该选项
        },
    },
    plugins: [
        "react", // 如果使用 React，启用该插件
        "prettier", // 启用 Prettier 插件
    ],
    rules: {
        // 在这里可以自定义 ESLint 规则
        "prettier/prettier": "error", // 使 Prettier 规则生效并标记为错误
    },
    settings: {
        react: {
            version: "detect", // 自动检测 React 版本
        },
    },
};
