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
        <div class="Node" data-id="${node.id}">
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

  $nodes.addEventListener('click', (e) => {
    const $node = e.target.closest('.Node');
    const { id } = $node.dataset;

    // id 없는 경우 뒤로가기로 처리
    if (!id) {
      // 문서 뒤로가기 로직 구현
    }

    const node = this.state.nodes.find((node) => node.id === id);

    if (node) {
      onClick(node);
    } else {
      alert('올바르지 않은 문서입니다.');
    }
  });
}
