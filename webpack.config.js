const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '/src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '/build')
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '/src/assets/index.html')
        })
    ],
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js'],
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}