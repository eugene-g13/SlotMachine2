const path = require('path');
//const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
let target = 'web';

const plugins = [
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    // Temporary workaround for 'browserslist' bug that is being patched in the near future
    target = 'browserslist';
}

// if (process.env.SERVE) {
//   // We only want React Hot Reloading in serve mode
//   plugins.push(new ReactRefreshWebpackPlugin());
// }

module.exports = {
    mode: mode,
    target: target,
    entry: './src/index.tsx',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },

    devtool: 'source-map', // false

    devServer: {
        contentBase: './dist',
        hot: true,
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
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                // test: /\.(png|jpe?g|gif)$/i,
                // use: [
                //     {
                //         loader: 'file-loader',
                //     },
                // ],
                test: /\.(png|jpe?g|gif)$/i,
                //loader: 'file-loader',
                type: 'asset/resource',
                // options: {
                //     outputPath: 'images',
                // },
            },
        ],
    },

    plugins: plugins,

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
