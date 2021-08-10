'use strict';

// 테스트 케이스
const products = [
  {name :'반팔티', price: 15000},
  {name :'긴팔티', price: 20000},
  {name :'핸드폰케이스', price: 15000},
  {name :'후드티', price: 30000},
  {name :'바지', price: 25000},
];

// reduce 사용 예제
const numbers = [1,2,3,4];
const numbersSum = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(accumulator, currentValue, currentIndex, array);

  return accumulator + currentValue;
});

console.log(numbersSum);

// reduce 사용자 정의
const reduce = (f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for(const i of iter) {
    acc = f(acc, i);
  }

  return acc;
}

const add = (a, b) => a + b;

// 초기값 지정한 경우의 reduce
console.log(reduce(add, 0, [1, 2, 3, 4, 5]));

// 초기값 지정하지 않은 경우의 reduce
console.log(reduce(add, [1, 2, 3, 4, 5]));


// reduce 응용 예제
console.log(
  reduce(
    (total_price, products) => total_price += products.price,
    0,
    products
  ));