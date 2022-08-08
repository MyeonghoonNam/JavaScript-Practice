export default class UserDetailPage {
  constructor(id) {
    this.id = id;
  }

  render() {
    const $el = document.createElement("main");
    $el.innerHTML = `
      <p>User ${this.id}의 Detail Page</p>
    `;

    return $el;
  }
}
