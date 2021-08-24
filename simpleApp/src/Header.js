export default function Header({ target, initialState }) {
  const h1 = document.createElement('h1');

  target.appendChild(h1);

  this.state = initialState;

  this.setState = (updatestate) => {
    this.state = updatestate;
    this.render();
  };

  this.render = () => {
    const { username, isTodoLoading } = this.state;

    h1.innerHTML = `${username} 님의 할일 목록 ${
      isTodoLoading ? 'Loading...' : ''
    }`;
  };

  this.render();
}
