var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'posts': path.resolve('posts')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: path.resolve('node_modules'),
                query: {
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
                            modules: true,
                            localIndentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    }
}
