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

  // intersection observer를 활용한 무한 스크롤 방식
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.state.isLoading) {
          if (this.state.totalPhotoCount > this.state.photos.length) {
            onScrollEnded();
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  let lastLi = null;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      photoList.innerHTML = /* html */ `
        <ul class="photoList__photos"></ul>
        <!-- <button class="photoList__loadMore" style=" hieght:200px; font-size:20px">Load More</button> -->
      `;

      isInitialize = true;
    }

    const { photos } = this.state;
    const $photos = photoList.querySelector('.photoList__photos');

    photos.forEach((photo) => {
      if ($photos.querySelector(`[data-id="${photo.id}"]`) === null) {
        const li = document.createElement('li');

        li.setAttribute('data-id', photo.id);
        li.style = 'list-style:none; min-height: 100px';
        li.innerHTML = `<img src="${photo.imagePath}" width="100%"/>`;

        $photos.appendChild(li);
      }
    });

    const nextLi = $photos.querySelector('li:last-child');

    if (nextLi !== null) {
      if (lastLi !== null) {
        observer.unobserve(lastLi);
      }

      lastLi = nextLi;
      observer.observe(lastLi);
    }
  };

  this.render();

  // 버튼을 활용한 더 보기 페이지 로딩을 통한 무한 스크롤 방식

  // photoList.addEventListener('click', (e) => {
  //   if (e.target.className === 'photoList__loadMore' && !this.state.isLoading) {
  //     onScrollEnded();
  //   }
  // });

  // 스크롤 페이징 기법을 통한 무한 스크롤 방식
  // window.addEventListener('scroll', () => {
  //   const { isLoading, totalPhotoCount, photos } = this.state;
  //   const isScrollEnded =
  //     window.scrollY + window.innerHeight + 100 >= document.body.offsetHeight;

  //   if (isScrollEnded && !isLoading && photos.length < totalPhotoCount) {
  //     onScrollEnded();
  //   }
  // });
}
