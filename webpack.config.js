const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const devConfig = require('./development');
console.log(path.join(__dirname, '/dist'), 'SDASDASDASSD');


const common = {
    entry: path.join(__dirname, 'src', '/app.jsx'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Lat Webpack',
            template: './src/index.html'
        }),
    ]
};

module.exports = function (env) {
    switch (env) {
        case 'production':
            return common;
        break;
        case 'development':
            return merge([
                common,
                devConfig()
            ]);
        break;
    }
};