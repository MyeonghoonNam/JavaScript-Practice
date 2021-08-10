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

// 이터러블 프로토콜을 따른 map의 다형성

// 배열은 map 함수가 잘 동작.
[1,2,3].map(a => a +1);


//잘못된 예시.
// console.log(document.querySelectorAll('*').map); //undefined

// querySelectorAll는 배열을 기반으로 동작하지 않기에 map함수가 존재하지 않는다. 
// 하지만 querySelectorAll는 이터러블 프로토콜을 따른다.
// map(el => el.nodeName, document.querySelectorAll('*')); 
// ["HTML", "HEAD", "META", "TITLE", "META", "META", "META", "META", "SCRIPT", "LINK", "SCRIPT", "STYLE", "BODY", "SCRIPT", "PRE", "BR", "PRE", "PRE", "BR", "PRE"]

// 이터레이터를 통해 next함수로 다음 값들을 꺼낸다.
// const it = document.querySelectorAll('*')[Symbol.iterator]();
// it.next(); // {value: html, done: false}
// it.next(); // {value: head, done: false}
// it.next(); // {value: script, done: false}
// it.next(); // {value: script, done: false}
// it.next(); // {value: body, done: false}

// 제너레이터를 통한 map 사용
function *gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}

console.log(map(a => a * a, gen()));

// 키, 값쌍의 Map을 활용한 map 사용
// Map도 이터러블 프로토콜을 따른다.
const m = new Map();

m.set('a', 10);
m.set('b', 10);

const l = m[Symbol.iterator]();
console.log(l.next());
console.log(l.next());
console.log(l.next());

// 기존 Map 객체에 대해 구조분해를 활용한 새로운 객체 생성
console.log(new Map(map(([k, a]) => [k, a * 2], m)));