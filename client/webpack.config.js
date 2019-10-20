const path = require('path');
require('dotenv').config({
	path: path.resolve(__dirname, '../.env')
});
const webpack = require('webpack');

module.exports = () => {
	return (
		{
			mode: 'development',
			entry: path.resolve(__dirname, 'src/entry.js'),

			output: {
				// filename: '[name].[chunkhash].js',
				filename: 'bundle.js',
				path: path.resolve(__dirname, 'public'),
			},

			// plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],

			module: {
				rules: [
					{
						test: /\.js$/,
						// include: [
						// path.resolve(__dirname, '/client/src')],
						exclude: /node_modules/,
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: [
								'@babel/plugin-proposal-class-properties',
								'@babel/plugin-transform-modules-commonjs'
							]
						}
					},
					{
						test: /\.css$/,
						use: [
							'style-loader',
							'css-loader'
						]
					},
					{
						test: /\.scss$/,
						use: [
							'style-loader',
							'css-loader',
							'sass-loader'
						]
					}
				]
			},
			resolve: {

				extensions: ['.js', '.jsx', '.css', '.scss'],
			},
			plugins: [
				new webpack.ProgressPlugin()
			],
			// optimization: {
			// 	splitChunks: {
			// 		cacheGroups: {
			// 			vendors: {
			// 				priority: -10,
			// 				test: /[\\/]node_modules[\\/]/
			// 			}
			// 		},

			// 		chunks: 'async',
			// 		minChunks: 1,
			// 		minSize: 30000,
			// 		name: true
			// 	}
			// },

			devServer: {

				open: true,
				contentBase: path.resolve(__dirname, '/public'),
				port: process.env.DEV_PORT,
				proxy: { '**': `http://127.0.0.1:${process.env.EXPRESS_PORT}` }
				// proxy: {
				// 	'/api': `127.0.0.1:${process.env.EXPRESS_PORT}`
				// }
			}
		}
	)
}
