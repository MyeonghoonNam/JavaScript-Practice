import { ProductList } from "../../components/index.js";

export default class ProductPage {
  render() {
    const $el = document.createElement("main");
    $el.innerHTML = `
      <p>Product Page</p>
    `;

    const productList = new ProductList();
    $el.appendChild(productList.render());

    return $el;
  }
}
