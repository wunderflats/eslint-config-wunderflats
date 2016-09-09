'use strict'

const assert = require('assert')
const path = require('path')
const fs = require('fs')
const exec = require('child_process').exec

const EXPECTED_OUTPUT_PATH = path.join(__dirname, 'fixtures/eslint.txt')
const EXPECTED_OUTPUT = fs
  .readFileSync(EXPECTED_OUTPUT_PATH, 'utf-8')
  .replace(new RegExp('/Users/max/code/eslint-config-wunderflats/test', 'g'),
    __dirname)

exec('node_modules/.bin/eslint test/fixtures', {
  cwd: path.resolve(__dirname, '..'),
  env: process.env
}, function (err, stdout) {
  assert.ok(err)
  assert.equal(stdout, EXPECTED_OUTPUT)
  console.log('✔ all ok')
})
