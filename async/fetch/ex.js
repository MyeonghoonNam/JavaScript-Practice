/*
비동기 http 요청을 좀 더 스기 편하게 해주는 API이다.
XMLHTTPRequest를 대체한다.
Promise 기반으로 동작한다.
*/

// 존재하는 url 처리
// fetch('https://kdt.roto.codes/todos')
//   .then((res) => {
//     // fetch의 기본 응답 결과는 Response 객체이다.
//     console.log(res);

//     // Response를 객체로 받고 json이나 text로 바꾸는 처리 과정이 있어야 원하는 데이터를 얻을 수 있다.
//     // Response 객체는 json 메서드를 제공하며 이는 JSON형태의 메소드를 자바스크립트 객체로 변환하여 Promise로 반환한다.
//     return res.json();

//     // Response 객체는 json, text 말고도 다양한 메서드를 제공한다.
//     // return res.text();
//   })
//   .then((todos) => {
//     console.log(todos);
//   });

// 존재하지 않는 url 처리
// fetch('https://kdt.roto.codes/undefined')
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// HTTP error가 발생하더라도 reject 되지 않고 네트워크 에러나 요청이 완료되지 못한 경우에만 reject가 이루어진다. 즉, 서버 요청 중 에러가 발생한 경우에도 then으로 떨어지므로 Response 객체의 status code나 ok를 체크하는 것이 필수이다.

// url에 대한 예외 처리 적용
// fetch('https://kdt.roto.codes/undefined')
//   .then((res) => {
//     // Response 객체의 ok 는 status가 200~299 사이인 경우에만 true가 반환됩니다.
//     if (res.ok) {
//       return res.json();
//     }

//     throw new Error(`Status: ${res.status} ! 요청 처리에 실패하였습니다 !`);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     document.querySelector('body').innerHTML = e.message;
//   });

// fetch api는 두 번째 인자로 옵션 사용이 가능하다.

// 약속된 형태의 헤더 제작 가능
const headers = new Headers(); // 빈 헤더
headers.append('x-auth-token', 'TOKEN');

// post 옵션을 받아 헤더에 대해 인증하고 body의 내용을 수행한다.
fetch('https://kdt.roto.codes/product', {
  method: 'POST',
  headers,
  body: JSON.stringify(product),
});
