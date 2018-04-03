'use strict';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config');

const webpackCompiler = webpack(webpackConfig);

module.exports = webpackDevMiddleware(webpackCompiler, {
  lazy: false,
  watchOptions: {
    aggregateTimeout: 150,
    poll: true,
  },
  publicPath: '/dist',
  stats: {
    colors: true,
  },
  serverSideRender: true,
});