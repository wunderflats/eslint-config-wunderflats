# eslint-config-wunderflats

Based on [Standard](https://github.com/feross/standard). We aim to have our code be Standard-compliant. However, there are some additional rules we enforce that Standard has no opinion on:

## `object-curly-spacing`

```javascript
// ok
exports.ok = { a: '1' }

// not ok
exports.notOk = {a: '1'}
```

## `max-len`

Lines may not be longer than 80 characters.

```javascript
// requires are ignored, so this is ok:
const myModule = require('../test/../test/../test/../test/../test/../test/../test/../test/../test')

// this is not ok:
myModule.doSomeCalculationThatTakesALongTimeToExplain('it', 'also', 'takes', 'arguments')
```

## `mocha/no-exclusive-tests`

You're not allowed to use `describe.only` etc.

## `mocha/no-mocha-arrows`

You're not allowed to pass arrow functions to `describe`, `it`, etc.
