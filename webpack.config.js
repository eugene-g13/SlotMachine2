const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

// let mode = 'development';
// let target = 'web';

// const plugins = [
//     new MiniCssExtractPlugin(),
//     new HtmlWebpackPlugin({
//         template: './src/index.html',
//     }),
// ];

// if (process.env.NODE_ENV === 'production') {
//     mode = 'production';
//     // Temporary workaround for 'browserslist' bug that is being patched in the near future
//     target = 'browserslist';
// }

// if (process.env.SERVE) {
//   // We only want React Hot Reloading in serve mode
//   plugins.push(new ReactRefreshWebpackPlugin());
// }

module.exports = {
    mode: isProd ? "production" : "development",
    target: isDev ? "web" : "browserslist", // react-refresh plugin not working bug fix.
    entry: './src/index.tsx',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },

    devtool: isDev ? 'source-map' : false,

    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.ts(x)?$/,
            //     loader: 'ts-loader',
            //     exclude: /node_modules/,
            // },
            {
                test: /\.ts(x)?$/,
                //exclude: /node_modules/,
                //loader: 'ts-loader',
                use: [
                    isDev && {
                        loader: 'babel-loader',
                        options: { plugins: ['react-refresh/babel'] },
                    },
                    {
                        loader: 'ts-loader',
                        options: { transpileOnly: true },
                    },
                ].filter(Boolean),
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                // options: {
                //     outputPath: 'images',
                // },
            },
        ],
    },

    plugins: [
        isDev && new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ].filter(Boolean),

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
