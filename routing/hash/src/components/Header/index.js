class Header {
  render() {
    const target = document.createElement("header");
    const template = `
      <a href="#/">Go To Index</a>
      <a href="#/list">Go To List</a>
      <a href="#/dummy">Dummy Page</a>
    `;
    target.innerHTML = template;

    return target;
  }
}

export default Header;
