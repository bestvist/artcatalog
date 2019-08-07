const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const pkg = require('../package.json')

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        library: pkg.name,
    }
})