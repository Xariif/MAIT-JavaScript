function getEvenAverage(array) {
	const evenNumbers = array.filter((num) => num % 2 === 0);
	const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
	return sum === 0 ? null : sum / evenNumbers.length;
}

console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));
