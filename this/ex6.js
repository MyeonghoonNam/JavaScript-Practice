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

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.doSomething = function (callback) {
//   if (typeof callback == 'function') {
//     // --------- 1
//     callback();
//   }
// };

// function foo() {
//   console.log(this.name); // --------- 2
// }

// var p = new Person('Lee');
// p.doSomething(foo); // undefined

// ---------------------------------

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.doSomething = function (callback) {
//   if (typeof callback == 'function') {
//     callback.call(this);
//   }
// };

// function foo() {
//   console.log(this.name);
// }

// var p = new Person('Lee');
// p.doSomething(foo); // 'Lee'

// -------------------------------

function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    // callback.call(this);
    // this가 바인딩된 새로운 함수를 호출
    callback.bind(this)();
  }
};

function foo() {
  console.log('#', this.name);
}

var p = new Person('Lee');
p.doSomething(foo); // 'Lee'
