import { store } from "../../store/store.js";
import getClosestElement from "../../utils/getClosestElement.js";
import {
  completeAllTodos,
  toggleTodo,
  deleteTodo,
  updateTodo,
} from "../../store/action.js";

const Todos = () => {
  const bindEvents = (target) => {
    target.querySelector(".toggle-all").addEventListener("click", () => {
      store.dispatch(completeAllTodos());
    });

    target.querySelector(".todo-list").addEventListener("click", (e) => {
      const $liElement = getClosestElement(e.target, "li");
      const $clickElementClassName = e.target.className;

      const id = $liElement.dataset.id;

      if ($clickElementClassName === "destroy") {
        store.dispatch(deleteTodo(id));
      } else if ($clickElementClassName === "toggle") {
        store.dispatch(toggleTodo(id));
      }
    });

    target.querySelector(".todo-list").addEventListener("dblclick", (e) => {
      if (e.target.tagName !== "LABEL") return;
      if (target.querySelector(".editing")) return;

      const $element = getClosestElement(e.target, "li");
      const $input = $element.querySelector(".edit");

      $element.classList.add("editing");
      $input.focus();
    });

    target.querySelector(".todo-list").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const $element = getClosestElement(e.target, "li");
        $element.classList.remove("editing");

        const id = $element.dataset.id;
        const text = e.target.value;

        store.dispatch(updateTodo(id, text));
      }
    });
  };

  const render = (state) => {
    const $element = document.createElement("section");
    $element.setAttribute("class", "main");

    const { todos, currentFilter } = state;

    // 로직 분리하기
    const filterTodos = todos.filter((todo) => {
      if (currentFilter === "All") {
        return todo;
      } else if (currentFilter === "Active") {
        return !todo.completed;
      } else if (currentFilter === "Completed") {
        return todo.completed;
      }
    });

    $element.innerHTML = `
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all"> Mark all as complete </label>

      <ul class="todo-list">
      ${filterTodos
        .map(
          ({ id, text, completed }) => `
        <li ${completed ? "class='completed'" : ""} data-id=${id}>
          <div class="view">
            <input class="toggle" type="checkbox" ${
              completed ? "checked" : ""
            } />
            <label>${text}</label>
            <button class="destroy"></button>
          </div>

          <input class="edit" />
        </li>
      `
        )
        .join("")}
      </ul>
    `;

    return $element;
  };

  return () => {
    const state = store.getState();
    const $element = render(state);

    bindEvents($element);

    return $element;
  };
};

export default Todos;
