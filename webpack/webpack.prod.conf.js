let webpack = require('webpack');
let config = require('./webpack.base.conf');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let conf = require('../config');
let fs = require('fs');
let lessToJs = require('less-vars-to-js');
let themer = lessToJs(fs.readFileSync(`${conf.theme}`, 'utf8'));
let SOURCE_MAP = true;

config.output.filename = '[name].[chunkhash:6].js';
config.output.chunkFilename = '[name].[chunkhash:6].js';
config.devtool = SOURCE_MAP ? 'source-map' : false;

config.module.loaders.push({
    test: /\.(less|css)$/,
    use: ExtractTextPlugin.extract(['css-loader?minimize&sourceMap', 'postcss-loader', `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(themer)}}`])
});

config.plugins.push(
    new CopyWebpackPlugin([
        {
            context: conf.static,
            from: '**/*'
        }
    ]),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: SOURCE_MAP
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'init']
    }),
    new ExtractTextPlugin({
        filename: '[name].[contenthash:6].css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: conf.entryHTML
    })
);

module.exports = config;
