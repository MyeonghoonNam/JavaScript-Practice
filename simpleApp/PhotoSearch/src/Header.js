import Keyword from './Keyword.js';

export default function Header({
  target,
  initialState,
  onKeywordInput,
  onEnter,
}) {
  const header = document.createElement('header');
  header.className = 'Header';

  target.appendChild(header);

  const title = document.createElement('h1');
  title.style.textAlign = 'center';
  title.innerHTML = '🐈고양이 사진 검색기🔎';

  header.appendChild(title);

  this.state = initialState;

  this.setState = (nextState) => {
    if (this.state.keyword !== nextState.keyword) {
      this.state = nextState;

      keyword.setState({
        value: this.state.keyword,
      });
    }
  };

  const keyword = new Keyword({
    target: header,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput,
    onEnter,
  });
}
