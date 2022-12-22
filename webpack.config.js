const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
	module.exports = {
  	entry: './src/index.js',
  	output: {
    	filename: 'bundle.js',
   	 path: path.resolve(__dirname, 'dist')
 	 },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true
      }),
      new HtmlWebpackPlugin({
        title: 'Shape Tracker',
        template: './src/index.html',
        inject: 'body'
      })
    ],
	};