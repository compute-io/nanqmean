/**
*
*	COMPUTE: nanqmean
*
*
*	DESCRIPTION:
*		- Computes the quadratic mean (root mean square) of an array of values ignoring any values which are not numeric.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// NANQMEAN //

	/**
	* FUNCTION: nanqmean( arr )
	*	Calculates the quadratic mean (root mean square) ignoring any non-numeric values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} quadratic mean
	*/
	function nanqmean( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'nanqmean()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			N = 0,
			t = 0,
			s = 1,
			r,
			val,
			abs;
		for ( var i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( typeof val !== 'number' || val !== val ) {
				continue;
			}
			N += 1;
			abs = val;
			if ( abs < 0 ) {
				abs = -abs;
			}
			if ( abs > 0 ) {
				if ( abs > t ) {
					r = t / val;
					s = 1 + s*r*r;
					t = abs;
				} else {
					r = val / t;
					s = s + r*r;
				}
			}
		}
		return t * Math.sqrt( s/N );
	} // end FUNCTION nanqmean()


	// EXPORTS //

	module.exports = nanqmean;

})();