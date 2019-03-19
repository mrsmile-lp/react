const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    mode: NODE_ENV,

    devServer: {
        contentBase: './dist'
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