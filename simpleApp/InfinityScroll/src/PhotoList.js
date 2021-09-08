/*
initialState: [
  {
    id: ~,
    imagePath: '~',
  }
]
*/

export default function PhotoList({ target, initialState, onScrollEded }) {
  const photoList = document.createElement('ul');

  target.appendChild(photoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    photoList.innerHTML = `
      ${this.state
        .map(
          (photo) => /* html */ `
        <li style="list-style-type:none;">
          <img src="${photo.imagePath}" width="100%"/>
        </li>
      `
        )
        .join('')}
    `;
  };

  this.render();
}
