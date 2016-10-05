# eslint-config-wunderflats

Based on [Standard](https://github.com/feross/standard). We aim to have our code be Standard-compliant. However, there are some additional rules we enforce that Standard has no (strong) opinion on:

## Usage

```bash
# install `eslint` and `eslint-config-wunderflats`:
npm i eslint eslint-config-wunderflats

# create your `.eslintrc` file
echo "{
  \"extends\": \"wunderflats\"
}" > .eslintrc
```

## Rules added to Standard

### `object-curly-spacing`

```javascript
// ok
exports.ok = { a: '1' }

// not ok
exports.notOk = {a: '1'}
```

### `array-bracket-spacing`

```javascript
// ok
exports.ok = [ '1', '2' ]

// not ok
exports.notOk = ['1', '2']
```

### `max-len`

Lines may not be longer than 80 characters.

```javascript
// strings are ignored, so this is ok:
const myModule = require('../test/../test/../test/../test/../test/../test/../test/../test/../test')

// this is not ok:
myModule.doSomeCalculationThatTakesALongTimeToExplain(91872094182750910, 19248712349, 90)
```

### `require-path-exists`

```javascript
// not ok
require()
// not ok
require('some-module-that-doesn-exist')
// not ok
require('two', 'arguments')
```

### `mocha/no-exclusive-tests`

You're not allowed to use `describe.only` etc.

### `mocha/no-mocha-arrows`

You're not allowed to pass arrow functions to `describe`, `it`, etc.
