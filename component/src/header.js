function header({ target, text }) {
  const header = document.createElement('h1');

  target.appendChild(header);

  this.render = () => {
    header.innerText = text;
  };

  this.render();
}
