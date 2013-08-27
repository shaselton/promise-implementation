/**
 * @author  shaselton
 */
if( !window.console ){
	window.console = {
		log: function(){}
	};
}

var  sl = shaseltonLearning = {};

/**
 * promise-like behavior in the fact that a delayed response is fulfilled at a later time.  Tis a faux.
 * @param  {Function} cb callback function to be ran at a later time
 * @param {int} time length of time (in ms) in delay before callback is ran
 * @return {int}    setTimeout id
 */
sl.simpleDelayedCallback = function( cb, time ){
	return setTimeout( function( simulatedData ){
		cb( simulatedData ) 
	}, time || 1000 );
};

// simpleDelayedCallback
sl.simpleDelayedCallback( function(){console.log('simpleDelayedCallback')} );


/**
 * Same as above, with the allowance of an exception function to be ran
 * @param  {Function} cb              resolve callback function
 * @param  {Function}   customException exception callback function
 * @param  {Bool}   throwException  boolean to test evaluation of the customException or otherwise.
 * @param  {Int}   time            simulated time delay (in ms)
 * @return {Int}                   setTimeout is
 */
sl.simpleDelayedCallbackWithException = function( cb, customException, throwException, time ){
	return setTimeout(function( simulatedData ) {
		if( !!throwException ){
			cb( simulatedData );
		}else{
			customException( new Error( 'simpleDelayedCallbackWithException messed up, son!' ) );
		}
	}, time || 1000 );
};

// simpleDelayedCallbackWithException
var callback = function(){
	console.log('simpleDelayedCallbackWithException');
};

var customException = function( error ){
	console.log( error.message );
};

sl.simpleDelayedCallbackWithException( callback, customException, true );
sl.simpleDelayedCallbackWithException( callback, customException, false );


/**
 * basic defer function that returns an object with the resolve and then apis
 */
sl.defer = function(){
	var pendingPromises = [],
		returnedData;

	return{
		resolve: function( data ){
			returnedData = data;
			for (var i = 0, len = pendingPromises.length; i < len; i++ ){
				pendingPromises[i]( returnedData );
			}
		},
		then: function( cb ){
			if( pendingPromises ){
				pendingPromises.push( cb );
			}else{
				cb( returnedData );
			}
		}
	}
};

sl.testDefer1 = function( time ){
	var promise = sl.defer();
	setTimeout(function(){
		promise.resolve(1);
	}, time || 1000);
	return promise;
};

// testDefer1
sl.testDefer1().then(function(){console.log('test defer 1 callback')});
sl.testDefer1(500).then(function(){console.log('test defer 2 callback')});
