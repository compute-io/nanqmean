nanqmean
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the quadratic mean (root mean square) of an array of values ignoring any values which are not numeric.


## Installation

``` bash
$ npm install compute-nanqmean
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lib = require( 'compute-nanqmean' );
```


## Examples

``` javascript
var lib = require( 'compute-nanqmean' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-nanqmean.svg
[npm-url]: https://npmjs.org/package/compute-nanqmean

[travis-image]: http://img.shields.io/travis/compute-io/nanqmean/master.svg
[travis-url]: https://travis-ci.org/compute-io/nanqmean

[coveralls-image]: https://img.shields.io/coveralls/compute-io/nanqmean/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/nanqmean?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/nanqmean.svg
[dependencies-url]: https://david-dm.org/compute-io/nanqmean

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/nanqmean.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/nanqmean

[github-issues-image]: http://img.shields.io/github/issues/compute-io/nanqmean.svg
[github-issues-url]: https://github.com/compute-io/nanqmean/issues