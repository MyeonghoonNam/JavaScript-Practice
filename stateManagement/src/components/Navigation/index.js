const Navigation = () => {
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
    return $navigation;
  };
};

export default Navigation;
