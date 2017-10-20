const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.common');

webpackConfig.devtool = 'eval';

webpackConfig.output.path = path.resolve(__dirname, './dev');

// We use directly style loader instead of ExtractTextPlugin to achieve livereload
webpackConfig.module.loaders.push({
	test: /\.css$/,
	loader: 'style-loader!css-loader?sourceMap&sourceComments'
});

webpackConfig.module.loaders.push({
	test: /\.less$/,
	loader: 'style-loader!css-loader!less-loader?sourceMap&sourceComments'
});

webpackConfig.output.publicPath = 'http://localhost:'+ (process.env.ENTRY_PORT ? process.env.ENTRY_PORT : 80) + '/'

webpackConfig.watchOptions = {
	ignored: /node_modules/
};

webpackConfig.devServer = {
	contentBase: path.resolve(__dirname, './dev/'),
	stats: 'minimal' // Don't be to verbose on terminal output
};

module.exports = webpackConfig;
