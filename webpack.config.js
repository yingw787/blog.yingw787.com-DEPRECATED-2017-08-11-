var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        'es6-shim',
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'posts': path.resolve('./posts'),
            'config': path.resolve('./config')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: path.resolve('node_modules'),
                options: {
                    presets: ['react', 'env', 'stage-0']
                }
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true, // causes conflict with global namespaced css frameworks.
                            localIndentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/favicon.ico'
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve('posts'),
                to: path.resolve('dist/posts')
            }
        ])
    ]
}
