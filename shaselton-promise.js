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

var events = [];

var newEvent = function(){
	var id;
	id = setTimeout()
};

var State = {
	PENDING: 0,
	FULFILLED: 1,
	REJECTED: 2
};

var Promise = {
	state: null,
	then: function( onFulfilled, onRejected ){

		/**
		 * Both onFulfilled and onRejected are optional arguments:
				If onFulfilled is not a function, it must be ignored.
				If onRejected is not a function, it must be ignored.
			If onFulfilled is a function:
				it must be called after promise is fulfilled, with promise’s fulfillment value as its first argument.
				it must not be called more than once.
				it must not be called if onRejected has been called.
		 */	
		
		var fulfilled = ( typeof(onFulfilled) === "function" ),
			rejected = ( typeof(onRejected) === "function" );

		console.log( fulfilled, rejected );

	}
};