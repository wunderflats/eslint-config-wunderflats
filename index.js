'use strict'

const fs = require('fs')
const path = require('path')
const ESLINTRC_PATH = path.join(__dirname, '.eslintrc')

module.exports = JSON.parse(fs.readFileSync(ESLINTRC_PATH, 'utf-8'))
