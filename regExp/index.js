// 자주 사용하는 정규표현식

// 1. 특정 단어로 시작하는지 검사
const url = "https://example.com";

// http:// or https:// 로 시작하는지 검사하며 두 정규식 모두 동일 동작
const reg1 = /^https?:\/\//;
const reg2 = /^(http|https):\/\//;

console.log(reg1.test(url));
console.log(reg2.test(url));

// 2. 특정 단어로 끝나는지 검사
const fileName = "index.html";

// 'html'로 끝나는지 검사
const reg3 = /html$/;
console.log(reg3.test(fileName));

// 3. 숫자로만 이루어진 문자열 검사
const number = "12345";
const reg4 = /^\d+$/;
console.log(reg4.test(number));

// 4. 하나 이상의 공백으로 시작하는지 검사
const string = "  Hi";
const reg5 = /[\s]+/;
console.log(reg5.test(string));

// 5. 아이디로 사용 가능한지 검사
const id = "abc123";

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사
const reg6 = /^[A-Za-z0-9]{4, 10}$/;
console.log(reg6.test(id));

// 6. 이메일 정규식
const email = "javascript2@gmail.com";
const reg7 =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

console.log(reg7.test(email));

// 7. 핸드폰 번호 정규식
const phone = "010-1234-5678";
const reg8 = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(reg8.test(phone));

// 8. 특수문자 포함여부 정규식
const target = "abc#123!";
const reg9 = /[^A-Za-z0-9]/g;
console.log(reg9.test(target));
console.log(target.replace(reg9, "")); // 특수문자 제거
