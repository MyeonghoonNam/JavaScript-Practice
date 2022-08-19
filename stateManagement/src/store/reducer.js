import {
  TODO_INSERT,
  TODO_COMPLETEALL,
  TODO_TOGGLE,
  TODO_DELETE,
  TODO_CHANGE_FILTER,
  TODO_CLEAR_COMPLETED,
  TODO_UPDATE,
} from "./action.js";

const INITIAL_STATE = {
  todos: [],
  currentFilter: "All",
};

const reducer = (state = INITIAL_STATE, action) => {
  if (!action) {
    return { ...state };
  }

  const { type, payload } = action;

  switch (type) {
    case TODO_INSERT:
      return {
        ...state,
        todos: state.todos.concat({ ...payload }),
      };
    case TODO_COMPLETEALL:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.completed = true;
          return todo;
        }),
      };
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            todo.completed = !todo.completed;
          }

          return todo;
        }),
      };
    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== payload.id),
      };
    case TODO_CHANGE_FILTER:
      return {
        ...state,
        currentFilter: payload.filter,
      };
    case TODO_CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(({ completed }) => !completed),
      };
    case TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            todo.text = payload.text;
          }

          return todo;
        }),
      };
  }
};

export { reducer };
