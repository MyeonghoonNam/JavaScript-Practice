export default class HomePage {
  render() {
    const $el = document.createElement("main");
    $el.innerHTML = `
      <ul>
        <li data-url="/user">User Page</li>
        <li data-url="/product">Product Page</li>
      </ul>
    `;

    return $el;
  }
}
