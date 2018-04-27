'use strict';

const router = require('express').Router();

module.exports = router;

router.get('/main', (req, res) => {
  const { rc } = req;

  res.render('main', Object.assign({}, rc, {
    type: 'server',
  }));
});

router.get('*', (req, res) => {
  // root 접근 시 /main으로 redirect
  if (req.originalUrl === '/') {
    return res.redirect('/main');
  }
});