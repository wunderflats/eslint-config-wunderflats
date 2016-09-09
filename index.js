'use strict'

const fs = require('fs')

module.exports = JSON.parse(fs.readFileSync('./.eslintrc', 'utf-8'))
