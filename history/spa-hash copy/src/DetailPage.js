import Nav from './Nav.js';
import ProductDetail from './ProductDetail.js';

export default function DetailPage({ target }) {
  const page = document.createElement('div');

  const getProductId = () => {
    const { hash } = window.location;

    return hash.split('-')[1];
  };

  // #detail-1 => ['#detail', '1'];
  // #detail-2 => ['#detail', '2'];

  new Nav({ target: page });

  const productDetail = new ProductDetail({
    target: page,
    initialState: {
      productId: getProductId(),
    },
  });

  this.render = () => {
    productDetail.setState({
      productId: getProductId(),
    });

    target.appendChild(page);
  };
}
