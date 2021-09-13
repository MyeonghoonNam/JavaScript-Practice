import TodoList from './TodoList.js';
import { request } from './api.js';
import TaskQueue from './TaskQueue.js';

export default function App({ target }) {
  this.state = {
    todos: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;

    const { todos } = this.state;

    incompletedTodoList.setState({
      ...incompletedTodoList.state,
      todos: todos.filter((todo) => !todo.isCompleted),
    });

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter((todo) => todo.isCompleted),
    });
  };

  const tasks = new TaskQueue();

  const incompletedTodoList = new TodoList({
    target,
    initialState: {
      title: '완료되지 않은 일들',
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, false),
  });

  const completedTodoList = new TodoList({
    target,
    initialState: {
      title: '완료된 일들',
      todos: [],
    },
    onDrop: (todoId) => handleTodoDrop(todoId, true),
  });

  const handleTodoDrop = async (todoId, updateValue) => {
    const nextTodos = [...this.state.todos];
    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos[todoIndex].isCompleted = updateValue;

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    tasks.addTask({
      url: `/${todoId}/toggle`,
      method: 'PUT',
    });
  };

  const fetchTodos = async () => {
    try {
      const todos = await request('');

      this.setState({
        ...this.state,
        todos,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  fetchTodos();

  const button = document.createElement('button');
  button.textContent = '변경내용 동기화';

  target.appendChild(button);

  button.addEventListener('click', () => tasks.run());
}
