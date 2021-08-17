// 같은 기능의 함수를 명령형 프로그래밍과 선연형 프로그래밍 방식으로 각각 구현

// 명령형 프로그래밍
const imperativeDouble = (arr) => {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      results.push(arr[i] * 2);
    }
  }

  return results;
};

document.querySelector('.box1').innerText = imperativeDouble([
  1,
  2,
  ,
  '',
  null,
  3,
  'undefiend',
]);

// 선언형 프로그래밍
const declarativeDouble = (arr) => {
  return arr.filter((el) => typeof el === 'number').map((el) => el * 2);
};

document.querySelector('.box2').innerText = declarativeDouble([
  1,
  2,
  ,
  '',
  null,
  3,
  'undefiend',
]);
