import { Header } from "../components/index.js";
class HomePage {
  render() {
    const page = document.createElement("main");
    const header = new Header().render();
    const p = document.createElement("p");
    p.innerText = "This is Home Page";

    page.appendChild(header);
    page.appendChild(p);
    return page;
  }
}

export default HomePage;
