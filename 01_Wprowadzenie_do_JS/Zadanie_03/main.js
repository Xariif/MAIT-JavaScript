function IsPalidrom(text = "qwe") {
	text = text.split(" ").join("").toLocaleLowerCase();
	var reverse = text.split("").reverse().join();

	if (text === reverse) {
		return true;
	} else {
		return false;
	}
}

console.log(IsPalidrom("A to kawa kota"));

console.log(IsPalidrom("Ala ma kota"));
