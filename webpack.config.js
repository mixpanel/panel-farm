const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const path = require(`path`);


const babelLoader = {
  loader: `babel-loader`,
  options: {
    presets: [`env`],
  },
};

const webpackConfig = {
  entry: `./index.js`,
  output: {
    path: path.join(__dirname, `build`),
    filename: `panel-farm.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
        ],
      },
      {
        test: /\.jade$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: `virtual-jade-loader`,
            options: {
              vdom: `snabbdom`,
              runtime: `var h = require("panel").h;`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: 'index.template.html',
    }),
  ],
};

module.exports = webpackConfig;
