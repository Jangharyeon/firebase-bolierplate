'use strict';

const expressHandlebars = require('express-handlebars');

// 환경 변수
const { PATHS } = require('../../app-config');
const hbs = expressHandlebars.create({
  defaultLayout: 'default',
  layoutsDir: PATHS.LAYOUT_DIR,
  partialsDir: PATHS.PARTIAL_DIR,
  extname: 'hbs',
});

module.exports = hbs;