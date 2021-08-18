// const song = {
//   name: "song",
//   sayHi: () => console.log(`Hi ${this.name}`)
// };

// song.sayHi(); // Hi undefined

// -----------------------------------

// const song = {
//   name: "song",
//   sayHi() {
//     // === sayHi: function() {
//     console.log(`Hi ${this.name}`);
//   }
// };
// song.sayHi(); // Hi song

// -----------------------------------

// var Person = function (name) {
//   this.name = name;
//   this.sayHi = () => console.log(`Hi ${this.name}`);
// };
// var song = new Person('song');
// song.sayHi(); // Hi song

//  ---------------------------------------

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.name = 'kim';
// Person.prototype.getName = () => console.log(this.name);

// Person.prototype.getName(); // ""

function Person(name) {
  this.name = name;
}
Person.prototype.name = 'kim';
Person.prototype.getName = function () {
  return this.name;
};

console.log(Person.prototype.getName()); // "kim"
