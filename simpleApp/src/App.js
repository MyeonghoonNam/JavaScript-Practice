import Header from './Header.js';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import { request } from './api.js';

export default function App({ target }) {
  this.state = {
    username: 'todo',
    todos: [],
  };

  new Header({
    target,
    initialState: this.state.username,
  });

  new TodoForm({
    target,
    onSubmit: async (content) => {
      await request(`/${this.state.username}`, {
        method: 'POST',
        body: JSON.stringify({
          content,
          isCompleted: false,
        }),
      });
    },
  });

  const todoList = new TodoList({
    target,
    initialState: this.state.todos,
    onToggle: (id) => {
      alert(`${id} 토글`);
    },
    onRemove: (id) => {
      alert(`${id} 삭제`);
    },
  });

  const init = async () => {
    const { username } = this.state;

    if (username) {
      const todos = await request(`/${username}`);
      console.log(todos);
    }
  };

  init();
}
