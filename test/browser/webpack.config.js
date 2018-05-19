const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const path = require(`path`);

const mainConfig = require(`../../webpack.config`);

const webpackConfig = Object.assign(mainConfig, {
  entry: {
    test: path.join(__dirname, `index.js`),
    polyfills: [
      `@webcomponents/custom-elements`,
      `@webcomponents/shadydom`,
    ],
  },
  output: Object.assign(mainConfig.output, {
    path: path.join(__dirname, `build`),
  }),
  plugins: [
    new ExtractTextPlugin(`[name]-[hash].bundle.css`),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `index.template.html`),
      chunksSortMode: (a, b) => a.names[0] === `polyfills` ? -1 : 1, // polyfills first
    }),
  ],
});

module.exports = webpackConfig;
