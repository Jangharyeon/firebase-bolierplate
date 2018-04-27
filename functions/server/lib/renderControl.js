'use strict';

const url = require('url');

module.exports = (req, res, next) => {
  const parseUrl = url.parse(req.url);

  req.rc = {
    extra: {
      page: parseUrl.pathname,
      params: req.query,
    },
  };
  next();
};