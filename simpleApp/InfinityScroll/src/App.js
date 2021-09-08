import PhotoList from './PhotoList.js';
import { request } from './api.js';

export default function App({ target }) {
  const header = document.createElement('h1');
  header.innerText = 'Cat Photos';
  header.style.textAlign = 'center';

  target.appendChild(header);

  this.state = {
    limit: 5,
    start: 0, // limit 수 만큼 계속 더해진다.
    photos: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState(nextState.photos);
  };

  const photoListComponent = new PhotoList({
    target,
    initialState: this.state.photos,
  });

  const fetchPhotos = async () => {
    const photos = await request(`/cat-photos?_limit=5&_start=0`);

    this.setState({
      ...this.state,
      photos,
    });
  };

  fetchPhotos();
}
