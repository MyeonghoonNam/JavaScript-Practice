export default class ProductDetailPage {
  constructor(id) {
    this.id = id;
  }

  render() {
    const $el = document.createElement("main");
    $el.innerHTML = `
      <p>Product ${this.id}의 Detail Page</p>
    `;

    return $el;
  }
}
