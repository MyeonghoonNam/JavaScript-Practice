// 프로토타입 이핼ㄹ 위한 테스트 코드

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

// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('Lee');

// console.dir(Person); // prototype 프로퍼티가 있다.
// console.dir(foo); // prototype 프로퍼티가 없다.

// -----------------------------------------

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getFunc = () => {};

// var foo = new Person('Lee');

// console.dir(Person.prototype);

// --------------------------------------
// var person = {
//   type: '인간',
//   getType: function () {
//     return this.type;
//   },
//   getName: function () {
//     return this.name;
//   },
// };

// function person() {
//   this.type = '인간';

//   this.getType = function () {
//     return this.type;
//   };

//   this.getName = function () {
//     return this.name;
//   };
// }

// var joon = Object.create(person);
// joon.name = '혁준';

// // console.log(joon.getType());
// // console.log(joon.getName());

// console.dir(person.prototype);
// console.dir(joon);

//-----------------------------------------------

// var student = {
//   name: 'Lee',
//   score: 90
// };

// // student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
// console.log(student.hasOwnProperty('name')); // true

// console.dir(student);

// var student = {
//   name: 'Lee',
//   score: 90
// }
// console.log(student.__proto__ === Object.prototype); // true

//-----------------------------------------------

// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('Lee');

// console.dir(Person); // prototype 프로퍼티가 있다.
// console.dir(foo);    // prototype 프로퍼티가 없다.

// console.log(Person.__proto__ === Function.prototype);
// console.log(Person.prototype === foo.__proto__);

//-----------------------------------------------
// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('Lee');

// // Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수이다.
// console.log(Person.prototype.constructor === Person);

// // foo 객체를 생성한 객체는 Person() 생성자 함수이다.
// console.log(foo.constructor === Person);

// // Person() 생성자 함수를 생성한 객체는 Function() 생성자 함수이다.
// console.log(Person.constructor === Function);
//-----------------------------------------------
// var student = {
//   name: 'Lee',
//   score: 90
// }

// // Object.prototype.hasOwnProperty()
// console.log(student.hasOwnProperty('name')); // true
//-----------------------------------------------
// var student = {
//   name: 'Lee',
//   score: 90
// }
// console.dir(student);
// console.log(student.hasOwnProperty('name')); // true
// console.log(student.__proto__ === Object.prototype); // true
// console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
//-----------------------------------------------
// var person = {
//   name: 'Lee',
//   gender: 'male',
//   sayHello: function(){
//     console.log('Hi! my name is ' + this.name);
//   }
// };

// console.dir(person);

// console.log(person.__proto__ === Object.prototype);   // ① true
// console.log(Object.prototype.constructor === Object); // ② true
// console.log(Object.__proto__ === Function.prototype); // ③ true
// console.log(Function.prototype.__proto__ === Object.prototype); // ④ true
//-----------------------------------------------
// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.sayHello = function(){
//     console.log('Hi! my name is ' + this.name);
//   };
// }

// var foo = new Person('Lee', 'male');

// console.dir(Person);
// console.dir(foo);

// console.log(foo.__proto__ === Person.prototype);                // ① true
// console.log(Person.prototype.__proto__ === Object.prototype);   // ② true
// console.log(Person.prototype.constructor === Person);           // ③ true
// console.log(Person.__proto__ === Function.prototype);           // ④ true
// console.log(Function.prototype.__proto__ === Object.prototype); // ⑤ true
//-----------------------------------------------
// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('Lee');

// Person.prototype.sayHello = function(){
//   console.log('Hi! my name is ' + this.name);
// };

// foo.sayHello();
//-----------------------------------------------
// var str = 'test';
// console.log(typeof str);                 // string
// console.log(str.constructor === String); // true
// console.dir(str);                        // test

// var strObj = new String('test');
// console.log(typeof strObj);                 // object
// console.log(strObj.constructor === String); // true
// console.dir(strObj);
// // {0: "t", 1: "e", 2: "s", 3: "t", length: 4, __proto__: String, [[PrimitiveValue]]: "test" }

// console.log(str.toUpperCase());    // TEST
// console.log(strObj.toUpperCase()); // TEST
//-----------------------------------------------
// var str = 'test';

// // 에러가 발생하지 않는다.
// str.myMethod = function () {
//   console.log('str.myMethod');
// };

// str.myMethod(); // Uncaught TypeError: str.myMethod is not a function
//-----------------------------------------------
// var str = 'test';

// String.prototype.myMethod = function () {
//   return 'myMethod';
// };

// console.log(str.myMethod());      // myMethod
// console.log('string'.myMethod()); // myMethod
// console.dir(String.prototype);
//-----------------------------------------------
// var str = 'test';

// String.prototype.myMethod = function() {
//   return 'myMethod';
// }

// console.log(str.myMethod());
// console.dir(String.prototype);

// console.log(str.__proto__ === String.prototype);                 // ① true
// console.log(String.prototype.__proto__  === Object.prototype);   // ② true
// console.log(String.prototype.constructor === String);            // ③ true
// console.log(String.__proto__ === Function.prototype);            // ④ true
// console.log(Function.prototype.__proto__  === Object.prototype); // ⑤ true
//-----------------------------------------------
// function Person(name) {
//   this.name = name;
// }

// var foo = new Person('Lee');

// // 프로토타입 객체의 변경
// Person.prototype = { gender: 'male' };

// var bar = new Person('Kim');

// console.log(foo.gender); // undefined
// console.log(bar.gender); // 'male'

// console.log(foo.constructor); // ① Person(name)
// console.log(bar.constructor); // ② Object()
//-----------------------------------------------
function Person(name) {
  this.name = name;
}

Person.prototype.gender = 'male'; // ①

var foo = new Person('Lee');
var bar = new Person('Kim');

console.log(foo.gender); // ① 'male'
console.log(bar.gender); // ① 'male'

// 1. foo 객체에 gender 프로퍼티가 없으면 프로퍼티 동적 추가
// 2. foo 객체에 gender 프로퍼티가 있으면 해당 프로퍼티에 값 할당
foo.gender = 'female'; // ②

console.log(foo.gender); // ② 'female'
console.log(bar.gender); // ① 'male'
//-----------------------------------------------
