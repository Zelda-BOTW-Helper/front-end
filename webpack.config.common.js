const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader', include: [path.resolve(__dirname, './app')]},
            {
                test: /\.html$/,
                loader: "ngtemplate-loader!html-loader?module=myTemplates&relativeTo=" + (path.resolve(__dirname, './'))
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?name=[path][name].[ext]&publicPath=&outputPath=./&context=app'
            }
        ]
    },
    node: {
        fs: 'empty', //for module LineNavigator which complain about this dependency
    },
    context: path.resolve(__dirname, './'),
    plugins: [
        new ExtractTextPlugin({
            filename: "styles___[hash].css",
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: 'app/index.ejs',
            chunks: ['vendors', 'app'],
            inject: false,
            //enforce scripts order into index.html, vendors must be first
            chunksSortMode: function (chunk1, chunk2) {
                var orders = ['vendors', 'app'];
                var order1 = orders.indexOf(chunk1.names[0].split("___")[0]);
                var order2 = orders.indexOf(chunk2.names[0].split("___")[0]);
                return order1 - order2;
            }
        })
    ],
    entry: {
        vendors: [ './app/vendors.ts' ],
        app: ['./app/app.ts']
    },
    output: {
        filename: '[name].bundle___[hash].js',
        publicPath: './'
    }
};
