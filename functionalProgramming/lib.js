// 테스트 케이스
// const products = [
//   {name :'반팔티', price: 15000},
//   {name :'긴팔티', price: 20000},
//   {name :'핸드폰케이스', price: 15000},
//   {name :'후드티', price: 30000},
//   {name :'바지', price: 25000},
// ];
const L = {};

const curry = f => 
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const add = (a, b) => a + b;

const go = (...args) => reduce((a, f) => f(a), args); 

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const reduce = curry((f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for(const i of iter) {
    acc = f(acc, i);
  }

  return acc;
})

const take = curry((l, iter) => {
  let response = [];
  
  for(const a of iter) {
    response.push(a);

    if(response.length === l) return response;
  }

  return response;
})

L.map = curry(function *(f, iter) {
  for(const a of iter) yield f(a);
});

const map = curry(pipe(L.map, take(Infinity)));

L.filter = curry(function *(f, iter) {
  for(const a of iter) {
    if(f(a)) yield a;
  }
})

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
const flatMap = curry(pipe(L.flatMap, takeAll));

// const f = pipe(
//   (a, b) => a + b,
//   a => a + 10,
//   a => a + 100
// )
  
  
// const mult = curry((a, b) => a * b);
// // console.log(mult(3)(2));

// const mult3 = mult(3);
// // console.log(mult3(3));
// // console.log(mult3(4));
// // console.log(mult3(5));


// // 함수의 코드 변천 과정 : 출력코드는 동일하다.
// console.log(
//   reduce(
//     add,
//     map(p => p.price,
//       filter(p => p.price < 20000, products))));

// // go 함수를 통한 축약
// go(
//   products,
//   products => filter(p => p.price < 20000, products),
//   products => map(p => p.price, products),
//   prices => reduce(add, prices),
//   console.log
// );

// // currying을 통한 축약
// go(
//   products,
//   filter(p => p.price < 20000),
//   map(p => p.price),
//   reduce(add),
//   console.log
// );


// // 함수 조합으로 함수 만들기
// // pipe 함수 활용
// const total_price = pipe(
//   map(p => p.price),
//   reduce(add)
// );

// const base_total_price = predi => pipe(
//   filter(predi),
//   total_price
// );

// go(
//   products,
//   base_total_price(p => p.price < 20000),
//   console.log
//   );
  
// go(
//   products,
//   base_total_price(p => p.price >= 20000),
//   console.log
// );