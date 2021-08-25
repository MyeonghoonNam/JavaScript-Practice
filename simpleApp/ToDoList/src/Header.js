export default function Header({ target, initialState }) {
  const h2 = document.createElement('h2');

  target.appendChild(h2);

  this.state = initialState;

  this.setState = (updatestate) => {
    this.state = updatestate;
    this.render();
  };

  this.render = () => {
    const { selectedUserName, isTodoLoading } = this.state;

    if (!selectedUserName) {
      h2.innerHTML = '';
      return;
    }

    h2.innerHTML = `${selectedUserName} 님의 할일 목록 ${
      isTodoLoading ? 'Loading...' : ''
    }`;
  };

  this.render();
}
