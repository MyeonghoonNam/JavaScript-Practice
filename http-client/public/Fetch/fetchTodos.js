import http from "./http.js";

const BASE_URL = "/api/todos";
const HEADERS = {
  "Content-Type": "application/json",
};

const getTodos = () => {
  return http.get(BASE_URL);
};

const createTodo = (text) => {
  const todo = {
    text,
    completed: false,
  };

  return http.post(BASE_URL, HEADERS, todo);
};

const updateTodo = (todo) => {
  const url = `${BASE_URL}/${todo.id}`;
  return http.patch(url, HEADERS, todo);
};

const deleteTodo = () => {};

export { getTodos, createTodo, updateTodo, deleteTodo };
