function distFromAverage(tab) {
	var sum = 0;

	for (let i = 0; i < tab.length; i++) {
		sum += tab[i];
	}

	var avg = sum / tab.length;
	var result = [];
	for (let i = 0; i < tab.length; i++) {
		result.push(Math.abs(tab[i] - avg));
	}

	return result;
}

var arr = [2, 8, 3, 7];

console.log(distFromAverage(arr));
