// // 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// var me = new Person('Lee');
// console.log(me.name); // Lee

// // new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
// var you = Person('Kim');
// console.log(you.name); // TypeError : undefined

//  -----------------------------------------

// function Person(name) {
//   // 생성자 함수 코드 실행 전 -------- 1
//   this.name = name;  // --------- 2
//   // 생성된 함수 반환 -------------- 3
// }

// var me = new Person('Lee');
// console.log(me.name);

// --------------------------------------------
// 객체 리터럴 방식
// var foo = {
//   name: 'foo',
//   gender: 'male',
// };

// console.dir(foo);

// // 생성자 함수 방식
// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
// }

// var me = new Person('Lee', 'male');
// console.dir(me);

// var you = new Person('Kim', 'female');
// console.dir(you);

// -----------------------------------------

// function Person(name) {
//   // new없이 호출하는 경우, 전역객체에 name 프로퍼티를 추가
//   this.name = name;
// };

// // 일반 함수로서 호출되었기 때문에 객체를 암묵적으로 생성하여 반환하지 않는다.
// // 일반 함수의 this는 전역객체를 가리킨다.
// var me = Person('Lee');

// console.log(me); // undefined
// console.log(window.name); // Lee

// -----------------------------------------

// Scope-Safe Constructor Pattern
function A(arg) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈객체를 생성하고 this에 바인딩한다.

  /*
  this가 호출된 함수(arguments.callee, 본 예제의 경우 A)의 인스턴스가 아니면 new 연산자를 사용하지 않은 것이므로 이 경우 new와 함께 생성자 함수를 호출하여 인스턴스를 반환한다.
  arguments.callee는 호출된 함수의 이름을 나타낸다. 이 예제의 경우 A로 표기하여도 문제없이 동작하지만 특정함수의 이름과 의존성을 없애기 위해서 arguments.callee를 사용하는 것이 좋다.
  */

  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(arg);
  }

  // 프로퍼티 생성과 값의 할당
  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);

// -----------------------------------------

// var Person = function (name) {
//   this.name = name;
// };

// var foo = {};

// // apply 메소드는 생성자함수 Person을 호출한다. 이 때 this에 객체 foo를 바인딩한다.
// Person.apply(foo, ['name']);

// console.dir(foo); // { name: 'name' }

// -----------------------------------------

// function convertArgsToArray() {
//   console.log(arguments);

//   // arguments 객체를 배열로 변환
//   // slice: 배열의 특정 부분에 대한 복사본을 생성한다.
//   var arr = Array.prototype.slice.apply(arguments); // arguments.slice
//   // var arr = [].slice.apply(arguments);

//   console.log(arr);
//   return arr;
// }

// convertArgsToArray(1, 2, 3);

// --------------------------------------

function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    // --------- 1
    callback();
  }
};

function foo() {
  console.log(this.name); // --------- 2
}

var p = new Person('Lee');
p.doSomething(foo); // undefined
