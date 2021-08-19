// Promise.all
// const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// const promise1 = delay(3000);
// const promise2 = delay(4000);
// const promise3 = delay(5000);

// Promise.all([promise1, promise2, promise3]).then(() => {
//   console.log('work Done !');
// });

// Promise.race
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const promise = [1, 2, 3, 4, 5].map((n) => {
//   const delayTime = getRandomInt(1000, 5000);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${n}번 고양이 완주 !`);
//       resolve(`${n}번 고양이 승리 !`);
//     }, delayTime);
//   });
// });

// Promise.race(promise).then((message) => console.log(message));

// Promise.any
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const promise = [1, 2, 3, 4, 5].map((n) => {
//   const delayTime = getRandomInt(1000, 5000);

//   return new Promise((resolve, reject) => {
//     if (n === 1) {
//       return reject(`${n}번 고양이 기권 !`);
//     }

//     setTimeout(() => {
//       console.log(`${n}번 고양이 완주 !`);
//       resolve(`${n}번 고양이 승리 !`);
//     }, delayTime);
//   });
// });

// // node js에서는 아직 지원되지 않는다.
// Promise.any(promise).then((message) => console.log(message));

// --------------------------------------------------------
