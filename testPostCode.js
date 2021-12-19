console.clear();
let postCodes = require("./postcodes.json");
// console.log(postCodes.length);

let obj = postCodes.find((p) => {
  return p.Region == "Crawley";
});
let obj1 = postCodes.findIndex((p) => {
  return p.Region == "Crawley";
});

// console.log(obj);
// console.log(obj1);
console.log(postCodes.slice(200, 202));
