import Router from "./router/index.js";
import {
  HomePage,
  UserPage,
  UserDetailPage,
  ProductPage,
  ProductDetailPage,
} from "./pages/index.js";

export default class App {
  constructor(props) {
    this.props = props;
  }

  setup() {
    const { rootElementId } = this.props;
    const registry = {
      "/": HomePage,
      "/user": UserPage,
      "/user/:id": UserDetailPage,
      "/product": ProductPage,
      "/product/:id": ProductDetailPage,
    };

    const router = new Router(registry);
    router.setup(rootElementId);
  }
}
