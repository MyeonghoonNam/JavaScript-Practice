export default function UserList({ target, initialState, onSelect }) {
  const userList = document.createElement('div');

  target.appendChild(userList);

  this.state = initialState;

  this.setState = (updateState) => {
    this.state = updateState;
    this.render();
  };

  this.render = () => {
    userList.innerHTML = `
      <h1>Users</h1>
      <ul>
        ${this.state
          .map(
            (username) => `
              <li data-username="${username}">${username}</li>
            `
          )
          .join('')}
          <li>
            <form>
              <input class="new-user" type="text" placeholder="add User"/>
            </form>
          </li>
      </ul>
    `;
  };

  this.render();

  userList.addEventListener('click', (e) => {
    const li = e.target.closest('li[data-username]');

    if (li) {
      const { username } = li.dataset;

      onSelect(username);
    }
  });

  userList.addEventListener('submit', () => {
    const newUser = userList.querySelector('.new-user');
    const newUserValue = newUser.value;

    if (newUserValue.length > 0) {
      onSelect(newUser.value);
      newUser.value = '';
    }
  });
}
