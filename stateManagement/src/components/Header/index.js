import { store } from "../../store/store.js";
import { insertTodo } from "../../store/action.js";
import getUniqueId from "../../utils/getUniqueId.js";

const Header = () => {
  const bindEvents = (target) => {
    target.querySelector(".new-todo").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        store.dispatch(insertTodo(getUniqueId(), e.target.value));
        e.target.value = "";
      }
    });
  };

  const render = (title) => {
    const $element = document.createElement("header");
    $element.setAttribute("class", "header");

    $element.innerHTML = `
      <h1>${title}</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
      />
    `;

    return $element;
  };

  return (title) => {
    const $element = render(title);
    bindEvents($element);

    $element.querySelector(".new-todo").focus();
    return $element;
  };
};

export default Header;
