const map = (f, iter) => {
  const response = [];

  for(let value of iter) {
    response.push(f(value));
  }

  return response;
}

const filter = (f, iter) => {
  const response = [];
  for(const i of iter) {
    if(f(i)) response.push(i);
  }

  return response;
}

const reduce = (f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for(const i of iter) {
    acc = f(acc, i);
  }

  return acc;
}

const add = (a, b) => a + b;

const go = (...args) => reduce((a, f) => f(a), args); 

go(
  add(0, 1),
  a => a + 10,
  a => a + 100,
  console.log
);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const f = pipe(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100
)

console.log(f(0, 1));