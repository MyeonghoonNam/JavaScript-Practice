import { TODO_INSERT } from "./action.js";

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
  }
};

export { reducer };
