export default function toDoList({ target, initialState, onToDo, onRemove }) {
  try {
    if (!new.target) {
      throw new Error('경고 : toDoList 컴포넌트를 new로 생성해주세요 !');
    }

    const toDoList = document.createElement('section');

    target.appendChild(toDoList);

    this.state = initialState;

    this.setState = (updateState) => {
      this.state = updateState;
      this.render();
    };

    this.render = () => {
      toDoList.innerHTML = createToDoList();

      toDoList.querySelector('ul').addEventListener('click', (e) => {
        const clickElement = e.target;
        const { className } =
          clickElement.tagName === 'I'
            ? clickElement.closest('button')
            : clickElement;
        const toDoItem = clickElement.closest('li');

        if (className.includes('todo__text')) {
          onToDo(toDoItem);
        } else if (className === 'todo__button--delete') {
          onRemove(toDoItem);
        }
      });
    };

    const createToDoList = () => {
      return `
        <ul class="todos">
          ${this.state
            .sort((a, b) => a.isCompleted - b.isCompleted)
            .map(
              ({ text, isCompleted }, index) => `
            <li class="todo__row" data-index="${index}">
                <div class="todo">
                ${
                  isCompleted
                    ? `
                    <s class="todo__text success">
                      <i class="far fa-circle success"></i>${text}
                    </s>`
                    : `
                    <span class="todo__text fail">
                      <i class="fas fa-circle fail"></i>${text}
                    </span>`
                }
                  <button class="todo__button--delete">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
                <div class="todo__divider"></div>
            </li>
          `
            )
            .join('')}
        </ul>
      `;
    };

    this.render();
  } catch (e) {
    alert(e.message);
  }
}
