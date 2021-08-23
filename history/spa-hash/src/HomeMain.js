export default function HomeMain({ target }) {
  const homeMain = document.createElement('div');

  target.appendChild(homeMain);

  this.render = () => {
    homeMain.innerHTML = `
      <h1>Home</h1>
      <div>Hello</div>     
    `;
  };

  this.render();
}
