const app = document.querySelector('.app');

new App({
  target: app,
  initialState: storage.getItem('todos', []),
});
