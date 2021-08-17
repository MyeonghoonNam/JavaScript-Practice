// arguments와 this
// function square(number) {
//   console.log(arguments);
//   console.log(this); // nodejs에서는 global 전역 객체, 브라우저에서는 window 전역 객체

//   return number * number;
// }

// square(2);

// ---------------------------------------

// nodejs에서는 global 전역 객체, 브라우저에서는 window 전역 객체
// var ga = 'Global variable';

// console.log(ga);
// console.log(window.ga);

// function foo() {
//   console.log('invoked!');
// }
// window.foo();

// ------------------------------------------

// function foo() {
//   console.log("foo's this: ", this); // window
//   function bar() {
//     console.log("bar's this: ", this); // window
//   }
//   bar();
// }
// foo();

// ---------------------------------------

// var value = 1;

// var obj = {
//   value: 100,
//   foo: function () {
//     console.log("foo's this: ", this); // obj
//     console.log("foo's this.value: ", this.value); // 100
//     function bar() {
//       console.log("bar's this: ", this); // window
//       console.log("bar's this.value: ", this.value); // 1
//     }
//     bar();
//   },
// };

// obj.foo();

// ----------------------------
// var value = 1;

// var obj = {
//   value: 100,
//   foo: function () {
//     setTimeout(function () {
//       console.log("callback's this: ", this); // window
//       console.log("callback's this.value: ", this.value); // 1
//     }, 100);
//   },
// };

// obj.foo();

// -------------------------------
var value = 1;

var obj = {
  value: 100,
  foo: function () {
    var that = this; // Workaround : this === obj

    console.log("foo's this: ", this); // obj
    console.log("foo's this.value: ", this.value); // 100
    function bar() {
      console.log("bar's this: ", this); // window
      console.log("bar's this.value: ", this.value); // 1

      console.log("bar's that: ", that); // obj
      console.log("bar's that.value: ", that.value); // 100
    }
    bar();
  },
};

obj.foo();
