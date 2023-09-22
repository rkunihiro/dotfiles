const { resolve } = require("node:path");

const entry = {
    main: resolve(__dirname, "./src/index.tsx"),
};

const CopyWebpackPlugin = require("copy-webpack-plugin");
const copyPlugin = new CopyWebpackPlugin({
    patterns: [
        {
            from: resolve(__dirname, "./src/static"),
        },
    ],
});

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
    filename: "index.html",
    template: resolve(__dirname, "src/index.html"),
    inject: "head", // "body",
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[name]-[contenthash].css",
});

const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const webpackManifestPlugin = new WebpackManifestPlugin();

const { GenerateSW } = require("workbox-webpack-plugin");
const workboxPlugin = new GenerateSW({});

const tsRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "esbuild-loader",
            /** @type {import("esbuild").BuildOptions} */
            options: {
                loader: "tsx",
                platform: "browser",
                target: [
                    //
                    // "es2021",
                    // "node16",
                    "chrome104",
                    "safari15",
                ],
                keepNames: true,
            },
        },
    ],
};

const scssRule = {
    test: /\.s[ac]ss$/,
    exclude: /node_modules/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                url: false,
            },
        },
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: ["autoprefixer"],
                },
            },
        },
        "sass-loader",
    ],
};

const splitChunks = {
    name: "common",
    chunks: "initial",
    // chunks: 'async',
    // minSize: 20000,
    // minRemainingSize: 0,
    // minChunks: 1,
    // maxAsyncRequests: 30,
    // maxInitialRequests: 30,
    // enforceSizeThreshold: 50000,
    // cacheGroups: {
    //     defaultVendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //         reuseExistingChunk: true,
    //     },
    //     default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true,
    //     },
    // },
};

/**
 * @returns {import("webpack").Configuration}
 */
module.exports = (_env, args) => {
    const isProduction = args.mode === "production" || process.env.NODE_ENV === "production";
    const mode = isProduction ? "production" : "development";
    return {
        mode,
        entry,
        output: {
            path: resolve(__dirname, "./dist"),
            filename: "[name]-[contenthash].js",
        },
        module: {
            rules: [
                //
                scssRule,
                tsRule,
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        },
        devtool: "source-map",
        plugins: [
            //
            webpackManifestPlugin,
            copyPlugin,
            htmlPlugin,
            miniCssExtractPlugin,
            workboxPlugin,
        ],
        optimization: {
            minimize: isProduction,
            splitChunks,
        },
        devServer: {
            port: 3000,
        },
    };
};
