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
      routing(window.location.pathname, "Routing");
    };
  };

  const routePush = (pathname) => {
    window.history.pushState({}, null, pathname);
    routing(pathname, "Routing");
  };

  const routing = (pathname, mode = "StateChange") => {
    const [_, routeName, param] = pathname.split("/");
    let page;

    if (ROUTES[pathname]) {
      page = ROUTES[pathname]($root);
    } else if (param) {
      // 미구현
      // 페이지별 상태 갱신 위한 스토어 수정 필요
    }

    if (page) {
      if (mode === "Routing") {
        render(page);
      } else if (mode === "StateChange") {
        return page;
      }
    } else {
      // not found page
      // 미구현
    }
  };

  const render = (page) => {
    const $target = document.querySelector("#root");

    $target.innerHTML = "";
    $target.appendChild(page);
  };

  init();

  return (target) => {
    $root = target;

    const pathname = window.location.pathname;
    const $element = routing(pathname);

    return $element;
  };
};

export default Router;
