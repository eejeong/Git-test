// const person = {}; // 객체 리터럴 방식
// console.log(person); //{}
// person.name = "kb";
// console.log(person); // {name : "kb"}

// const person = {};
// person.name = {
//   firstName: "kb",
//   lastName: "kbb",
// };
// person.likes = ["apple", "kbbb"];
// console.log(person);

// const person = {
//   name: "kb",
// };
// delete person.name; // 또는 delete person["name"]
// console.log(person); //{츌력}

// let num = 10;
// let copyNum = num;
// console.log(num); //10
// console.log(copyNum); //10

// let num = 10;
// let copyNum = num;
// num = 20; // 변수 num을 재할당 /const 오류
// console.log(num); //20
// console.log(copyNum); //10

// const person {
//   name : "kb"
// }
// person = {
//   name : "kbb"
// }

// const person = {
//   name: "kb",
// };
// person.name = "kbb";
// console.log(person.name);

// const person = {
//   name: "kb",
// };
// const copyPerson = person; //변수 person에 할당된 객체를 변수 copyPerson에 복사
// person.name = "kbb"; //변수 person에 할당된 객체의 값을 변경
// console.log(person.name);
// console.log(copyPerson.name);

const kbstudent = {
  name: "kim",
  age: 20,
};
kbstudent.gender = "female";
delete kbstudent.age;
console.log(kbstudent);
