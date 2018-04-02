'use strict';

/**
 * Module dependencies
 */
const { resolve } = require('path');

/** 기본 변수 */
const BASEPATH = resolve(__dirname, '..');

/** 서버 구동 포트 */
exports.PORT = 3333;

/** 디렉토리 또는 파일 경로 */
exports.PATHS = {
  // root path
  BASE_DIR: BASEPATH,
  // Handlebars layout path
  LAYOUT_DIR: resolve(BASEPATH, 'src/templates', 'layouts'),
  // Handlebars partial path
  PARTIAL_DIR: resolve(BASEPATH, 'src/templates', 'partials'),
  // Handlebars helper path
  // LAYOUT_DIR: resolve(BASEPATH, 'src/templates', 'layouts'),
};