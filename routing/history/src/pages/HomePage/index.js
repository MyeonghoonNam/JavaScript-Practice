export default class HomePage {
  render() {
    const $el = document.createElement("main");
    $el.innerHTML = `
      <a href="/user">User Page</a>
      <a href="/product">Product Page</a>
    `;

    return $el;
  }
}
