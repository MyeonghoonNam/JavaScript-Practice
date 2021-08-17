// 메소드 호출에서의 this

// var obj1 = {
//   name: 'Lee',
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// var obj2 = {
//   name: 'Kim',
// };

// obj2.sayName = obj1.sayName;

// obj1.sayName();
// obj2.sayName();

// -----------------------------

// 프로토타입 객체 메소드 호출에서의 this
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var me = new Person('Lee');
console.log(me.getName());

Person.prototype.name = 'Kim';
console.log(Person.prototype.getName());
