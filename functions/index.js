'use strict';

const { resolve } = require('path');
const functions = require('firebase-functions');
const express = require('express');
const app = express();

const handlebars = require('./server/lib/handlebars-instance');

// [Set] handlebars engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

// [Set] Views
app.set('views', resolve(__dirname, 'src/templates', 'pages'));

app.get('/', (req, res) => {
  res.render('main');
});

exports.app = functions.https.onRequest(app);
