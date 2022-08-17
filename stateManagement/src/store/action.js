export const TODO_INSERT = "TODO_INSERT";

export const insertTodo = (text) => ({
  type: TODO_INSERT,
  payload: {
    text,
    completed: false,
  },
});
