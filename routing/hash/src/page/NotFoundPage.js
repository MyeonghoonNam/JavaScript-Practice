class NotFoundPage {
  render() {
    const page = document.createElement("main");
    const p = document.createElement("p");
    p.innerText = "This is NotFound Page";

    page.appendChild(p);
    return page;
  }
}

export default NotFoundPage;
