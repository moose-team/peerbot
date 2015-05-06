#!/usr/bin/env node

process.chdir(__dirname + '/../')

var exec = require('shelljs').exec
exec('electron-spawn . ' + process.argv.slice(2).join(' ') + ' 2>&1 | ./node_modules/.bin/silence-chromium')
