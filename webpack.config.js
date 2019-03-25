const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');

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
        contentBase: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}