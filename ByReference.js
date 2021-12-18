let x = 10;
let y = x;
x = 20;
console.log(y);
console.log(x);

let user = {
  name: "Hammad",
  email: "hammad@hamamd.com",
};

let anotherUser = user; // this will create shallow copy
let anotherAnotherUser = Object.assign({}, user); //this will create deep copy
let user1 = { ...user }; //this will create deep copy
user.name = "Ali";
console.log(user);
console.log(anotherUser);
console.log(anotherAnotherUser);
console.log(user1);

let h = 1900;
function increase(h) {
  h++;
}
let f = { value: 10 };
function increaseObj(f) {
  f.value++;
}

increase(h);
increaseObj(f);
console.log(h);
console.log(f.value);

/*
***************
Notes: 
DeepCopy VS Shallow Copy
DeepCopy: 
Numbers, boolean, Symbol, null, undefined,  String
All of these make deep copy: another copy of data and orignal data remain there in them

Shallow Copy
Objects, Functions, Arrays
All of these make shallow copy which means they send reference and any change will be the change in the orignal variable/data 
 */
