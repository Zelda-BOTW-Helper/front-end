const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.common');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

webpackConfig.devtool = 'source-map';

webpackConfig.output.path = path.resolve(__dirname, './dist');

// We use directly ExtractTextPlugin without livereload in production
webpackConfig.module.loaders.push({
	test: /\.css$/,
	loader: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: 'css-loader?minimize=true'
	})
});

webpackConfig.module.loaders.push({
	test: /\.less$/,
	loader: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: 'css-loader?minimize=true!less-loader?minimize=true'
	})
});

webpackConfig.devServer = {
	contentBase: path.resolve(__dirname, './dist/'),
	stats: 'minimal' // Don't be to verbose on terminal output
};

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
	exclude: /vendors(.+)\.[tj]s/i,
	mangle: true
}));

module.exports = webpackConfig;
