console.clear();
function makePizza(flavour) {
  return new Promise((resolve, reject) => {
    if (flavour == "Fajita") return reject("Fajita is out of stock");
    else
      setTimeout(() => {
        console.log("preparing pizza");
        resolve(flavour + " pizza");
      }, 1000);
  });
}

makePizza("Fajita")
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

console.log("Hammad Gujjar");
// console.log(makePizza());

//1: pending
// 2: resolved
// 3: rejected
