'use strict'

// requires are ignored, so this is ok:
const myModule = require('../test/../test/../test/../test/../test/../test/../test/../test/../index')

// this is not ok:
myModule.doSomeCalculationThatTakesALongTimeToExplain('it', 'also', 'takes', 'arguments')
