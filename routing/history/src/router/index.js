export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.rootElementId = "";
  }

  setup(rootElementId) {
    if (!rootElementId) {
      console.error("잘못된 root 입니다.");
      return null;
    }

    this.rootElementId = rootElementId;
    this.routing(window.location.pathname);

    window.addEventListener("click", (e) => {
      const link = e.target.closest("li");

      if (link) {
        e.preventDefault();
        this.routePush(link.dataset.url);
      }
    });

    window.onpopstate = () => {
      this.routing(window.location.pathname);
    };
  }

  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname);
  }

  routing(pathname) {
    const [_, route, param] = pathname.split("/");
    let page = null;

    if (this.routes[pathname]) {
      const component = new this.routes[pathname]();
      page = component.render();
    } else if (param) {
      const component = new this.routes[`/${route}/:id`](param);
      page = component.render();
    }

    if (page) {
      this.render(page);
    } else {
      // not found html render
    }
  }

  render(page) {
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = "";
    rootElement.appendChild(page);
  }
}
