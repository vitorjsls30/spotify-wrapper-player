const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    filename: './app.js',
  },
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};
