// Quicksort for learning javascript
// initially will be similar to python implementation
// later will use more fun things to culminate in webpage
var maxNum = 100;
var values = [];

// generate random numbers for sorting later
function seedNumbers(maxNum) {
	values = []
	for(var i=0; i<maxNum; i++) {
		values.push(Math.floor((Math.random()*100)+1));	
	}
	return values
}

function quicksort(anArray) {
	var less = [];
	var equal = [];
	var greater = [];
	
	if (anArray.length > 1) {
		var pivot = anArray[0];
		for(var i=0; i<anArray.length; i++) {
			if (anArray[i] < pivot) {
				less.push(anArray[i]);
			} else if ( anArray[i] > pivot) {
				greater.push(anArray[i]);
			} else {
				equal.push(anArray[i]);
			}
		}
		return quicksort(less).concat(equal, quicksort(greater));
	} else {
		return anArray;
	}
}

var data = seedNumbers(100)
console.log(data);
var sorted = quicksort(data)
console.log(sorted);