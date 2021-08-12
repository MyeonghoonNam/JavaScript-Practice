// lib.js 학습은 아래 주석
const L = {};

const curry = f => 
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const add = (a, b) => a + b;

const go = (...args) => reduce((a, f) => f(a), args); 

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);

const head = iter => go1(take(1, iter), ([h]) => h);

const reduceF = (acc, a, f) =>
  a instanceof Promise ? //a 가 Promise인지 평가
    a.then(a=> f(acc,a), e => e === nop ? acc : Promise.reject(e)): f(acc,a);

const reduce = curry((f, acc, iter) => {
	if (!iter) return reduce(f, head(iter = acc[Symbol.iterator]()), iter);
  
  iter = iter[Symbol.iterator]();
  
  return go1(acc, function recur(acc) {
    let cur
    
    while (!(cur = iter.next()).done) {
      acc = reduceF(acc, cur.value, f);
      
      if (acc instanceof Promise) return acc.then(recur);
    }

    return acc;
  });
});


const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();

  return function recur() {
      let cur;
      while (!(cur = iter.next()).done) {
          const a = cur.value;
          if (a instanceof Promise)
              return a.then(a => (res.push(a), res).length === l ? res : recur())
                  .catch(e=> e === nop ? recur() : Promise.reject(e)); //reject로 nop이 올 경우 다음 코드를 평가한다.
          res.push(a);
          if (res.length === l) return res;
      }
      return res;
  }();
}); 

L.map = curry(function* (f, iter) {
  for (const a of iter) {
      yield go1(a,f);
  }
});

const map = curry(pipe(L.map, take(Infinity)));

const nop = Symbol('nop');

L.filter = curry(function* (f, iter) {
    for (const a of iter) {
        const b = go1(a, f);
        if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop));
        else if (b) yield a;
    }
});

const filter = curry(pipe(L.filter, take(Infinity)));

const range = l => {
  let i = -1;
  let response = [];

  while(++i < l) {
    response.push(i);
  }

  return response;
}

L.range = function *(l){
    let i = -1;
    while (++i < l) {
        yield i;
    }
};

L.entries = function *(obj) {
  for (const k in obj) yield [k, obj[k]];
};

const join = curry((sep = ',', iter) => 
  reduce((a, b) => `${a}${sep}${b}`, iter));

const queryStr = pipe(
  L.entries,
  map(([k, v]) => `${k}=${v}`),
  join('&')
)

const find = curry((f, iter) =>
  go(
    iter,
    L.filter(f),
    take(1),
    ([a])=>a
));

// isIterable을 통해 이터러블객체인지 평가합니다. 
const isIterable = a => a && a[Symbol.iterator];

L.flatten = function *(iter) {
    for (const a of iter) {
        if (isIterable(a)) {
            for (const b of a) yield b;
        } else {
            yield a;
        }
    }
};

const flatten = pipe(L.flatten, take(Infinity));

L.flatMap = curry(pipe(L.map, L.flatten));

//즉시평가 flatMap
const flatMap = curry(pipe(L.flatMap, take(Infinity)));








// callback, promise 비교

// function add10(a, callback){
// 	setTimeout(()=>callback(a+10), 100);
// }


// function add20(a) {
//   return new Promise(resolve => setTimeout(() => 
//     resolve(a + 20), 100));
// }


// const cb = add10(5, res => {
//   add10(res, res => {
//     add10(res, res => {
//       // console.log(res);
//     })
//   })
// });

// const p = add20(5)
//   .then(add20)
//   .then(add20)
//   .then(console.log)

// console.log(cb); // undefined, 추후 콜백에 의한 값이 출력된다.
// console.log(p); // promise 객체 반환, 추후 값 제어를 통한 값 호출

// --------------------------------

// 값으로서의 Promise 활용
// const go1 = (a, f) =>  a instanceof Promise ? a.then(f): f(a);
// const add5 = a => a + 5;

// // console.log(go1(10, add5)); // 15

// const delay100 = a => new Promise(resolve => setTimeout(()=>resolve(a),1000));

// // console.log(go1(delay100(10), add5));//[object Promise]5

// const n1 = 10;
// console.log(go1(go1(n1, add5), console.log)); // 15, undefined

