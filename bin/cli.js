#!/usr/bin/env node

var exec = require('shelljs').exec

exec('electron-spawn . $@')
