import App from "./src/App.js";
import { store } from "./src/store/store.js";
import applyDiff from "./src/lib/applyDiff.js";
import focusInputForm from "./src/utils/focusInputForm.js";

const config = {
  rootDom: "#root",
  focusDom: ".new-todo",
};

const app = App(config.rootDom);

const render = () => {
  window.requestAnimationFrame(() => {
    const entry = document.body;
    const realDom = document.querySelector(config.rootDom);
    const virtualDom = app();

    applyDiff(entry, realDom, virtualDom);
    focusInputForm(config.focusDom);
  });
};

store.subscribe(render);
render();
