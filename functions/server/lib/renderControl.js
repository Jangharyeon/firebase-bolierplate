'use strict';

module.exports = (req, res, next) => {
  req.rc = {
    extra: {
      page: req.originalUrl,
    },
  };
  next();
};