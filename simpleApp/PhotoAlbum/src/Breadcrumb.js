export default function Beadcrumb({ target, initialState }) {
  const $breadcrumb = document.createElement('nav');
  $breadcrumb.className = 'Breadcrumb';

  target.appendChild($breadcrumb);

  this.state = initialState;

  this.setState = (nextStae) => {
    this.state = nextStae;
    this.render();
  };

  this.render = () => {
    $breadcrumb.innerHTML = `
      <div>Root</div>
      ${this.state
        .map(
          ({ name }) => `
            <div>${name}</div>
          `
        )
        .join('')}
    `;
  };
}
