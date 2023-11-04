var arr1 = [1, 2, 3, 4, 5, 6, 7];

var arr2 = [1, 1, 1, 1];

var arr3 = [2, 8, 3, 7];

function multiply(array) {
	return array.reduce((total, currentValue) => total * currentValue);
}

console.log(multiply(arr1));

console.log(multiply(arr2));

console.log(multiply(arr3));
