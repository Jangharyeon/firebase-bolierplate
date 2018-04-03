'use strict';

const { resolve } = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'assets/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            babelrc: false,
          },
        }],
      },
    ],
  },
};