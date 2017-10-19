const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.common');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

webpackConfig.devtool = 'source-map';

webpackConfig.output.path = path.resolve(__dirname, './dist');

// Use ExtractTextPlugin without livereload in production
webpackConfig.module.loaders.push({
	test: /\.css$/,
	loader: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: 'css-loader'
	})
});
webpackConfig.module.loaders.push({
	test: /\.less$/,
	loader: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: 'css-loader!less-loader'
	})
});

webpackConfig.plugins.push(new webpack.optimize.DedupePlugin())
webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())

module.exports = webpackConfig;
