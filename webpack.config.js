const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const REGEX = {
  CSS: /\.css$/,
  CSS_MODULE: /\.module\.css$/,
  SASS: /\.(scss|sass)$/,
  SASS_MODULE: /\.module\.(scss|sass)$/,
};
const PHASE = {
  DEV: 'development',
};

const srcDir = path.resolve(__dirname, 'src');
const publicDir = path.resolve(__dirname, 'public');
const distDir = path.resolve(__dirname, 'dist');
const testDir = path.resolve(__dirname, 'test');

const getStyleRule = ({ test, exclude, isDev, isModule }) => ({
  test,
  exclude,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
        modules: isModule && {
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64]',
        },
        importLoaders: 2,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-flexbugs-fixes', 'autoprefixer', 'postcss-fail-on-warn'],
        },
        sourceMap: isDev,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        // Prefer `dart-sass`
        implementation: require('sass'),
        sourceMap: isDev,
      },
    },
  ],
});

module.exports = (env, argv) => {
  const { mode } = argv;
  const isDev = mode === PHASE.DEV;

  return {
    entry: path.join(srcDir, 'index.tsx'),
    output: {
      path: distDir,
      publicPath: '/',
      filename: '[hash].js',
    },
    resolve: {
      extensions: ['*', '.ts', '.tsx', '.js', 'jsx'],
      alias: {
        '@': srcDir,
        '#': testDir,
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        getStyleRule({
          test: REGEX.CSS,
          exclude: REGEX.CSS_MODULE,
          isDev,
        }),
        getStyleRule({
          test: REGEX.CSS_MODULE,
          modules: true,
          isDev,
        }),
        getStyleRule({
          test: REGEX.SASS,
          exclude: REGEX.SASS_MODULE,
          isDev,
        }),
        getStyleRule({
          test: REGEX.SASS_MODULE,
          modules: true,
          isDev,
        }),
      ],
    },
    devServer: {
      static: {
        directory: publicDir,
      },
      compress: true,
      port: 9000,
      hot: true,
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(publicDir, 'index.html'),
        filename: 'index.html',
      }),
      new ForkTsCheckerWebpackPlugin(),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
      }),
    ],
  };
};
