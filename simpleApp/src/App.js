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

    header.setState({
      username: this.state.username,
      isTodoLoading: this.state.isTodoLoading,
    });

    todoList.setState({
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
    });
  };

  const header = new Header({
    target,
    initialState: {
      username: this.state.username,
      isTodoLoading: this.state.isTodoLoading,
    },
  });

  new TodoForm({
    target,
    onSubmit: async (content) => {
      const todo = {
        content,
        isCompleted: false,
      };

      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });

      await request(`/${this.state.username}?delay=3000`, {
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
    onToggle: async (id) => {
      await request(`/${this.state.username}/${id}/toggle`, {
        method: 'PUT',
      });

      await fetchTodos();
    },
    onRemove: async (id) => {
      await request(`/${this.state.username}/${id}`, {
        method: 'DELETE',
      });

      await fetchTodos();
    },
  });

  const fetchTodos = async () => {
    const { username } = this.state;

    if (username) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });

      const todos = await request(`/${username}?delay=5000`);

      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  fetchTodos();
}
