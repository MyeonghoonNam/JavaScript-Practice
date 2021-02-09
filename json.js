'use strict';

// 1. Object to Json
  // stringfy(obj)
  let json = JSON.stringify(true);
  console.log(json);

  json = JSON.stringify(['apple', 'banana']);
  console.log(json);

  const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),

    // 함수는 객체에 포함되는 데이터가 아니기 때문에 json에 포함되지 않는다.
    jump : function(){
      console.log(`${this.name} can jump!`);
    }
  }

  json = JSON.stringify(rabbit);
  console.log(json);

  json = JSON.stringify(rabbit, ['name', 'color', 'size']);
  console.log(json);

  json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'hoon' : value;
  })

// 2. JSON to Object
  
  // parse(json)
  json = JSON.stringify(rabbit);
  const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
  });
  console.log(obj);
  rabbit.jump();
  // obj.jump() : obj를 json으로 바꿀 때 함수는 데이터로 포함되지 않았으므로 json으로 obj로 바뀌어도 함수는 포함되어 있지 않다.

  console.log(rabbit.birthDate.getDate());
  console.log(obj.birthDate.getDate());


