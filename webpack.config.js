const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: [
        './src/ripples.js'
    ],
    output: {
        filename: 'ripples.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: []
}