import { UserList } from "../../components/index.js";

export default class UserPage {
  render() {
    const $el = document.createElement("main");
    $el.innerHTML = `
      <p>User Page</p>
    `;

    const userList = new UserList();
    $el.appendChild(userList.render());

    return $el;
  }
}
