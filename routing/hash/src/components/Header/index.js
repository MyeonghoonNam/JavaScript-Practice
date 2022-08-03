const NAV_BTN_SELECTOR = "button[data-navigate]";
class Header {
  constructor() {
    this.header = document.createElement("header");
    this.bindEvents();
  }

  bindEvents() {
    this.header.addEventListener("click", (e) => {
      const { target } = e;

      if (target.matches(NAV_BTN_SELECTOR)) {
        const { navigate } = target.dataset;
        window.location.hash = navigate;
      }
    });
  }

  render() {
    const template = `
      <button data-navigate="/">
          Go To Home
      </button>
      <button data-navigate="/list">
          Go To List
      </button>
      <button data-navigate="/NotFound">
        NotFound Page
      </button>
    `;

    this.header.innerHTML = template;

    return this.header;
  }
}

export default Header;
