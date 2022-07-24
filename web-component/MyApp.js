const DEFAULT_COLOR = "black";

export default class MyApp extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  get color() {
    return this.getAttribute("color") || DEFAULT_COLOR;
  }

  set color(value) {
    this.setAttribute("color", value);
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.div = document.createElement("div");
      this.div.textContent = "Welcome My App!";
      this.div.style.color = this.color;

      this.appendChild(this.div);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.div) {
      return;
    }

    if (name === "color") {
      console.log(`${oldValue} => ${newValue}`);
      this.div.style.color = newValue;
    }
  }
}
