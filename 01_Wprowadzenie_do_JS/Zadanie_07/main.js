const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

function longestName(cities = ["qwe", "ess"]) {
	var result = "";
	cities.forEach((city) => {
		if (city.length > result.length) {
			result = city;
		}
	});

	return result;
}

console.log(longestName(biggestCities));
