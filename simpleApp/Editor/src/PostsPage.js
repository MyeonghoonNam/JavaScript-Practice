import {request} from "./api.js";
import PostList from "./PostList.js";

export default function PostPage({target, onPostClick}) {
  const page = document.createElement('div');
  const postList = new PostList({
    target: page,
    initialState: [],
    onPostClick,
  });

  const newPostButton = document.createElement('button')
  newPostButton.textContent = 'New Post';

  page.appendChild(newPostButton);

  const fetchPosts = async () => {
    const posts = await request('/posts');

    postList.setState(posts);
  }

  this.render = async () => {
    await fetchPosts();
    target.appendChild(page);
  }
}