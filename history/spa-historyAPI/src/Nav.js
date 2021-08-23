export default function Nav({ target }) {
  const nav = document.createElement('nav');

  target.appendChild(nav);

  this.render = () => {
    nav.innerHTML = `
      <a class="link" href="/">Home</a>
      <a class="link" href="/list">List</a>
    `;
  };

  this.render();
}
