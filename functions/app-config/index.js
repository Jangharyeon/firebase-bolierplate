'use strict';

/**
 * Module dependencies
 */
const { resolve } = require('path');

/** 기본 변수 */
// 프로젝트 Root
const BASEPATH = resolve(__dirname, '..');

// 구동 환경 (default 'development')
const ENVIROMENT = process.env.NODE_ENV || 'development';

exports.ENV = ENVIROMENT;

/** 디렉토리 또는 파일 경로 */
exports.PATHS = {
  // root path
  BASE_DIR: BASEPATH,

  // Javascript path
  JS_DIR: resolve(BASEPATH, 'src/js'),

  // View page path
  VIEW_DIR: resolve(BASEPATH, 'src/templates'),

  // Handlebars layout path
  LAYOUT_DIR: resolve(BASEPATH, 'src/templates', 'layouts'),

  // Handlebars partial path
  PARTIAL_DIR: resolve(BASEPATH, 'src/templates', 'partials'),

  // Handlebars helper path
  HELPER_DIR: resolve(BASEPATH, 'src/templates', 'helpers'),
};