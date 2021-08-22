import header from './header.js';
import toDoForm from './toDoForm.js';
import toDoList from './toDoList.js';
import toDoCount from './toDoCount.js';
import { setItem } from './storage.js';

export default function App({ target, initialState }) {
  try {
    if (!new.target) {
      throw new Error('경고 : App 컴포넌트를 new로 생성해주세요 !');
    }

    new header({
      target,
      text: 'Simple ToDoList !',
    });

    const todoList = new toDoList({
      target,
      initialState,
      onToDo: (toDoItem) => {
        const { index } = toDoItem.dataset;
        const updateState = todoList.state;

        updateState[index].isCompleted = !updateState[index].isCompleted;

        todoList.setState(updateState);
        todoCount.setState(updateState);

        setItem('todos', JSON.stringify(updateState));
      },
      onRemove: (toDoItem) => {
        const { index } = toDoItem.dataset;
        const updateState = [...todoList.state];

        updateState.splice(index, 1);

        todoList.setState(updateState);
        todoCount.setState(updateState);

        setItem('todos', JSON.stringify(updateState));
      },
    });

    new toDoForm({
      target,
      onSubmit: (text) => {
        const updateState = [...todoList.state, { text, isCompleted: false }];

        todoList.setState(updateState);

        setItem('todos', JSON.stringify(updateState));
      },
    });

    const todoCount = new toDoCount({
      target,
      initialState,
    });
  } catch (e) {
    alert(e.message);
  }
}
