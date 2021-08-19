import header from './header.js';
import toDoForm from './toDoForm.js';
import toDoList from './toDoList.js';
import { setItem } from './storage.js';

export default function App({ target, initialState }) {
  new header({
    target,
    text: 'Simple ToDoList !',
  });

  new toDoForm({
    target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];

      todoList.setState(nextState);

      setItem('todos', JSON.stringify(nextState));
    },
  });

  const todoList = new toDoList({
    target,
    initialState,
  });
}
