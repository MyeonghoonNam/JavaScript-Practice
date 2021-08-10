'use stnumbersSumict';

// reduce 사용 예제
const numbers = [1,2,3,4];
const numbersSum = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(accumulator, currentValue, currentIndex, array);

  return accumulator + currentValue;
});

console.log(numbersSum);