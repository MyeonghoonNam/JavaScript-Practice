export default function Header({ target, initialState }) {
  const h1 = document.createElement('h1');

  target.appendChild(h1);

  this.state = initialState;

  this.render = () => {
    h1.innerHTML = `${this.state} 님의 할일 목록`;
  };

  this.render();
}
