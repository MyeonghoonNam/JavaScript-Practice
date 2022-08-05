import Router from "./router/index.js";
import { HomePage, UserPage } from "./pages/index.js";

export default class App {
  constructor(props) {
    this.props = props;
  }

  setup() {
    const { rootElementId } = this.props;
    const registry = {
      "/": HomePage,
      "/user": UserPage,
      "/user/:id": "userDetail",
      "/product": "productList",
      "/product/:id": "productDetail",
    };

    const router = new Router(registry);
    router.setup(rootElementId);
  }
}
