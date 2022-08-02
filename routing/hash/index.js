import Router from "./router.js";
import { Home, List } from "./pages.js";

const registry = {
  "#/": Home,
  "#/list": List,
};

const router = new Router(registry);
router.init();
