export default function TodoList({ target, initialState, onToggle, onRemove }) {
  const todo = document.createElement('div');

  target.appendChild(todo);

  /*
  {
    username: '~',
    todos: []
  }
  */

  this.state = initialState;

  this.setState = (updateState) => {
    this.state = updateState;
    this.render();
  };

  this.render = () => {
    todo.innerHTML = /* html */ `
      <ul>
        ${this.state
          .map(
            ({ _id, content, isCompleted }) => /* html */ `
              <li class="todo-item" data-id="${_id}">
                ${isCompleted ? `<s>${content}</s>` : content}
                <button class="remove">x</button>
              </li>
            `
          )
          .join('')}
      </ul>
    `;

    todo.addEventListener('click', (e) => {
      const li = e.target.closest('li');

      if (li) {
        const { id } = li.dataset;
        const { className } = e.target;

        if (className === 'remove') {
          onRemove(id);
        } else {
          onToggle(id);
        }
      }
    });
  };

  this.render();
}
