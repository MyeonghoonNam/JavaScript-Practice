function App({ target, initialState }) {
  new header({
    target,
    text: 'Simple ToDoList !',
  });

  new toDoForm({
    target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];

      todoList.setState(nextState);
    },
  });

  const todoList = new toDoList({
    target,
    initialState,
  });
}
