const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const pkg = require('../package.json')

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        filename: pkg.name + '.min.js',
        path: path.resolve(__dirname, '..', 'docs')
    },
    module: {
        rules: [{
            test: /\.md$/,
            use: [{
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
})