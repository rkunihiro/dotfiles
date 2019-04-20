import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

const entry: webpack.Entry = {
    index: "./src/index.ts",
};

const output: webpack.Output = {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
};

const tsRule: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "babel-loader",
        },
        {
            loader: "ts-loader",
        },
    ],
};

const rules: webpack.RuleSetRule[] = [
    tsRule,
];

const resolve: webpack.Resolve = {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
};

const terserPlugin = new TerserPlugin({
    terserOptions: {
        compress: {
            drop_console: true,
        },
    },
});

const devServer: WebpackDevServer.Configuration = {
    port: 3000,
};

const configFn = (env: any, args: any): webpack.Configuration => {
    const isProduction = (args.mode === "production") || (process.env.NODE_ENV === "production");
    const mode = isProduction ? "production" : "development";
    const devtool = isProduction ? "hidden-source-map" : "source-map";
    const optimization: webpack.Options.Optimization = {
        minimize: isProduction,
        minimizer: [
            terserPlugin,
        ],
    };
    return {
        mode,
        entry,
        output,
        module: {
            rules,
        },
        resolve,
        optimization,
        devtool,
        devServer,
    };
};

export default configFn;
