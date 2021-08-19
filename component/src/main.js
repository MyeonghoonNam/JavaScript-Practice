import App from './App.js';
import { getItem } from './storage.js';

const app = document.querySelector('.app');
const initialState = getItem('todos', []);

new App({
  target: app,
  initialState,
});
