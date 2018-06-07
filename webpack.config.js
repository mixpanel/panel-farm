const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const path = require(`path`);
const webpack = require(`webpack`);

const {
  PROD,        // productionized build
  PUBLIC_PATH, // file-loader publicPath override
} = process.env;


const BABEL_LOADER = {
  loader: `babel-loader`,
  options: {
    presets: [`env`],
  },
};
const CSS_LOADERS = [
  {loader: `css-loader`},
  {loader: `postcss-loader`},
];
const STYLUS_LOADERS = [
  ...CSS_LOADERS,
  {loader: `stylus-loader`},
];

const fileLoaderOptions = {
  name: `[name]-[hash].[ext]`,
  outputPath: `images/`,
};
const optionalPlugins = [];

if (PROD) {
  fileLoaderOptions.publicPath = `https://mixpanel.github.io/panel-farm/images/`;
  optionalPlugins.push(new webpack.optimize.UglifyJsPlugin());
}
if (PUBLIC_PATH) {
  fileLoaderOptions.publicPath = PUBLIC_PATH;
}

const webpackConfig = {
  entry: {
    farm: `./src/index.js`,
    polyfills: [
      `@webcomponents/custom-elements`,
      `@webcomponents/shadydom`,
    ],
    'animal-badge': `./src/panel-farm/animal-badge/index.js`,
    'css-reset': './src/reset.css',
  },
  output: {
    path: path.join(__dirname, `build`),
    filename: `[name]-[hash].bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          BABEL_LOADER,
        ],
      },
      {
        test: /\.jade$/,
        exclude: /node_modules/,
        use: [
          BABEL_LOADER,
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
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: STYLUS_LOADERS,
          },
          {
            loader: ExtractTextPlugin.extract({
              use: STYLUS_LOADERS,
              fallback: `style-loader`,
            }),
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: CSS_LOADERS,
          fallback: `style-loader`,
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: `file-loader`,
            options: fileLoaderOptions,
          }
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`[name]-[hash].bundle.css`),
    new HtmlWebpackPlugin({
      template: `index.template.html`,
      chunks: [`polyfills`, `css-reset`, `farm`],
      chunksSortMode: (a, b) => a.names[0] === `polyfills` ? -1 : 1, // polyfills first
    }),
    ...optionalPlugins,
  ],
};

module.exports = webpackConfig;
