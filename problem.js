console.clear();
let makePizza = (flavour) => {
  setTimeout(() => {
    console.log("preparing pizza");
    return "Prepared" + flavour + "pizza";
  }, 1000);
  return "Order Recieved " + flavour + " pizza";
};

console.log(makePizza("Tikka"));
