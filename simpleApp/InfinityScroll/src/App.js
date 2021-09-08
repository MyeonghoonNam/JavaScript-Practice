import PhotoList from './PhotoList.js';
import { request } from './api.js';

export default function App({ target }) {
  const header = document.createElement('h1');
  header.innerText = 'Cat Photos';
  header.style.textAlign = 'center';

  target.appendChild(header);

  this.state = {
    limit: 5,
    nextStart: 0, // limit 수 만큼 계속 더해진다.
    photos: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState(nextState.photos);
  };

  const photoListComponent = new PhotoList({
    target,
    initialState: this.state.photos,
    onScrollEded: async () => {
      await fetchPhotos();
    },
  });

  const fetchPhotos = async () => {
    const { limit, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limit}&_start=${nextStart}`
    );

    this.setState({
      ...this.state,
      nextStart: nextStart + limit,
      photos: this.state.photos.concat(photos),
    });
  };

  fetchPhotos();
}
