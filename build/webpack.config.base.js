const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pkg = require('../package.json')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: pkg.name + '.min.js',
        path: path.resolve(__dirname,'..', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './examples/index.html',
            inject: true
        })
    ]
}