'use strict';
const uniqueRandomArray = require('unique-random-array');
const pass = require('./pass.json');
const fail = require('./fail.json');

const all = pass.concat(fail).sort();

exports.pass = pass;
exports.fail = fail;
exports.all = all;
exports.passRandom = uniqueRandomArray(pass);
exports.failRandom = uniqueRandomArray(fail);
exports.allRandom = uniqueRandomArray(all);
