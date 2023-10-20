function randomOneToTen() {
	var value = Math.floor(Math.random() * 10) + 1;

	return value % 2 === 0;
}

console.log(randomOneToTen());
