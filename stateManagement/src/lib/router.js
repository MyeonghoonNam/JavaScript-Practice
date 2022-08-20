import getClosestElement from "../utils/getClosestElement.js";

const Router = (routes) => {
  const ROUTES = { ...routes };

  const init = (rootElementId) => {
    if (!rootElementId) {
      console.error("잘못된 루트 Id");
      return;
    }

    routing(window.location.pathname);

    window.addEventListener("click", (e) => {
      const $button = getClosestElement(e.target, "button");

      if ($button) {
        routePush($button.href);
      }
    });

    window.onpopstate = () => {
      routing(window.location.pathname);
    };
  };

  const routePush = (pathname) => {
    window.history.pushState({}, null, pathname);
    routing(window.location.pathname);
  };

  const routing = (pathname) => {
    const [_, routeName, param] = pathname.split("/");
    let page = "";

    if (ROUTES[pathname]) {
      const component = ROUTES[pathname]();
      page = component();
    } else if (param) {
      // const compoentn = ROUTES[`/${routeName}`]
    }

    // refactoring 필요

    // if (page) {
    //   render(page);
    // }
  };

  const render = (rootElementId) => {
    const $target = document.querySelector(rootElementId);
    const $element = routing(window.location.pathname);

    $target.appendChild($element);

    return $target;
  };

  init();

  return (target) => {
    const $element = render(target);
    return $element;
  };
};

export default Router;
