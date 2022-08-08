export default class UserList {
  render() {
    const $el = document.createElement("div");
    $el.innerHTML = `
      <ul>
        <li data-url='/user/1'>Hoon</li>
        <li data-url='/user/2'>Jung</li>
        <li data-url='/user/3'>Su</li>
      </ul>
    `;

    return $el;
  }
}
