const sum = require("./sum"); // this is how we import single export
const subtract = require("./subtract");

const funcs = {
  sum,
  subtract,
};
module.exports = funcs;
// This is how we do multiple exports
