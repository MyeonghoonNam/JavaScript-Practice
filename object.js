'use strict';

// 1. 객체 생성 방법

// 객체 리터럴
const obj1 = {};

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const hoon = {name : 'hoon', age : 26};

print(hoon);

// 객체 속성 추가방법
hoon.job = 'student';
console.log(hoon.job);

// 객체 속성 삭제방법
delete hoon.job;
console.log(hoon.job);

// 2. 객체 속성 접근방법
console.log(hoon.name);

// 키 값을 string 타입으로 지정해야 접근 가능하다.
console.log(hoon['name']);
hoon['job'] = 'student';
console.log(hoon.job);

function printValue(obj, key){
  console.log(obj[key]);
}

printValue(hoon, 'name');

// 3. 생성자 함수
function Person(name, age){
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

const person1 = new Person('hoon', 26);
console.log(person1);

// 4. in operator : 객체의 키를 확인할 수 있는 키워드
console.log('name' in hoon);

// 5. for..in vs for..of
  console.clear();

  // for (key in obj)
  for(let key in hoon) {
    console.log(key);
  }

  // for (value of item) : 배열이나 리스트 등 순차적 데이터에 용이
  const array = [1,2,3,4,5];
  for(let value of array){
    console.log(value);
  }

// 6. cloning
  const user = { name:'hoon', age:26};
  const user2 = {};

  Object.assign(user2, user);
  
  const user3 = Object.assign({}, user2);
  const user4 = user3;
  console.log(user3 == user4);