class Home {
  render() {
    const template = `
      <div>
        <p>This is Home Page</p>
      </div>
    `;

    return template;
  }
}

class List {
  render() {
    const template = `
      <div>
        <p>This is List Page</p>
      </div>
    `;

    return template;
  }
}

class NotFound {
  render() {
    const template = `
      <div>
        <p>This is NotFound Page</p>
      </div>
    `;

    return template;
  }
}

export { Home, List, NotFound };
