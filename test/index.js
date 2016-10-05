'use strict'

const assert = require('assert')
const path = require('path')
const exec = require('child_process').exec

exec('node_modules/.bin/eslint test/fixtures/max-len.js', {
  cwd: path.resolve(__dirname, '..'),
  env: process.env
}, function (err, stdout) {
  assert.ok(err)

  assert(/exceeds the maximum line length of 80/.test(stdout),
  'does not enforce maximum line length of 80')
})

exec('node_modules/.bin/eslint test/fixtures/max-len.ok.js', {
  cwd: path.resolve(__dirname, '..'),
  env: process.env
}, function (err, stdout) {
  assert.equal(err, null, 'does not exit cleanly')

  assert.equal(/exceeds the maximum line length of 80/.test(stdout), false,
    'does not enforce maximum line length of 80')
})

exec('node_modules/.bin/eslint test/fixtures', {
  cwd: path.resolve(__dirname, '..'),
  env: process.env
}, function (err, stdout) {
  assert.ok(err)

  assert(/Unexpected exclusive mocha test/.test(stdout),
    'does not enforce exclusive mocha tests')

  assert(/Do not pass arrow functions to it()/.test(stdout),
    'does not forbid passing arrow functions to it()')

  assert(/require\(\) called with no argument/.test(stdout),
    'does not forbid calling require with no argument')

  assert(/require\(\) path is empty/.test(stdout),
    'does not forbid passing empty paths to require')

  assert(/Cannot find module/.test(stdout),
    'does not forbid requiring non-existent modules')

  assert(/require\(\) called with extra arguments/.test(stdout),
    'does not forbid calling require with extra arguments')

  assert(/A space is required after '\{'/.test(stdout),
    "does not enforce a space after '{}'")

  assert(/A space is required before '\}'/.test(stdout),
    "does not enforce a space before '}'")

  assert(/A space is required after '\['/.test(stdout),
    "does not enforce a space after '{}'")

  assert(/A space is required before '\]'/.test(stdout),
    "does not enforce a space before '}'")

  console.log('✔ all ok')
})
