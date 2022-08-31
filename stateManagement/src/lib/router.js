const Router = () => {
  const ROUTES = {};

  const init = (routes) => {
    Object.assign(ROUTES, routes);

    window.addEventListener("popstate", () => {
      routeChange(window.location.pathname);
    });
  };

  const routeChange = (pathname) => {
    window.history.pushState({}, null, pathname);
    const page = routing(pathname);

    render(page);
  };

  const routing = (pathname) => {
    const [_, routeName, param] = pathname.split("/");
    let page;

    if (ROUTES[pathname]) {
      page = ROUTES[pathname]();
    } else if (param) {
      // 미구현
      // 페이지별 상태 갱신 위한 스토어 수정 필요
    }

    return page;
  };

  const render = (page) => {
    const $target = document.querySelector("#root");

    $target.innerHTML = "";
    $target.appendChild(page);
  };

  return { init, routing, routeChange };
};

export const router = Router();
