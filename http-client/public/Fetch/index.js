import { getTodos } from "./fetchTodos.js";

const TODO_TEXT = "Simple Todo";

const printResult = (action, result) => {
  const time = new Date().toLocaleTimeString();
  const node = document.createElement("p");

  node.textContent = `${action}: ${JSON.stringify(result)} (${time})`;
  document.querySelector("div").appendChild(node);
};

const onListClick = async () => {
  const result = await getTodos();
  printResult("List Todos", result);
};

const onAddClick = async () => {};

const onUpdateClick = async () => {};

const onDeleteClick = async () => {};

document
  .querySelector("button[data-list]")
  .addEventListener("click", onListClick);
document
  .querySelector("button[data-add]")
  .addEventListener("click", onAddClick);
document
  .querySelector("button[data-update]")
  .addEventListener("click", onUpdateClick);
document
  .querySelector("button[data-delete]")
  .addEventListener("click", onDeleteClick);