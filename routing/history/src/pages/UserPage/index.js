export default class UserPage {
  render() {
    const $el = document.createElement("main");
    $el.innerHTML = `
      <p>User Page</p>
      <ul>
        <li>Hoon</li>
        <li>Su</li>
        <li>Jung</li>
      </ul>
    `;

    return $el;
  }
}
