/* eslint-env mocha */
'use strict'

// not ok:
describe.only('describe.only', function () {
  it('is not allowed')

  it('is also forbidden to pass arrow functions',
    () => Promise.reject(new Error()))
})
