console.clear();
let students = ["Awais", "Ali", "Hammad"];
console.log(students.length);
students[5] = "Haider";

let searchStudents = students.findIndex(findAli);
let searchStudentsIndex = students.find(findAli);
console.log(students);
console.log(searchStudents);
console.log(searchStudentsIndex);

function findAli(std) {
  if (std == "Ali") return true;
  else return false;
}
