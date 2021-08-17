// setTimeout this 테스트
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return console.log(this.name);
// };

// var song = new Person('song');
// song.getName(); //"song"

// setTimeout(song.getName, 1000); // ""

// eventListener 테스트
document.querySelector('.btn').addEventListener('click', function () {
  console.log(this); // this는 #btn

  function innerFunc() {
    console.log(this); // window
  }

  innerFunc();
});
