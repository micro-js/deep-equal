/**
 * Modules
 */

var isObject = require('@f/is-object')
var isArray = require('@f/is-array')
var has = require('@f/has')

/**
 * Expose deepEqual
 */

module.exports = deepEqual

/**
 * deepEqual
 */

function deepEqual (a, b) {
  if (a === b) return true

  if (isObject(a)) {
    if (!isObject(b)) return false

    var aKeys = Object.keys(a)
    var bKeys = Object.keys(b)

    var aKeysLen = aKeys.length
    if (aKeysLen !== bKeys.length) return false

    for (var i = 0; i < aKeysLen; ++i) {
      var key = aKeys[i]
      if (!has(key, b) || !deepEqual(a[key], b[key])) return false
    }
  } else if (isArray(a)) {
    if (!isArray(b)) return false

    var aLen = a.length
    if (aLen !== b.length) return false

    for (var i = 0; i < aLen; ++i) {
      if (!deepEqual(a[i], b[i])) return false
    }
  } else if (a !== a) {
    // *sigh* x !== x is how you reliably check for NaN
    return b !== b
  } else if (a instanceof Date) {
    if (! (b instanceof Date)) return false
    return a.getTime() === b.getTime()
  } else {
    return false
  }

  return true
}
