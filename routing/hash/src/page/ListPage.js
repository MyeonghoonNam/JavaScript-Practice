import { Header } from "../components/index.js";

class ListPage {
  render() {
    const page = document.createElement("main");
    const header = new Header().render();
    const p = document.createElement("p");
    p.innerText = "This is List Page";

    page.appendChild(header);
    page.appendChild(p);
    return page;
  }
}

export default ListPage;
