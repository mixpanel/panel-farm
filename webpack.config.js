const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const path = require(`path`);


const babelLoader = {
  loader: `babel-loader`,
  options: {
    presets: [`env`],
  },
};

const webpackConfig = {
  entry: {
    farm: `./src/index.js`,
  },
  output: {
    path: path.join(__dirname, `build`),
    filename: `[name].bundle.js`,
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
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: `css-loader`},
            {loader: `postcss-loader`},
            {loader: `stylus-loader`},
          ],
          fallback: `style-loader`,
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`[name].bundle.css`),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: 'index.template.html',
    }),
  ],
};

module.exports = webpackConfig;
