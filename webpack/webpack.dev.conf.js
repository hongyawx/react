let webpack = require('webpack');
let config = require('./webpack.base.conf');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let conf = require('../config');
let fs = require('fs');
let lessToJs = require('less-vars-to-js');
let themer = lessToJs(fs.readFileSync(`${conf.theme}`, 'utf8'));
let SOURCE_MAP = true;

config.output.filename = '[name].js';
config.output.chunkFilename = '[name].js';

config.devtool = SOURCE_MAP ? 'cheap-module-eval-source-map' : false;

// 添加热替换
config.entry.app = [
    'webpack-dev-server/client?http://localhost:'+ conf.devPort +'/',
    'webpack/hot/dev-server',
    config.entry.app
];

config.output.publicPath = '/';

// 内链CSS
config.module.loaders.push({
    test: /\.(less|css)$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(themer)}}`]
});

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: conf.entryHTML
    })
);

module.exports = config;
