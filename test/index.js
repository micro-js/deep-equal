/**
 * Imports
 */

var equal = require('..')
var test = require('tape')

/**
 * Tests
 */

test('shallow', function (t) {
  t.ok(equal([1, 2], [1, 2]))
  t.ok(equal({a: 1, b: 3}, {a: 1, b: 3}))
  t.ok(equal(1, 1))
  t.notOk(equal([1, 2], {a: 1}))
  t.notOk(equal(1, 2))
  t.ok(equal(undefined, undefined))
  t.notOk(equal(null, undefined))

  var ms = +(new Date)
  t.ok(equal(new Date(ms), new Date(ms)))

  t.end()
})

test('deep', function (t) {
  t.ok(equal({a: {c: 1, d: 2, e: [1, 2, 3]}}, {a: {c: 1, d: 2, e: [1, 2, 3]}}))
  t.notOk(equal({a: {c: 1, d: 2, e: [1, 2, 3]}}, {a: {c: 1, d: 2, e: [1, 2, 3, 4]}}))
  t.notOk(equal({a: 1, b: undefined}, {a: 1, c: undefined}))

  t.end()
})
