import { request } from './api.js';
import Header from './Header.js';
import Suggestkeywords from './SuggestKeyword.js';

export default function App({ target }) {
  this.state = {
    keyword: '',
    keywords: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      keyword: this.state.keyword,
    });

    suggestkeywords.setState({
      keywords: this.state.keywords,
    });
  };

  const header = new Header({
    target,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput: async (keyword) => {
      if (keyword.trim().length > 1) {
        const keywords = await request(`/keywords?q=${keyword}`);

        this.setState({
          ...this.state,
          keyword,
          keywords,
        });
      }
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
      });
    },
  });
}
