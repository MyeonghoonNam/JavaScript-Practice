export default function ProductDetail({ target, initialState }) {
  const productDetail = document.createElement('div');

  target.appendChild(productDetail);

  this.state = initialState;

  this.setState = (updateState) => {
    this.state = updateState;
    this.render();
  };

  this.render = () => {
    productDetail.innerHTML = `
      <h1>Product ${this.state.productId} Detail Page</h1>
      <a href="#list">Back to List</a>
    `;
  };

  this.render();
}
