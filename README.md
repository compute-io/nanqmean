Quadratic Mean
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the quadratic mean ([root mean square](http://en.wikipedia.org/wiki/Root_mean_square)) of an array of values ignoring any values which are not numeric.


## Installation

``` bash
$ npm install compute-nanqmean
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var nanqmean = require( 'compute-nanqmean' );
```

#### nanqmean( arr )

Computes the quadratic mean (root mean square) ignoring non-numeric values.

``` javascript
var data = [ 2, 7, NaN, 3, -3, NaN, 9 ];

var mu = nanqmean( data );
// returns ~5.5136
```


## Examples

``` javascript
var nanqmean = require( 'compute-nanqmean' );

var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	if ( i%5 === 0 ) {
		data[ i ] = NaN;
	} else {
		data[ i ] = Math.random() * 100;
	}
}

console.log( nanqmean( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

1. 	The algorithm to compute the quadratic mean first calculates the _L2_ norm before dividing by the square root of the `array` length. This particular implementation attempts to avoid overflow and underflow and is accurate to `<1e-13` compared to the canonical formula for calculating the root mean square.
2. 	The quadratic mean of an `array` containing non-numeric values is equal to the quadratic mean of an equivalent `array` which contains only the numeric values. Hence,

``` javascript
var d1 = [ 1, NaN, 2, 3, NaN ],
    d2 = [ 1, 2, 3 ];

console.log( nanqmean( d1 ) === nanqmean( d2 ) );
// returns true
```


## References

- 	Dahlquist, Germund and Bjorck, Ake. _Numerical Methods in Scientific Computing_.
- 	Blue, James (1978) "A Portable Fortran Program To Find the Euclidean Norm of a Vector". _ACM Transactions on Mathematical Software_.
- 	Higham, Nicholas J. _Accuracy and Stability of Numerical Algorithms, Second Edition_.

This module implements a one-pass algorithm proposed by S.J. Hammarling.




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