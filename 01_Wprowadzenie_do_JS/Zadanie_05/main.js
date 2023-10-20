var vegetableIcons = ["🥦", "🥕"];
var fruitIcons = ["🍎", "🍇"];

var saladIcon = "🥗";

vegetableIcons.concat(fruitIcons);
console.log("🚀 ~ file: main.js:7 ~ vegetableIcons:", vegetableIcons);

saladIcon = [...saladIcon, ...vegetableIcons];
console.log("🚀 ~ file: main.js:10 ~ saladIcon:", saladIcon);
