// var student = {
//   name: 'Lee',
//   score: 90,
// };

// // student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
// console.log(student.hasOwnProperty('name')); // true

// console.dir(student);

//  ----------------------------------

// var student = {
//   name: 'Lee',
//   score: 90,
// };
// console.log(student.__proto__ === Object.prototype); // true

// -------------------------------------------

function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo); // prototype 프로퍼티가 없다.
