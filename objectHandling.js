console.clear();
let address = {
  title: "Gulberg",
  city: "Lahore",
};
let printAddrres = (title, city) => {
  console.log(title + " is located in " + city);
};

printAddrres(address.title, address.city + " without destructing");

// Note: we have to pass both parameter with address

// Destructing of Objects
const { title, city } = address;
printAddrres(title, city + " with destructing");

console.log(title);
console.log(city);
