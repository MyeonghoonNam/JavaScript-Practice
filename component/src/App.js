import header from './header.js';
import toDoForm from './toDoForm.js';
import toDoList from './toDoList.js';
import { setItem } from './storage.js';

export default function App({ target, initialState }) {
  try {
    if(!new.target) {
      throw new Error('경고 : App 컴포넌트를 new로 생성해주세요 !');
    }

    new header({
      target,
      text: 'Simple ToDoList !',
    });
    
    const todoList = new toDoList({
      target,
      initialState,
    });

    new toDoForm({
      target,
      onSubmit: (text) => {
        const nextState = [...todoList.state, { text }];
  
        todoList.setState(nextState);
  
        setItem('todos', JSON.stringify(nextState));
      },
    });
  
  } catch(e) {
    alert(e.message);
  }
}
