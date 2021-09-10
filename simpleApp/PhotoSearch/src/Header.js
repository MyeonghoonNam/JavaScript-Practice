import Keyword from './Keyword.js';

export default function Header({ target, onKeywordInput }) {
  const header = document.createElement('header');
  header.className = 'Header';

  target.appendChild(header);

  const title = document.createElement('h1');
  title.style.textAlign = 'center';
  title.innerHTML = '🐈고양이 사진 검색기🔎';

  header.appendChild(title);

  const keyword = new Keyword({
    target: header,
    onKeywordInput,
  });
}
