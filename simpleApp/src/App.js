import Header from './Header.js';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import { request } from './api.js';
import UserList from './UserList.js';

export default function App({ target }) {
  const userListContainer = document.createElement('div');
  const todoListContainer = document.createElement('div');

  target.appendChild(userListContainer);
  target.appendChild(todoListContainer);

  this.state = {
    userList: [],
    selectedUserName: null,
    todos: [],
    isTodoLoading: false,
  };

  this.setState = (updateState) => {
    this.state = updateState;

    header.setState({
      selectedUserName: this.state.selectedUserName,
      isTodoLoading: this.state.isTodoLoading,
    });

    todoList.setState({
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
      selectedUserName: this.state.selectedUserName,
    });

    userList.setState(this.state.userList);

    this.render();
  };

  this.render = () => {
    const { selectedUserName } = this.state;

    todoListContainer.style.display = selectedUserName ? 'block' : 'none';
  };

  const userList = new UserList({
    target: userListContainer,
    initialState: this.state.userList,
    onSelect: async (username) => {
      this.setState({
        ...this.state,
        selectedUserName: username,
      });

      await fetchTodos();
    },
  });

  const header = new Header({
    target: todoListContainer,
    initialState: {
      selectedUserName: this.state.selectedUserName,
      isTodoLoading: this.state.isTodoLoading,
    },
  });

  new TodoForm({
    target: todoListContainer,
    onSubmit: async (content) => {
      const isFirstTodoAdd = this.state.todos.length === 0;

      const todo = {
        content,
        isCompleted: false,
      };

      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });

      await request(`/${this.state.selectedUserName}?delay=3000`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });

      await fetchTodos();

      if (isFirstTodoAdd) {
        await fetchUserList();
      }
    },
  });

  const todoList = new TodoList({
    target: todoListContainer,
    initialState: {
      isTodoLoading: this.state.isTodoLoading,
      todos: this.state.todos,
      selectedUserName: this.state.selectedUserName,
    },
    onToggle: async (id) => {
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);

      const updateTodos = [...this.state.todos];

      updateTodos[todoIndex].isCompleted = !updateTodos[todoIndex].isCompleted;

      this.setState({
        ...this.state,
        todos: updateTodos,
      });

      await request(`/${this.state.selectedUserName}/${id}/toggle?delay=3000`, {
        method: 'PUT',
      });

      await fetchTodos();
    },
    onRemove: async (id) => {
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);

      const updateTodos = [...this.state.todos];

      updateTodos.splice(todoIndex, 1);

      this.setState({
        ...this.state,
        todos: updateTodos,
      });

      await request(`/${this.state.selectedUserName}/${id}?delay=2000`, {
        method: 'DELETE',
      });

      await fetchTodos();
    },
  });

  const fetchUserList = async () => {
    const userList = await request('/users');

    this.setState({
      ...this.state,
      userList,
    });
  };

  const fetchTodos = async () => {
    const { selectedUserName } = this.state;

    if (selectedUserName) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });

      const todos = await request(`/${selectedUserName}`);

      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  const init = async () => {
    await fetchUserList();
  };

  this.render();
  init();
}
