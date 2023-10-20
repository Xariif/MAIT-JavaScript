const cake = "🎂";

var myBirth = new Date(2001, 6, 7);

console.log("🚀 ~ file: main.js:4 ~ currentTime:", currentTime);

var currentTime = new Date();

console.log("🚀 ~ file: main.js:7 ~ myBirth:", myBirth);

var yearsFromMyBrith = currentTime.getFullYear() - myBirth.getFullYear();

console.log("🚀 ~ file: main.js:10 ~ yearsFromMyBrith:", yearsFromMyBrith);

for (let i = 0; i < yearsFromMyBrith; i++) {
	console.log(cake);
}
