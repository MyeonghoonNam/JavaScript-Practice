// const number = [0, 1, 2, 3, 4];

// for (var i = 0; i < number.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// console.log(this);

var x = 'xxx';

function foo() {
  var y = 'yyy';

  function car() {
    var t = 'ttt';

    console.dir(car);
  }

  function kar() {
    var i = 'iii';

    console.dir(kar);
  }

  car();
  kar();
}

function bar() {
  var z = 'zzz';
}

console.dir(foo);
console.dir(bar);

foo();
