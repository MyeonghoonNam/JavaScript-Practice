// 선언형 방식 토글 버튼 만들기

// 명령형 방식 토글 버튼 만들기
// 기능 1 : 클릭할 때 삭선 생성
// 기능 2 : 1번 버튼만 3번 클릭할 때 마다 alert
// 기능 3 : 기본 3초 뒤에 자동 토글이 풀리게 되는 TimerButton
// 기능 4 : ButtonGroup 만들기

// 선언형 프로그래밍을 통한 추상화

function timerButton({ target, text, timer = 3000 }) {
  const button = new toggleButton({
    target,
    text,
    onClick: () => {
      setTimeout(() => {
        button.setState({
          ...button.state,
          toggled: !button.state.toggled,
        });
      }, timer);
    },
  });
}

function toggleButton({ target, text, onClick }) {
  const button = document.createElement('button');

  target.appendChild(button);

  this.state = {
    clickCount: 0,
    toggled: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    button.innerText = text;

    button.style.textDecoration = this.state.toggled ? 'line-through' : 'none';
  };

  button.addEventListener('click', () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled,
    });

    if (onClick) {
      onClick(this.state.clickCount);
    }
  });

  this.render();
}

function buttonGroup({ target, buttons }) {
  const group = document.createElement('div');
  let isInit = false;

  this.render = () => {
    if (!isInit) {
      buttons.forEach(({ type, ...props }) => {
        if (type === 'toggle') {
          new toggleButton({ target: group, ...props });
        } else if (type === 'timer') {
          new timerButton({ target: group, ...props });
        }
      });

      target.appendChild(group);
      isInit = true;
    }
  };

  this.render();
}

const main = document.querySelector('body');

// new toggleButton({
//   target: main,
//   text: 'Button 1',
//   onClick: (clickCount) => {
//     if (clickCount % 3 === 0) {
//       alert('3번째 클릭 !');
//     }
//   },
// });

// new toggleButton({
//   target: main,
//   text: 'Button 2',
// });

// new toggleButton({
//   target: main,
//   text: 'Button 3',
// });

// new toggleButton({
//   target: main,
//   text: 'Button 4',
// });

// new timerButton({
//   target: main,
//   text: '타이머 1!',
// });

// new timerButton({
//   target: main,
//   text: '타이머 2!',
//   timer: 1000 * 5,
// });

new buttonGroup({
  target: main,
  buttons: [
    {
      type: 'toggle',
      text: '토글 버튼 1',
    },
    {
      type: 'toggle',
      text: '토글 버튼 2',
    },
    {
      type: 'timer',
      text: '타이머 !',
      timer: 3000,
    },
  ],
});
