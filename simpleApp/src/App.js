import Header from './Header.js';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import { request } from './api.js';

export default function App({ target }) {
  this.state = {
    username: 'roto',
    todos: [],
    isTodoLoading: false,
  };

  this.setState = (updateState) => {
    this.state = updateState;

    todoList.setState({
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
    });
  };

  new Header({
    target,
    initialState: this.state.username,
  });

  new TodoForm({
    target,
    onSubmit: async (content) => {
      const todo = {
        content,
        isCompleted: false,
      };

      await request(`/${this.state.username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });

      await fetchTodos();
    },
  });

  const todoList = new TodoList({
    target,
    initialState: {
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
    },
    onToggle: (id) => {
      alert(`${id} 토글`);
    },
    onRemove: (id) => {
      alert(`${id} 삭제`);
    },
  });

  const fetchTodos = async () => {
    const { username } = this.state;

    if (username) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });

      const todos = await request(`/${username}`);

      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  fetchTodos();
}
