'use strict';

// Promise : 동기적으로 보이는 비동기 처리방식의 js 객체
// State : pending(연산의 수행 중 상태) -> fulfilled(완료상태) or rejected(완료를 못하는 상태) 
// Producer(데이터 생성), Consumer(데이터 소비)

// 1. Producer
  // Promise 함수가 생성되어지면, executor 콜백함수가 자동으로 실행되어진다.
  const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
      // Promise가 성공적으로 이루어졌을 경우 resolve를 리턴한다.
      resolve('ellie')

      // Promise가 실패적으로 이루어졌을 경우 reject를 리턴한다.
      // reject(new Error('not found'));
    }, 2000)
  })


// 2. Consumer : then, catch, finally
  // then : promise의 성공적인 경우를 다룬다.(promise를 리턴)
  // value 는 promise의 resolve에서 넘어온 값이 된다.
  // catch : promise의 실패한 경우를 다룬다. reject의 경우
  // finally : promise의 성공과 실패에 상관없이 무조건 실행된다.
  promise
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('finally');
    });

// 3. Promise 연결하기
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1)
      }, 1000);
    })
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => 
      resolve('chicken')
    , 1000)
  })



const getEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} => egg`);
      // reject(new Error(`error`));
    }, 1000);
  })


const getFood = egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} => food`);
    }, 1000)
  })

// then 다음에 catch문을 활용하여 예외를 처리하자
getHen()
.then(hen => getEgg(hen))
.catch(error => console.log(error))
.then(egg => getFood(egg))
.then(food => console.log(food))