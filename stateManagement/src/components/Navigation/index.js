import { router } from "../../lib/router.js";

const Navigation = () => {
  const handleClickNavigation = (e) => {
    const $element = e.target;

    if ($element.className === "router-btn") {
      const url = e.target.getAttribute("href");
      router.routeChange(url);
    }
  };

  const bindEvents = (target) => {
    target.addEventListener("click", handleClickNavigation);
  };

  const render = () => {
    const $navigation = document.createElement("nav");
    $navigation.innerHTML = `
      <button type="button" class="router-btn" href="/">Main</button>
      <button type="button" class="router-btn" href="/sub">Sub</button>
    `;

    return $navigation;
  };

  return () => {
    const $navigation = render();
    bindEvents($navigation);

    return $navigation;
  };
};

export default Navigation;
