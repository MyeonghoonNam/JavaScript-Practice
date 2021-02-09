'use strict';

// JavaScript는 동기적인 언어이다.
// 호이스팅 후에 코드 순서대로 작동한다.

// 호이스팅 : var, 함수의 선언이 자동으로 코드의 맨 상단으로 이동하는 것.

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// 동기 callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// 비동기 callback
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        id === 'hoon' && password === '0822'
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if (user === 'hoon') {
        onSuccess({name:'hoon', role:'admin'});
      } else {
        onError(new Error('not found'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pw');

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
      },
      error => {
        console.log(error);
      }
    )
  },
  error => {
    console.log(error);
  }
)