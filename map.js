'use strict'

// 테스트 케이스
const products = [
  {name :'반팔티', price: 15000},
  {name :'긴팔티', price: 20000},
  {name :'핸드폰케이스', price: 15000},
  {name :'후드티', price: 30000},
  {name :'바지', price: 25000},
];

// map 메소드 사용 예시
const numbers = [1, 2, 3];
const numbersMap = numbers.map((value, index, array) => {
  console.log(value, index, array);
  
  return value * 2;
});

console.log(numbersMap);

// 사용자 정의 map
const map = (f, iter) => {
  const response = [];

  for(let value of iter) {
    response.push(f(value));
  }

  return response;
}

console.log(map(p => p.name, products));
console.log(map(p => p.price, products));
