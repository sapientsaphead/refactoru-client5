var descendingObj = function(a, b){
	if(a.rating > b.rating)
		return 1;
	if(a.rating > b.rating)
		return -1;

	return 0;
};

var ascendingObj = function(a, b){
	if(b.rating > a.rating)
		return 1;
	if(b.rating > a.rating)
		return -1;

	return 0;
	
};

// Filter function
var filter = function(arr, f) {
	var output = [];

	for(var i=0; i<arr.length-1; i++) {
	if( f(arr[i]) ) {
		output.push(arr[i]);
		}
	}
	return output;
};




var descendingArr = function (a, b){
	return b - a;
};

/**For picking random quotes from an object!*/

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
};

function pickRandomObject (arr) {
    var result;
    for (var i=0; i < arr.length-1; i++) {
    	if (Math.random() < 1/i)
           result = arr[i];
   }    
    return result;
};

