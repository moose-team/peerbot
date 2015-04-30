#!/usr/bin/env node

process.chdir(__dirname + '/../')

var exec = require('shelljs').exec

exec('electron-spawn . $@')
