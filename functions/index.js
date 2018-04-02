const { resolve } = require('path');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

// 환경 변수
const { PATHS } = require('./app-config');

// [Set] handlebars engine
const hbs = expressHandlebars.create({
  defaultLayout: 'default',
  layoutsDir: PATHS.LAYOUT_DIR,
  partialsDir: PATHS.PARTIAL_DIR,
  extname: 'hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// [Set] Views
app.set('views', resolve(__dirname, 'src/templates', 'pages'));

app.get('/', (req, res) => {
  res.render('main');
});

exports.app = functions.https.onRequest(app);
