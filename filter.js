'use strict'

// 테스트 케이스
const products = [
  {name :'반팔티', price: 15000},
  {name :'긴팔티', price: 20000},
  {name :'핸드폰케이스', price: 15000},
  {name :'후드티', price: 30000},
  {name :'바지', price: 25000},
];


// 사용자 정의 filter 구현
const filter = (f, iter) => {
  const response = [];
  for(const i of iter) {
    if(f(i)) response.push(i);
  }

  return response;
}

console.log(...filter(p => p.price < 20000, products));
console.log(...filter(p => p.price >= 20000, products));

