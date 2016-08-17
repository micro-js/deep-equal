
# deep-equal

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check two values for deep equality

## Installation

    $ npm install @f/deep-equal

## Usage

```js
var deepEqual = require('@f/deep-equal')

deepEqual({a: 1, b: [1, 2]}, {a: 1, b: [1, 2]})    // true
deepEqual({a: 1, b: [1, 2]}, {a: 1, b: [1, 2, 3]}) // false
```

## API

### deepEqual(a, b)

- `a` - Value to compare against `b`
- `b` - Value to compare against `a`

**Returns:** Boolean indicating whether or not `a` is the same as `b`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/deep-equal.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/deep-equal
[git-image]: https://img.shields.io/github/tag/micro-js/deep-equal.svg?style=flat-square
[git-url]: https://github.com/micro-js/deep-equal
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/deep-equal.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/deep-equal
