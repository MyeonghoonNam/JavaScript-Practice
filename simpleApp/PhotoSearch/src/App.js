import Header from './Header.js';
import Suggestkeywords from './SuggestKeyword.js';
import SearchResults from './SearchResults.js';
import debounce from './debounce.js';
import { request } from './api.js';
import { setItem, getItem } from './storage.js';

export default function App({ target }) {
  this.state = {
    keyword: '',
    keywords: [],
    catImages: [],
  };

  this.cache = getItem('keywords_cache', {});

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      keyword: this.state.keyword,
    });

    suggestkeywords.setState({
      keywords: this.state.keywords,
    });

    if (this.state.catImages.length > 0) {
      searchResults.setState(this.state.catImages);
    }
  };

  const header = new Header({
    target,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput: debounce(async (keyword) => {
      if (keyword.trim().length > 1) {
        let keywords = null;

        if (this.cache[keyword]) {
          keywords = this.cache[keyword];
        } else {
          keywords = await request(`/keywords?q=${keyword}`);
          this.cache[keyword] = keywords;
          setItem('keywords_cache', this.cache);
        }

        this.setState({
          ...this.state,
          keyword,
          keywords,
        });
      }
    }, 300),
    onEnter: () => {
      fetchCatsImage();
    },
  });

  const suggestkeywords = new Suggestkeywords({
    target,
    initialState: {
      keywords: this.state.keywords,
      cursor: -1,
    },
    onKeywordSelect: (keyword) => {
      this.setState({
        ...this.state,
        keyword,
        keywords: [],
      });

      fetchCatsImage();
    },
  });

  const searchResults = new SearchResults({
    target,
    initialState: this.state.catImages,
  });

  const fetchCatsImage = async () => {
    const { data } = await request(`/search?q=${this.state.keyword}`);

    this.setState({
      ...this.state,
      catImages: data,
      keywords: [],
    });
  };
}
