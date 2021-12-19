console.clear();
const { add, subtract } = require("usman-calculator"); // this is custom modules
const _ = require("underscore");
const os = require("os");
console.log(os.freemem()); // this is how we call built in modules
console.log(add(5, 9));
const res = _.contains([1, 9, 8, 3, 6], 8);
console.log(res);
