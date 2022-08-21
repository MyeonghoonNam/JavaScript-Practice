const Router = (routes) => {
  const ROUTES = { ...routes };
  let $root;

  const init = () => {
    window.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        routePush(e.target.getAttribute("href"));
      }
    });

    window.onpopstate = () => {
      routing();
    };
  };

  const routePush = (pathname) => {
    // window.location.pathname = pathname;
    // window.history.pushState({}, null, pathname);
    // routing();
  };

  const routing = () => {
    const pathname = window.location.pathname;
    const [_, routeName, param] = pathname.split("/");
    let page;

    if (ROUTES[pathname]) {
      page = ROUTES[pathname]($root);
    } else if (param) {
      // const compoentn = ROUTES[`/${routeName}`]
    }

    // refactoring 필요

    // if (page) {
    //   render(page);
    // }
    return page;
  };

  init();

  return (target) => {
    $root = target;
    const $element = routing();

    return $element;
  };
};

export default Router;
