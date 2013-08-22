var noop = function(){};

/*
Terminology

“promise” is an object or function that defines a then method.
“value” is any legal JavaScript value (including undefined or a promise).
“reason” is a value that indicates why a promise was rejected.
“must not change” means immutable identity (i.e. ===), but does not imply deep immutability.
 */



/*
Requirements

Promise States
A promise must be in one of three states: pending, fulfilled, or rejected.

When in pending, a promise:

may transition to either the fulfilled or rejected state.
When in fulfilled, a promise:

must not transition to any other state.
must have a value, which must not change.
When in rejected, a promise:

must not transition to any other state.
must have a reason, which must not change.
 */

var State = {
	PENDING: 0,
	FULFILLED: 1,
	REJECTED: 2
};

var Promise = {
	then: function( onFulfilled, onRejected ){
		var fulfilled = ( typeof(onFulfilled) === "function" ) ? onFulfilled : undefined,
			rejected = ( typeof(onRejected) === "function" ) ? onRejected : undefined,


	}
}