import Nav from './Nav.js';
import ListMain from './ListMain.js';

export default function ListPage({ target }) {
  const page = document.createElement('div');

  this.state = [
    {
      id: 1,
      productName: 'LG 그램',
    },
    {
      id: 2,
      productName: '삼성 노트북',
    },
    {
      id: 3,
      productName: '카카오 굿즈',
    },
  ];

  new Nav({ target: page });
  new ListMain({ target: page, initialState: this.state });

  this.render = () => {
    target.appendChild(page);
  };
}
