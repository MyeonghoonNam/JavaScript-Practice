import { MainTodosPage, SubTodosPage } from "./pages/index.js";
import Router from "./lib/router.js";

const App = () => {
  const router = Router({
    "/": MainTodosPage(),
    "/sub": SubTodosPage(),
  });

  return (root) => {
    const $element = router(root);
    return $element;
  };
};

export default App;
