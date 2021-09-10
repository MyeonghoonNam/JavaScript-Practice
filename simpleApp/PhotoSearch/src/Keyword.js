export default function Keyword({ target, onKeywordInput }) {
  const keyword = document.createElement('input');
  keyword.className = 'Keyword';

  target.appendChild(keyword);

  keyword.addEventListener('keyup', (e) => {
    onKeywordInput(e.target.value);
  });
}
