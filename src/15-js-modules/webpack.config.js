const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  entry: {
    filename: './app.js',
  },
  output: {
    filename: './bundle.js',
  },
  // mode: 'production',
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
  ],
};
