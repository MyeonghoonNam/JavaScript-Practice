// class 선언
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} : hello! `);
  }
}

const ellie = new Person('hoon', 26);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// Getter, Setter
// 유효성 검사를 적용시킬 수 있다.
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    console.log("get");
    return this._age;
  }

  set age(value) {
    console.log("set");
    this._age = value < 0 ? 0 : value;
  }
}

const hoon = new User('Myeonghoon', 'Nam', -1);
console.log(hoon.age);

// Inheritance
class Shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing color is ${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2 ;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());

// instanceOf
// A instanceof B = A가 B의 인스턴스인지 true, false를 출력해준다.
// A가 B를 상속했을 경우에 true를 반환한다.
console.log(triangle instanceof Shape);

// 모든 객체는 Object 를 상속한다.
console.log(triangle instanceof Object);