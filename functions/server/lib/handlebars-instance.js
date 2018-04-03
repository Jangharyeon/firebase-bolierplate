'use strict';

const expressHandlebars = require('express-handlebars');
const requireHelpers = require('./require-helpers');

// 환경 변수
const { PATHS } = require('../../app-config');
const handlebars = module.exports = exports = expressHandlebars.create({
  defaultLayout: 'default',
  layoutsDir: PATHS.LAYOUT_DIR,
  partialsDir: PATHS.PARTIAL_DIR,
  helpers: requireHelpers(PATHS.HELPER_DIR),
  extname: 'hbs',
});

exports.reload = () => Object.assign(handlebars.helpers, requireHelpers(PATHS.HELPER_DIR));