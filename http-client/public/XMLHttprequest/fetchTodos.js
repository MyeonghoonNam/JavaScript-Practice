import api from "./api.js";

const HEADERS = {
  "Content-Type": "application/json",
};

const BASE_URL = "/api/todos";

const getTodos = () => {
  return api.get(BASE_URL);
};

const createTodo = (text) => {
  const todo = {
    text,
    completed: false,
  };

  return api.post(BASE_URL, HEADERS, todo);
};

const updateTodo = (todo) => {
  const url = `${BASE_URL}/${todo.id}`;
  return api.patch(url, HEADERS, todo);
};

const deleteTodo = (id) => {
  const url = `${BASE_URL}/${id}`;
  return api.delete(url, HEADERS);
};

export { getTodos, createTodo, updateTodo, deleteTodo };
