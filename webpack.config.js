const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = __dirname + '/app';
const BUILD_DIR = __dirname + '/dist';

module.exports = {
	context: __dirname,
	entry: {
		app: [APP_DIR + '/index'],
	},
	output: {
		path: BUILD_DIR,
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			app: path.join(__dirname, '/app'),
			components: path.join(__dirname, '/app/components'),
			actions: path.join(__dirname, '/app/actions'),
			reducers: path.join(__dirname, '/app/reducers'),
		}
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							camelCase: true,
							importLoaders: true,
							localIdentName: '[name]_[local]_[hash:base64:5]',
							modules: true,
							namedExport: true,
							url: true,
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
};
