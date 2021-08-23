import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';

export default function App({ target }) {
  const homePage = new HomePage({ target });
  const listPage = new ListPage({ target });
  const detailPage = new DetailPage({ target });

  this.render = () => {
    const { hash } = window.location;
    target.innerHTML = '';

    if (hash === '') {
      // Home rendering
      homePage.render();
      return;
    } else if (hash === '#list') {
      // List renderting
      listPage.render();
      return;
    } else if (hash.includes('#detail')) {
      // detail rendering
      detailPage.render();
      return;
    } else {
      // not found page
    }
  };

  window.addEventListener('hashchange', () => {
    this.render();
  });

  this.render();
}
