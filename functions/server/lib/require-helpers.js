'use strict';

const glob = require('glob');
const { existsSync } = require('fs');
const { join, resolve, parse } = require('path');

module.exports = (helperDir) => {
  if (!existsSync(helperDir)) {
    throw new Error(`${helperDir} does not exist`);
  }

  return glob.sync('**/*.js', { cwd: helperDir }).reduce((modules, file) => {
    const { dir, name } = parse(file);

    modules[join(dir, name)] = require(resolve(helperDir, file));

    return modules;
  }, {});
};