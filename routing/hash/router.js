import { NotFound } from "./pages.js";

class Router {
  constructor(routes) {
    this.root = "#root";
    this.routes = routes;
  }

  init() {
    window.addEventListener("hashchange", () => {
      this.routing();
    });

    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    this.routing();
  }

  routing() {
    const { hash } = window.location;
    let page = "";

    if (this.routes[hash]) {
      const component = new this.routes[hash]();
      page = component.render();
    } else {
      const component = new NotFound();
      page = component.render();
    }

    this.render(page);
  }

  render(page) {
    const rootElement = document.querySelector(this.root);
    rootElement.innerHTML = page;
  }
}

export default Router;
