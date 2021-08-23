import Nav from './Nav.js';
import HomeMain from './HomeMain.js';

export default function HomePage({ target }) {
  const page = document.createElement('div');

  new Nav({ target: page });
  new HomeMain({ target: page });

  this.render = () => {
    target.appendChild(page);
  };
}
