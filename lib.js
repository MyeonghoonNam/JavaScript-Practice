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
