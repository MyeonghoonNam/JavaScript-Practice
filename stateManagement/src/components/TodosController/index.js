import { store } from "../../store/store.js";
import { changeFilter, clearCompletedTodo } from "../../store/action.js";
import getClosestElement from "../../utils/getClosestElement.js";

const TodosController = () => {
  const FILTERS = ["All", "Active", "Completed"];

  const bindEvents = (target, state) => {
    const { currentFilter } = state;

    target.querySelector(".filters").addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.tagName === "UL") return;

      const $element = getClosestElement(e.target, "li");
      const filter = $element?.dataset.filter;

      if (filter === currentFilter) return;

      store.dispatch(changeFilter(filter));
    });

    target.querySelector(".clear-completed").addEventListener("click", () => {
      store.dispatch(clearCompletedTodo());
    });
  };

  const render = (state) => {
    const $element = document.createElement("footer");
    $element.setAttribute("class", "footer");

    const { todos, currentFilter } = state;
    const isCompletedTodo = todos.some(({ completed }) => completed);
    const leftTodosCount = todos.filter(({ completed }) => !completed).length;

    $element.innerHTML = `
      <span class="todo-count">${leftTodosCount} Items left</span>

      <ul class="filters">
      ${FILTERS.map(
        (filter) => `
        <li data-filter=${filter}>
          <a ${filter === currentFilter ? "class='selected'" : ""}>${filter}</a>
        </li>
      `
      ).join("")}
      </ul>

      <button ${
        isCompletedTodo
          ? 'class="clear-completed"'
          : 'class="clear-completed hidden"'
      }>Clear completed</button>
      
      `;

    return $element;
  };

  return () => {
    const state = store.getState();
    const $element = render(state);

    bindEvents($element, state);

    return $element;
  };
};

export default TodosController;
