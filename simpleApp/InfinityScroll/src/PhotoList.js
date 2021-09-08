/*
initialState: [
  {
    id: ~,
    imagePath: '~',
  }
]
*/

export default function PhotoList({ target, initialState, onScrollEnded }) {
  let isInitialize = false;
  const photoList = document.createElement('div');
  photoList.style.textAlign = 'center';

  target.appendChild(photoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      photoList.innerHTML = /* html */ `
        <ul class="photoList__photos"></ul>
        <button class="photoList__loadMore" style=" hieght:200px; font-size:20px">Load More</button>
      `;

      isInitialize = true;
    }

    const { photos } = this.state;
    const $photos = photoList.querySelector('.photoList__photos');

    photos.forEach((photo) => {
      if ($photos.querySelector(`[data-id="${photo.id}"]`) === null) {
        const li = document.createElement('li');

        li.setAttribute('data-id', photo.id);
        li.style = 'list-style:none';
        li.innerHTML = `<img src="${photo.imagePath}" width="100%"/>`;

        $photos.appendChild(li);
      }
    });
  };

  this.render();

  photoList.addEventListener('click', (e) => {
    if (e.target.className === 'photoList__loadMore' && !this.state.isLoading) {
      onScrollEnded();
    }
  });

  window.addEventListener('scroll', () => {
    const { isLoading, totalPhotoCount, photos } = this.state;
    const isScrollEnded =
      window.scrollY + window.innerHeight + 100 >= document.body.offsetHeight;

    if (isScrollEnded && !isLoading && photos.length < totalPhotoCount) {
      onScrollEnded();
    }
  });
}
