const path = require('path');
//const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = 'development';
let target = 'web';
// const plugins = [
//   new CleanWebpackPlugin(),
//   new MiniCssExtractPlugin(),
//   new HtmlWebpackPlugin({
//     template: "./src/index.html",
//   }),
// ];

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
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, )
    // },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: './dist'
        publicPath: ''
    },
 

    devtool: 'source-map',
    //devtool: false,

    devServer: {
        contentBase: './dist',
        hot: true,
    },

    module: {
        rules: [
            {
                // test: /\.css$/i,
                // test: /\.s?css$/i,
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // {
            //     test: /\.ts$/,
            //     exclude: /node-modules/,
            //     use: {
            //         loader: 'ts-loader',
            //     },
            // },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.svg$/,
            //     use: 'file-loader',
            // },
            // {
            //     test: /\.png$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 mimetype: 'image/png',
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },            
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
