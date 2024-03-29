const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    mode: 'development',
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
    devtool: 'inline-source-map',
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        contentBase: 'dist',
        compress: true,
        open: true,
        overlay: { warnings: false, errors: true },
        publicPath: '/',
        quiet: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
})