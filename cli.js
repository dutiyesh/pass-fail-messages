#!/usr/bin/env node
'use strict';
const meow = require('meow');
const passFailMessages = require('.');

const cli = meow([
	'Examples',
	'  $ pass-fail',
	'  The force is strong with this one.',
	'',
	'  $ pass-fail --all --type pass',
	'  A hero can be anyone.',
	'  GGGGGGGGGiddy-up!',
	'  ...',
	'',
	'Options',
	'  --all   Get all messages instead of a random message',
	'  --type  Type of message: pass|fail|all  Default: all'
]);

const type = cli.flags.type || 'all';
console.log(cli.flags.all ? passFailMessages[type].join('\n') : passFailMessages[type + 'Random']());
