console.clear();
// const calculator = require("./calculator");
const { sum, subtract } = require("./calculator"); // This is how we do multiple imports
// const { sum, subtract } = calculator; // Object destructuring
// console.log("Hello Hamamd");
// console.log(__dirname);
// console.log(__filename);
console.log(sum(6, 5));
console.log(subtract(6, 5));
