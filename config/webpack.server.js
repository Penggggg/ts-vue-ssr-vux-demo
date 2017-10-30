"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var webpack = require("webpack");
var vuxLoader = require("vux-loader");
var nodeExternals = require("webpack-node-externals");
var VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
var DEBUG = process.env.NODE_ENV === 'development';
var webpackConfig = {
    entry: {
        index: ['./src/entry-server.ts']
    },
    target: 'node',
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '../static/server/js')
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: { vue: 'vue/dist/vue.js' }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /vux.src.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    externals: nodeExternals({
        whitelist: /\.less$/
    }),
    plugins: [
        new VueSSRServerPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(DEBUG ? 'development' : 'production'),
                VUE_ENV: JSON.stringify('server')
            }
        })
    ]
};
var config = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui']
});
exports.default = config;
