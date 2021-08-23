export default function Nav({ target }) {
  const nav = document.createElement('nav');

  target.appendChild(nav);

  this.render = () => {
    nav.innerHTML = `
      <a href="#">Home</a>
      <a href="#list">List</a>
    `;
  };

  this.render();
}
