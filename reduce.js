'use stnumbersSumict';

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