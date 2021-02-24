const path = require('path')

module.exports = {
    mode: 'development',
    
    //entry: './src/index.ts',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, )
    // },

    devtool: "source-map",
    //devtool: false, 

    devServer: {
        contentBase: './dist'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node-modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
