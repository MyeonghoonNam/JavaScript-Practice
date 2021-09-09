export default function Nodes({ target, initialState, onClick }) {
  const $nodes = document.createElement('div');
  $nodes.classList.add('Nodes');

  target.appendChild($nodes);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;

    $nodes.innerHTML = `
      ${
        isRoot
          ? ''
          : `
        <div class="Node">
          <img src="https://cdn.roto.codes/images/prev.png"/>
        </div>
      `
      }
      ${nodes
        .map(
          (node) => `
        <div class="Node">
          <img src="${
            node.type === 'DIRECTORY'
              ? 'https://cdn.roto.codes/images/directory.png'
              : 'https://cdn.roto.codes/images/file.png'
          }"/>
          ${node.name}
        </div>
      `
        )
        .join('')}
    `;
  };

  this.render();
}
