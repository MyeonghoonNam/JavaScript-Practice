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
          clickElement.tagName === 'S'
            ? clickElement.closest('span')
            : clickElement;
        const toDoItem = clickElement.closest('li');

        if (className === 'todo__text') {
          onToDo(toDoItem);
        } else if (className === 'todo__button--delete') {
          onRemove(toDoItem);
        }
      });
    };

    const createToDoList = () => {
      return `
        <ul>
          ${this.state
            .map(
              ({ text, isCompleted }, index) => `
            <li class="todo" data-index="${index}">
              <span class="todo__text">${
                isCompleted ? `<s>${text}</s>` : `${text}`
              }</span>
              <button class="todo__button--delete">delete</button>
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
