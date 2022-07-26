import MyApp from "./MyApp.js";

window.customElements.define("my-app", MyApp);

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const elements = document.querySelectorAll("my-app");

  elements.forEach((e) => {
    console.log(e);
    e.color = "green";
  });
});
