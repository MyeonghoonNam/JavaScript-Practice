// 쿠키 관리는 String으로 하며 불편하다.
document.cookie = 'key1=value1;';
console.log(document.cookie);

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
