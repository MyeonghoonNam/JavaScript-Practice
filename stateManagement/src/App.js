import { Header, Todos, TodosController } from "./components/index.js";

const App = () => {
  const COMPONENTS = {
    Header: Header(),
    Todos: Todos(),
    TodosController: TodosController(),
  };

  const render = (target) => {
    const $container = target.cloneNode(true);
    $container.innerHTML = "";

    const $header = COMPONENTS["Header"]();
    const $todos = COMPONENTS["Todos"]();
    const $todosController = COMPONENTS["TodosController"]();

    const $element = document.createElement("section");
    $element.setAttribute("class", "todoapp");

    $element.appendChild($header);
    $element.appendChild($todos);
    $element.appendChild($todosController);

    $container.appendChild($element);

    return $container;
  };

  return (root) => {
    const $element = render(root);
    return $element;
  };
};

export default App;
