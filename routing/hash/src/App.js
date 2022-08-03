import Router from "./router/index.js";
import { HomePage, ListPage } from "./page/index.js";

class App {
  constructor(props) {
    this.props = props;
  }

  setup() {
    const registry = {
      "#/": HomePage,
      "#/list": ListPage,
    };

    const router = new Router(registry);
    router.init();
  }
}

export default App;
