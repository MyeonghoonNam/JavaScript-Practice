export const TODO_INSERT = "TODO_INSERT";
export const TODO_COMPLETEALL = "TODO_COMPLETEALL";
export const TODO_TOGGLE = "TODO_TOGGLE";
export const TODO_DELETE = "TODO_DELETE";
export const TODO_CHANGE_FILTER = "TODO_CHANGE_FILTER";
export const TODO_CLEAR_COMPLETED = "TODO_CLEAR_COMPLETED";
export const TODO_UPDATE = "TODO_UPDATE";

export const insertTodo = (id, text) => ({
  type: TODO_INSERT,
  payload: {
    id,
    text,
    completed: false,
  },
});

export const completeAllTodos = () => ({
  type: TODO_COMPLETEALL,
});

export const toggleTodo = (id) => ({
  type: TODO_TOGGLE,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: TODO_DELETE,
  payload: { id },
});

export const changeFilter = (filter) => ({
  type: TODO_CHANGE_FILTER,
  payload: { filter },
});

export const clearCompletedTodo = () => ({
  type: TODO_CLEAR_COMPLETED,
});

export const updateTodo = (id, text) => ({
  type: TODO_UPDATE,
  payload: {
    id,
    text,
  },
});
