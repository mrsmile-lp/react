const NODE_ENV = "development";
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    client: '/src/client.js',
    bundle: '/src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  watch: NODE_ENV == "development",
  devtool: NODE_ENV == "development" ? "source-map" : null,

  mode: NODE_ENV,

  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["css-hot-loader", MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=1024"
      }
    ]
  }
};
