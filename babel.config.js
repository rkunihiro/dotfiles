module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                loose: true,
                modules: "commonjs",
                targets: {
                    chrome: 88, // 64,
                    ios: 14, // 9,
                    // ie: 11,
                },
                useBuiltIns: "usage",
                corejs: "3.13",
                // debug: true,
            },
        ],
        // Transpile TypeScript using Babel
        "@babel/preset-typescript",
        // Support React JSX
        "@babel/preset-react",
    ],
};
