const path = require('path');
const common = require('./webpack.config.common');
const { merge } = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	// entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.s[ac]ss$/i,
	// 			use: [
	// 				'style-loader', // Creates `style` nodes from JS strings
	// 				'css-loader', // Translates CSS into CommonJS
	// 				'sass-loader', // Compiles Sass to CSS
	// 			],
	// 		},
	// 	],
	// },
	plugins: [new CleanWebpackPlugin()],

	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		template: './src/html/index.html',
	// 		chunks: ['main'],
	// 		filename: 'index.html',
	// 		inject: 'head',
	// 	}),
	// 	new HtmlWebpackPlugin({
	// 		template: './src/html/about.html',
	// 		chunks: ['main'],
	// 		filename: 'about.html',
	// 		inject: 'head',
	// 	}),
	// 	new HtmlWebpackPlugin({
	// 		template: './src/html/contact.html',
	// 		chunks: ['main'],
	// 		filename: 'contact.html',
	// 		inject: 'head',
	// 	}),
	// ],
});
