var arr1 = [1, 2, 3, 4, 5, 6, 7];

var arr2 = [1, 1, 1, 1];

var arr3 = [2, 8, 3, 7];

function multiply(array) {
	var copiedArray = [...array];

	for (let i = 0; i < copiedArray.length - 1; i++) {
		const element = copiedArray[i];

		copiedArray[i + 1] = copiedArray[i] * copiedArray[i + 1];
	}

	return copiedArray[copiedArray.length - 1];
}

console.log(multiply(arr1));
console.log(arr1);

console.log(multiply(arr2));
console.log(arr2);

console.log(multiply(arr3));
console.log(arr3);
