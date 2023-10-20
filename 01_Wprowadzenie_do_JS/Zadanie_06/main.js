const pizzas = [
	"Margherita",
	"Marinara",
	"Prosciutto e funghi",
	"Quattro Stagioni",
	"Capricciosa",
];

console.log("\nFor:");
for (let i = 0; i < pizzas.length; i++) {
	console.log(pizzas[i]);
}

console.log("\nForeach:");

pizzas.forEach((element) => {
	console.log(element);
});
