export default function ImageViewer({ target, initialState, onClose }) {
  const $imageViewer = document.createElement('div');
  $imageViewer.className = 'ImageViewer Modal';

  target.appendChild($imageViewer);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $imageViewer.style.display = this.state.selectedImageUrl ? 'block' : 'none';

    $imageViewer.innerHTML = `
      <div class="content">
        <img src="${this.state.selectedImageUrl}"/>
      </div>
    `;
  };

  this.render();

  window.addEventListener('keyup', (e) => {
    // ESC키를 누른경우 onClose 호출
    if (e.key === 'Escape') {
      onClose();
    }
  });

  $imageViewer.addEventListener('click', (e) => {
    if (Array.from(e.target.classList).includes('Modal')) {
      onClose();
    }
  });
}
