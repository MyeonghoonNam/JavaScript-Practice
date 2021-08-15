const L = {};
const C = {};

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

function noop() {}

const catchNoop = ([...arr]) =>
  (arr.forEach(a => a instanceof Promise ? a.catch(noop) : a), arr);

C.reduce = curry((f, acc, iter) => iter ?
  reduce(f, acc, catchNoop(iter)) :
  reduce(f, catchNoop(acc)));

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

const each = f => {
  return function(iter) {
    for(const a of iter) f(a);

    return iter;
  }

}

C.take = curry((l, iter) => take(l, catchNoop([...iter])));

C.takeAll = C.take(Infinity);

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

const takeAll = take(Infinity);

L.map = curry(function *(f, iter) {
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

C.map = curry(pipe(L.map, C.takeAll));

C.filter = curry(pipe(L.filter, C.takeAll));

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

const object = entries => 
  reduce((obj, [k, v]) => (obj[k] = v, obj), {}, entries);

const mapObject = (f, obj) => go(
  obj,
  L.entries,
  L.map(([k, v]) => [k, f(v)]),
  object);

L.keys = function *(obj) {
  for(const k in obj) {
    yield k;
  }
}

L.values = function *(obj) {
  for(const k in obj) {
    yield obj[k];
  }
}

L.entries = function *(obj) {
  for (const k in obj) yield [k, obj[k]];
};

const pick = (ks, obj) => go(
  ks,
  L.map(k => [k, obj[k]]),
  L.filter(([k, v]) => v !== undefined),
  object);

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