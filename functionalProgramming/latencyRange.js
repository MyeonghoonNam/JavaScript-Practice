const L = {};

L.range = function *(l){
    let i = -1;
    while (++i < l) {
        yield i;
    }
};

const list = L.range(4);

console.log(list); //L.range {<suspended>}
console.log(reduce(add, list)); // 6
