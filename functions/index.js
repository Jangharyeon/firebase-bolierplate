'use strict';

const { resolve } = require('path');
const functions = require('firebase-functions');
const express = require('express');
const app = express();

const { ENV, PATHS } = require('./app-config');

// [Set] handlebars engine
const handlebars = require('./server/lib/handlebars-instance');
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

// [Set] Views
app.set('views', resolve(PATHS.VIEW_DIR, 'pages'));

if (ENV === 'development') {
  const webpackMiddleware = require('./server/middleware/webpackMiddleware');

  app.use(webpackMiddleware);
}

require('./server/lib/handlebars-instance').reload();

app.get('/main', (req, res) => {
  res.render('main', {
    extra: {
      page: req.originalUrl,
    },
    type: 'server',
  });
});

app.get('*', (req, res) => {
  // root 접근 시 /main으로 redirect
  if (req.originalUrl === '/') {
    return res.redirect('/main');
  }
});

exports.app = functions.https.onRequest(app);