// const n2 = delay100(10);
// console.log(go1(go1(n2, add5), console.log)); //Promise {<pending>}, 15


// --------------------------------


// 합성 관점에서의 Promise와 모나드
// const g = a => a+1;
// const f = a => a*a;

// console.log(f(g(1)));//4
// console.log(f(g())); //NaN

// console.log([1].map(g).map(f)); // [4]

// [1].map(g).map(f).forEach(r=>console.log(r)); //4
// [].map(g).map(f).forEach(r=>console.log(r)); // 결과 없음

// Promise.resolve(1).then(g).then(f).then(console.log); // 4

// new Promise(resolve =>
//   setTimeout(() => resolve(2), 100)
// ).then(g).then(f).then(console.log); // 9

// Promise.resolve().then(g).then(f).then(console.log); // NaN

// --------------------------------

// Kleisli Composition 관점에서의 Promise
// const users = [
//   {id:1, name:'aa'},
//   {id:2, name:'bb'},
//   {id:3, name:'cc'},
// ];

// const getuserById = id => find(u=>u.id === id, users) || Promise.reject("없어요!"); // users에서 인자값으로 받은 id와 동일한 user를 찾는 함수 getuserById
// const f = ({name}) => name; // name을 구조분해하여 얻어 반환하는 f 
// const g = getuserById; // getuserById를 값으로 취급하는 g
// const fg = id => Promise.resolve(id).then(g).then(f).catch(a => a); // f와 g를 합성해 users에서 특정 id의 name을 추출해 반환하는 fg

// const r = fg(2);
// // console.log(r); // bb

// // const r2 = fg(5); //Uncaught TypeError: Cannot destructure property 'name' of 'undefined' as it is undefined.

// users.pop();
// users.pop();

// fg(2).then(console.log);
// const r3 = fg(2)//Uncaught TypeError: Cannot destructure property 'name' of 'undefined' as it is undefined.

// --------------------------------


// go, pipe, reduce에서 비동기 제어

// go(Promise.resolve(1),
//     a=>a+10,
//     a=>Promise.reject('error'),
//     a=>log('----'),
//     a=>a+1000,
//     console.log
// ).catch(a=>console.log(a));//error

// --------------------------------


// promise.then의 중요한 규칙

// Promise.resolve(Promise.resolve(1)).then(console.log);//1

// new Promise(resolve => resolve(new Promise(resolve1 => resolve1(1)))).then(console.log);//1


// --------------------------------

// 지연 평가와 Promise 적용 - L.map, map, take

// go([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
//     map(a=>a+10),
//     take(2),
//     console.log
// );

// go([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
//     L.map(a=>a+10),
//     take(2),
//     console.log
// ); //[11,12]


// --------------------------------


// Kleisli Composition - L.filter, filter, nop, take

// go([1, 2, 3, 4, 5, 6],
//   L.filter(a => a % 2),
//   take(2),
//   console.log
// );

// go([1, 2, 3, 4, 5, 6],
//   L.map(a => Promise.resolve(a * a)),
//   L.filter(a => a % 2),
//   take(2),
//   console.log
// );



// --------------------------------


// reduce에서 nop 지원
// go([1, 2, 3, 4, 5],
//   L.map(a => Promise.resolve(a * a)),
//   L.filter(a => Promise.resolve(a % 2)),
//   reduce(add),
//   console.log
// );

// --------------------------------


// 지연 평가 + Promise의 효율성

// go([1, 2, 3, 4, 5, 6, 7, 8],
//   map(a => {
//       console.log(a);
//       return new Promise(resolve => setTimeout(() => resolve(a * a), 1000))
//   }),
//   filter(a => {
//       console.log(a);
//       return new Promise(resolve => setTimeout(() => resolve(a % 2), 1000))
//   }),
//   take(2),
//   console.log
// )

go([1, 2, 3, 4, 5, 6, 7, 8],
  L.map(a => {
      console.log(a);
      return new Promise(resolve => setTimeout(() => resolve(a * a), 1000))
  }),
  L.filter(a => {
      console.log(a);
      return new Promise(resolve => setTimeout(() => resolve(a % 2), 1000))
  }),
  take(2),
  console.log
)