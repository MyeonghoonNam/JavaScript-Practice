// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  // 배열의 요소들을 문자열로 나타낸다.
  // join의 인자로 구분자를 입력가능하며 기본값은 ',' 이다.
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';

  // 문자열을 구분자로 나누어서 배열로 반환한다.
  // split(구분자, 크기) : 구분자는 생략이 불가능하지만 크기는 생략 가능하다.
  const result = fruits.split(',', 3);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  // 배열의 값의 순서를 반대로 바꾸어 반환한다. 여기서 중요한 점은 기존의 배열(array) 역시 값이 반대로 바뀌게 된다.
  const result = array.reverse();

  console.log(result);
  console.log(array);
}


// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // slice(시작점, 끝점) : 배열의 시작점 부터 끝점 -1 의 부분까지의 배열을 반환한다. 
  const result1 = array.slice(2, 5);
  console.log(result1);

  // 끝점은 생략이 가능하고 생략시 시작점 부터 배열의 마지막 값까지 반환한다.
  const result2 = array.slice(2);
  console.log(result2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find(callback) : 첫 번째로 찾아진 요소를 반환한다. 찾지 못하면 undefined로 반환. 
  const result = students.find((student) => {
    return student.score === 90;
  });

  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter(callback) : true로 반환된 모든 요소들을 배열로 반환한다.
  const result = students.filter((student) => student.enrolled);

  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map()
  const result = students.map((student) => student.score);
  console.log(result);  
}

// Q8. check if there is a student with the score lower than 50
{ 
  // some() : 배열에서 조건에 만족하는 값이 있을경우 true를 반환한다.
  const result = students.some((student) => student.score < 50);
  
  console.log(result);

  // every() : 베열에서 조건에 모든 값이 만족해야 true를 반환한다.
  const result2 = students.every((student) => student.score < 50);
  console.log(result2)
}

// Q9. compute students' average score
{
  // reduce() : 배열의 시작 부터 마지막 까지 전체를 순차적으로 순회하며 누적된 값을 찾고자 할 때 용이하다.
  const result = students.reduce((prev, curr) => {
    
    return prev + curr.score;
  }, 0);

  console.log(result / students.length);

  // reduceRight() : reduce와 반대로 마지막 부터 시작까지 전체를 순차적으로 순회하며 누적된 값을 찾고자 할 때 용이하다.
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score).join();
  
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // 오름차순
  // sort() == sort((a, b) => a - b)
  const result = students.map(student => student.score).sort().join();

  console.log(result);

  // 내림차순

  const result2 = students.map(student => student.score)
    .sort((a, b) => b - a)
    .join();
  
  console.log(result2);
}