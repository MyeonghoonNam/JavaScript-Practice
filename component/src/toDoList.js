export default function toDoList({ target, initialState }) {
  const toDoList = document.createElement('div');

  target.appendChild(toDoList);

  this.state = initialState;

  this.setState = (nextState) => {
    (this.state = nextState), this.render();
  };

  this.render = () => {
    toDoList.innerHTML = `
      <ul>
        ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
      </ul>
    `;
  };

  this.render();
}
