var descendingArr = function (a, b){
	return b - a;
}

var descendingObj = function(a, b){
	if(a.rating > b.rating)
		return 1;
	if(a.rating > b.rating)
		return -1;

	return 0;
	
}