console.clear();
function makePizza(flavour, callback) {
  console.log("Order Recieved");
  console.log("preparing pizza");
  setTimeout(() => {
    callback(flavour);
  }, 1000);
}

function handlePizza(pizza) {
  console.log("Eating Pizza " + pizza);
}
makePizza("Tikka", handlePizza);
console.log("Ordered pizza");
