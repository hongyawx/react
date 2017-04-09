let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let conf = require('../config');
let prebuild = require('../script/prebuild');
let app = conf.app;
let env = process.env.NODE_ENV.trim();

//程序入口
let config = {
    entry: {
        app: path.join(app, 'index.jsx'),
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path: path.join(conf.dist, 'static'),
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        alias: {
            ROOT: conf.root,
            APP: app,
            PAGE: path.join(app, 'page'),
            UTIL: path.join(app, 'util'),
            ROUTE: path.join(app, 'route'),
            COMPONENT: path.join(app, 'component'),
            STYLE: path.join(app, 'style')
        }
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 5120,
                name: 'img/[name]-[hash:6].[ext]'
            },
            exclude: /node_modules/
        }, {
            test: /\.svg$/,
            loader: 'external-svg-sprite-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(woff2?|eot|ttf|otf)$/,
            loader: 'url-loader',
            options: {
                limit: 5120,
                name: 'fonts/[name]-[hash:6].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)$/,
            loader: 'url-loader',
            options: {
                limit: 5120,
                name: 'fonts/[name]-[hash:6].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
            __DEV__: env === 'development',
            __PROD__: env === 'production'
        })
    ]
};

if (conf.svgIcon) {
    let SvgStore = require('webpack-svgstore-plugin');
    config.plugins.push(
        new SvgStore({
            svgoOptions: {
                plugins: [
                    {removeTitle: true}
                ]
            },
            prefix: 'icon-'
        })
    );
}

module.exports = config;
