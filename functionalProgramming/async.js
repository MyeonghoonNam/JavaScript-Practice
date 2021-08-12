// callback, promise 비교

// function add10(a, callback){
// 	setTimeout(()=>callback(a+10), 100);
// }


// function add20(a) {
//   return new Promise(resolve => setTimeout(() => 
//     resolve(a + 20), 100));
// }


// const cb = add10(5, res => {
//   add10(res, res => {
//     add10(res, res => {
//       // console.log(res);
//     })
//   })
// });

// const p = add20(5)
//   .then(add20)
//   .then(add20)
//   .then(console.log)

// console.log(cb); // undefined, 추후 콜백에 의한 값이 출력된다.
// console.log(p); // promise 객체 반환, 추후 값 제어를 통한 값 호출

// --------------------------------

// 값으로서의 Promise 활용
// const go1 = (a, f) =>  a instanceof Promise ? a.then(f): f(a);
// const add5 = a => a + 5;

// // console.log(go1(10, add5)); // 15

// const delay100 = a => new Promise(resolve => setTimeout(()=>resolve(a),1000));

// // console.log(go1(delay100(10), add5));//[object Promise]5

// const n1 = 10;
// console.log(go1(go1(n1, add5), console.log)); // 15, undefined

// const n2 = delay100(10);
// console.log(go1(go1(n2, add5), console.log)); //Promise {<pending>}, 15


// --------------------------------


// 합성 관점에서의 Promise와 모나드
const g = a => a+1;
const f = a => a*a;

console.log(f(g(1)));//4
console.log(f(g())); //NaN

console.log([1].map(g).map(f)); // [4]

[1].map(g).map(f).forEach(r=>console.log(r)); //4
[].map(g).map(f).forEach(r=>console.log(r)); // 결과 없음

Promise.resolve(1).then(g).then(f).then(console.log); // 4

new Promise(resolve =>
  setTimeout(() => resolve(2), 100)
).then(g).then(f).then(console.log); // 9

Promise.resolve().then(g).then(f).then(console.log); // NaN

// --------------------------------

