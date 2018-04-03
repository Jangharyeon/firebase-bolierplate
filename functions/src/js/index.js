'use strict';

const $ = require('jquery');
const calculation = require('js/module/calculation');
const tmpl = require('partials/mainSub');

const x = 1000;
const y = 20;

$('body').append($(tmpl({ type: 'client' })));
console.log('sum : ', calculation.sum(x, y));
console.log('subtract : ', calculation.subtract(x, y));