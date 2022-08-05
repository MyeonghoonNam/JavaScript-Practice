export default class UserList {
  render() {
    const $el = document.createElement("div");
    $el.innerHTML = `
      <a href="/user/1">Hoon</a>
      <a href="/user/2">Jung</a>
      <a href="/user/3">Su</a>
    `;

    return $el;
  }
}
