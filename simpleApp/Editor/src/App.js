import PostsPage from './PostsPage.js';
import PostEditPage from './PostEditPage.js'

export default function App({target}) {
  const postsPage = new PostsPage({target});
  const postEditPage = new PostEditPage({
    target,
    initialState: {
      postId: 'new',
      post: {
        title: '',
        content: '',
      }
    }
  });

  this.route = () => {
    const {pathname} = window.location;

    if(pathname === '/') {
      postsPage.render();
    } else if(pathname.indexOf('/posts/') === 0) {
      const [, , postId] = pathname.split('/');

      postEditPage.setState({postId});
    }
  }

  this.route();
}