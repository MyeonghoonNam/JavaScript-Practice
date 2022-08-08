export default class ProductList {
  render() {
    const $el = document.createElement("div");
    $el.innerHTML = `
      <ul>
        <li data-url='/product/1'>지갑</li>
        <li data-url='/product/2'>연필</li>
        <li data-url='/product/3'>핸드폰</li>
      </ul>
    `;

    return $el;
  }
}
