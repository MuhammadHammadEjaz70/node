console.clear();
let students = ["Awais", "Ali", "Hammad"];
console.log(students.length);
students[5] = "Haider";

let searchStudents = students.findIndex(findAli);
let searchStudentsIndex = students.find(findAli);
students.splice(1, 0, "Anas", "Sukaina");
students.sort(customSort);
console.log(students);
console.log(searchStudents);
console.log(searchStudentsIndex);

function findAli(std) {
  if (std == "Ali") return true;
  else return false;
}
function customSort(a, b) {
  if (b > a) return -1;
  else return 1;
}
// *****

// Mapping

let rates = [2, 5, 10];

let newRates = rates.map(function (r) {
  return r * 2;
});
console.log(newRates);
