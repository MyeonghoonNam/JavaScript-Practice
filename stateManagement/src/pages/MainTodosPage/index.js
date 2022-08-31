import {
  Header,
  Todos,
  TodosController,
  Navigation,
} from "../../components/index.js";

const HomeTodosPage = (root) => {
  const COMPONENTS = {
    Header: Header(),
    Todos: Todos(),
    TodosController: TodosController(),
    Navigation: Navigation(),
  };

  const render = () => {
    const $container = document.querySelector(root).cloneNode();

    const $element = document.createElement("section");
    $element.setAttribute("class", "todoapp");

    const $header = COMPONENTS["Header"]("Main Todos");
    const $todos = COMPONENTS["Todos"]();
    const $todosController = COMPONENTS["TodosController"]();
    const $navigation = COMPONENTS["Navigation"]();

    $element.appendChild($header);
    $element.appendChild($todos);
    $element.appendChild($todosController);

    $container.appendChild($element);
    $container.appendChild($navigation);

    return $container;
  };

  return () => {
    const $element = render();
    return $element;
  };
};

export default HomeTodosPage;
