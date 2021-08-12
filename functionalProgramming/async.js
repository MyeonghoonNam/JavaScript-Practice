function add10(a, callback){
	setTimeout(()=>callback(a+10), 100);
}


function add20(a) {
  return new Promise(resolve => setTimeout(() => 
    resolve(a + 20), 100));
}


const cb = add10(5, res => {
  add10(res, res => {
    add10(res, res => {
      console.log(res);
    })
  })
});

const p = add20(5)
  .then(add20)
  .then(add20)
  .then(console.log)

console.log(cb); // undefined, 추후 콜백에 의한 값이 출력된다.
console.log(p); // promise 객체 반환, 추후 값 제어를 통한 값 호출