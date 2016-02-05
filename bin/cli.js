#!/usr/bin/env node

var path = require('path')
process.chdir(path.join(__dirname, '..'))

var exec = require('shelljs').exec
exec('electron-spawn . ' + process.argv.slice(2).join(' ') + ' 2>&1 | ./node_modules/.bin/silence-chromium')
