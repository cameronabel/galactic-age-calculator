const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
	module.exports = {
  	entry: './src/index.js',
  	output: {
    	filename: 'bundle.js',
   	 path: path.resolve(__dirname, 'dist')
 	 },
    devtool: 'eval-source-map',
    plugins: [
      new ESLintPlugin(),
      new CleanWebpackPlugin({
        verbose: true
      }),
      new HtmlWebpackPlugin({
        title: 'Shape Tracker',
        template: './src/index.html',
        inject: 'body'
      })
    ],
    devServer: {
      contentBase: './dist'
        },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
              }
            }
          ]
        },
        {
          test:/\.html$/,
          use: [
            'html-loader'
          ]
        },
      ]
    }
	};