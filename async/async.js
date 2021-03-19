// async & await
// promise 문법을 좀 더 깔끔하고 간편하게 사용하게 해주는 api

// 1. async
// promise로 자동으로 변환된다.
async function fetchUser(){
  // 네트워크 요청에 10초 소요 가정

  return 'ellie'
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// async 함수 안에서만 사용 가능
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(1500);
  console.log('t1')
  return 'apple';
}

async function getBanana(){
  await delay(1000);
  console.log('t2')
  return 'banana';
}

async function pickFruits(){
  // 프로미스 객체는 선언 즉시 바로 실행됨
  // getApple과 getBanana는 병렬(독립적)로 실행됨
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 동기화
  const apple = await applePromise; 
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. promise 동기화(병렬 처리)
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// race : 가장 먼저 Promise 처리가 이루어진 Promise만을 반환한다.
function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)