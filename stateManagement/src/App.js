import { MainTodosPage, SubTodosPage } from "./pages/index.js";
import { router } from "./lib/router.js";

const App = (root) => {
  router.init({
    "/": MainTodosPage(root),
    "/sub": SubTodosPage(root),
  });

  const render = () => {
    const pathname = window.location.pathname;
    const $app = router.routing(pathname);

    return $app;
  };

  return () => {
    const $app = render();
    return $app;
  };
};

export default App;
