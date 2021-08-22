export default function toDoList({ target, initialState, onToDo, onRemove }) {
  try {
    if (!new.target) {
      throw new Error('경고 : toDoList 컴포넌트를 new로 생성해주세요 !');
    }

    const toDoList = document.createElement('div');

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
        const toDoItem = clickElement.closest('li');

        if (clickElement.classList.value.includes('toDo-text')) {
          onToDo(toDoItem);
        } else if (clickElement.className === 'removeToDoButton') {
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
            <li class="toDo" data-index="${index}">
              <span class="toDo-text${
                isCompleted ? ' isCompleted' : ''
              }">${text}</span>
              <button class="removeToDoButton">delete</button>
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
