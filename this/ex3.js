'use strict'; // 엄격모드

var value = 1;

var obj = {
  value: 100,
  foo: function () {
    console.log("foo's this: ", this); // obj
    console.log("foo's this.value: ", this.value); // 100
    function bar() {
      console.log("bar's this: ", this); // undefined !!
      console.log("bar's this.value: ", this.value); // undefined 참조하여 에러 발생!!
    }
    bar();
  },
};

obj.foo();
