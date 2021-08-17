// 명령형 방식 토글 버튼 만들기
// 기능  : 클릭할 때 삭선 생성과 토글로 드러난 횟수 표현

const button1 = document.createElement('button');
button1.innerText = 'Button 1';
let button1ClickCount = 0;

const button2 = document.createElement('button');
button2.innerText = 'Button 2';
let button2ClickCount = 0;

const button3 = document.createElement('button');
button3.innerText = 'Button 3';
let button3ClickCount = 0;

const toggleButton = (button) => {
  if (button.style.textDecoration === '') {
    // 버튼 1만 구현 2, 3 역시 중복 코드를 추가해야하기 때문
    button.style.textDecoration = 'line-through';
    button1ClickCount++;
    button.innerText = `Button 1 Count : ${button1ClickCount}`;
  } else {
    button.style.textDecoration = '';
  }
};

const main = document.querySelector('body');

main.appendChild(button1);
main.appendChild(button2);
main.appendChild(button3);

main.addEventListener('click', (e) => {
  toggleButton(e.target);
});
