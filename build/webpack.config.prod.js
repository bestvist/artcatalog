const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const pkg = require('../package.json')

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: './src/core/index.ts',
    output: {
        libraryTarget: 'umd',
        library: pkg.name,
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})