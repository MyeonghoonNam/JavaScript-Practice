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
    totalPhotoCount: 0,
    isLoading: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;

    photoListComponent.setState({
      photos: nextState.photos,
      isLoading: this.state.isLoading,
      totalPhotoCount: this.state.totalPhotoCount,
    });
  };

  const photoListComponent = new PhotoList({
    target,
    initialState: {
      isLoading: this.state.isLoading,
      photos: this.state.photos,
      totalPhotoCount: this.state.totalPhotoCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { limit, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limit}&_start=${nextStart}`
    );

    this.setState({
      ...this.state,
      nextStart: nextStart + limit,
      photos: this.state.photos.concat(photos),
      isLoading: false,
    });
  };

  const initialize = async () => {
    const totalPhotoCount = await request('/cat-photos/count');

    this.setState({
      ...this.state,
      totalPhotoCount,
    });

    await fetchPhotos();
  };

  initialize();
}
