const NODE_ENV = 'development';
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    mode: NODE_ENV,

    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it use publicPath in webpackOptions.output
                      //publicPath: '../'
                    }
                  },
                  "css-loader"
                ]
              },
            {
                test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024'
            }
        ]
    }
}