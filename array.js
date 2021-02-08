'use strict'

// Array

  // 1. 선언
  const arr1 = new Array();
  const arr2 = [1, 2];

  // 2. Index position
  const fruits = ['apple', 'banana'];
  console.log(fruits);
  console.log(fruits.length);
  console.log(fruits[1]);

    // 마지막 데이터 접근
    console.log(fruits[fruits.length -1]);

  // 3. 배열 전체 조회

  for(let fruit of fruits){
    console.log(fruit);
  }

    // forEach(callback(value, index, array))), 인덱스, 배열 생략 가능
    fruits.forEach((fruit, index, array) => {
      console.log(fruit, index, array);
    })

  // 4. 배열 추가, 삭제 , 복사
    // push
      fruits.push('strawberry', 'peach');
      console.log(fruits);

    // pop
      fruits.pop();
      fruits.pop();
      console.log(fruits);
    
    // unshift : 맨 앞에서 부터 데이터 추가
      fruits.unshift('strawberry');
      console.log(fruits);

    // shift : 맨 앞에서 부터 데이터 제거
      fruits.shift();
      console.log(fruits);

    // note! : shift와 unshift는 push, pop에 비해 굉장히 느리다 전체적으로 배열의 값이 움직여야 하기 때문이다.

    // splice : 특정 인덱스에서 값 삭제
    fruits.push('strawberry', 'peach', 'orange');
    console.log(fruits);
    
      // 특정 인덱스 부터 모든 데이터 삭제
      fruits.splice(1);
      console.log(fruits);

      // 특정 인덱스 부터 특정 수 데이터 삭제
      fruits.splice(1, 1);
      console.log(fruits);

      // 특정 인덱스 부터 특정 수 데이터 삭제 후 그 자리에 데이터 삽입
      fruits.splice(1,1, 'grape');
      console.log(fruits);

    // concat : 배열과 배열을 연결하여 하나의 배열을 반환
    const fruits2 = ['mango', 'melon'];
    const newFruits = fruits.concat(fruits2);
    console.log(newFruits);

    // 5. 배열 검색
    console.log(fruits);

      // index Number, 없을 시에 -1 반환
    console.log(fruits.indexOf('apple')); 

      // true or false
    console.log(fruits.includes('apple')); 

      // 배열의 마지막 요소부터 인덱스 찾는다.
    fruits.push('apple');
    console.log(fruits);
    console.log(fruits.indexOf('apple'));
    console.log(fruits.lastIndexOf('apple'));

