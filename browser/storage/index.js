// 쿠키 관리는 String으로 하며 불편하다.
document.cookie = 'key1=value1';
document.cookie = 'key2=value2';

console.log(document.cookie);
console.log(document.cookie.split(';')); // 전체 쿠키정보의 분리가 필요하다.

// 로컬 스토리지
// 데이터를 저장한다.
localStorage.setItem('name', 'hoon');
console.log(localStorage.getItem('name')); // hoon

// 데이터를 지운다.
localStorage.removeItem('name');

// 데이터를 전부 지운다.
localStorage.clear();

// 세션 스토리지
sessionStorage.setItem('name', 'hoon');
console.log(sessionStorage.getItem('name')); // hoon

// 데이터를 지운다.
sessionStorage.removeItem('name');

// 데이터를 전부 지운다.
sessionStorage.clear();
