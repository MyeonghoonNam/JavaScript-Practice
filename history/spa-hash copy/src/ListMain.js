export default function ListMain({ target, initialState }) {
  const listMain = document.createElement('div');

  target.appendChild(listMain);

  this.state = initialState;

  this.render = () => {
    if (Array.isArray(this.state)) {
      listMain.innerHTML = `
        <h1>Product List</h1>
        <ul>
          ${this.state
            .map(
              (item) =>
                `<li><a href="#detail-${item.id}">${item.productName}</a></li>`
            )
            .join('')}
        </ul>
      `;
    }
  };

  this.render();
}
