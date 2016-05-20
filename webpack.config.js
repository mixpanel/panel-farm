var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var webpackConfig = {
  entry: './index.js',
  eslint: {
    configFile: '.eslintrc.json',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|panel/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.jade$/,
        exclude: /node_modules/,
        loader: 'virtual-jade',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: 'index.template.html',
    }),
  ],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
};

module.exports = webpackConfig;
