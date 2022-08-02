import Router from "./router/index.js";
import { HomePage, ListPage } from "./page/index.js";
import { Header } from "./components/index.js";

class App {
  constructor(props) {
    this.props = props;
    this.render();
  }

  setup() {
    // const registry = {
    //   "#/": HomePage,
    //   "#/list": ListPage,
    // };
    // const router = new Router(registry);
    // router.init();
  }

  render() {
    const { rootElementId } = this.props;
    const root = document.querySelector(rootElementId);
    const header = new Header();

    root.appendChild(header.render());
  }
}

export default App;
