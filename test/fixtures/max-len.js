'use strict'

// requires are ignored, so this is ok:
const myModule = require('../test/../test/../test/../test/../test/../test/../test/../test/../test')

// this is not ok:
myModule.doSomeCalculationThatTakesALongTimeToExplain('it', 'also', 'takes', 'arguments')
