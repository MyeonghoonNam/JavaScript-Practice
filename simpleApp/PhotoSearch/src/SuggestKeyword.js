export default function Suggestkeywords({
  target,
  initialState,
  onKeywordSelect,
}) {
  const suggest = document.createElement('div');
  suggest.className = 'Keywords';
  target.appendChild(suggest);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    suggest.innerHTML = `
      <ul>
        ${this.state
          .map(
            (keyword) => `
              <li>${keyword}</li>
            `
          )
          .join('')}
      </ul>
    `;

    suggest.style.display = this.state.length > 0 ? 'block' : 'none';
  };

  this.render();

  suggest.addEventListener('click', (e) => {
    const li = e.target.closest('li');

    if (li) {
      onKeywordSelect(li.textContent);
    }
  });
}
