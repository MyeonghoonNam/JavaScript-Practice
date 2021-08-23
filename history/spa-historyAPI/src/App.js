import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';

export default function App({ target }) {
  const homePage = new HomePage({ target });
  const listPage = new ListPage({ target });
  const detailPage = new DetailPage({ target });

  history.replaceState(null, null, '/');

  this.render = () => {
    const { pathname } = window.location;

    target.innerHTML = '';

    if (pathname === '/') {
      // Home rendering
      homePage.render();
      return;
    } else if (pathname === '/list') {
      // List renderting
      listPage.render();
      return;
    } else if (pathname.includes('/detail')) {
      // detail rendering
      detailPage.render();
      return;
    } else {
      // not found page
    }
  };

  window.addEventListener('click', (e) => {
    if (e.target.className === 'link') {
      e.preventDefault();

      const href = e.target.getAttribute('href');

      history.pushState(null, null, href);

      this.render();
    }
  });

  this.render();
}
