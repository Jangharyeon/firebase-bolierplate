'use strict';

const functions = require('firebase-functions');
const express = require('express');
const app = express();

const { ENV, PATHS } = require('./app-config');

// [Set] handlebars engine
const handlebars = require('./server/lib/handlebars-instance');
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

// [Set] Views
app.set('views', PATHS.VIEW_DIR);

if (ENV === 'development') {
  const webpackMiddleware = require('./server/middleware/webpackMiddleware');

  app.use(webpackMiddleware);
}

app.get('/', (req, res) => {
  res.render('main');
});

exports.app = functions.https.onRequest(app);
