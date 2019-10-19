const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = (proc) => {
  console.log(proc);
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
            // include: [path.resolve(__dirname)],
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          },

          //first thing is sass,
        ]
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
        contentBase: path.join(__dirname, 'public'),
        port: 9002
      }
    }
  )
}