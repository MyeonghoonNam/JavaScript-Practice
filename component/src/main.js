import App from './App.js';
import { getItem } from './storage.js';

const app = document.querySelector('.app');
const initialState = getItem('todos', []);

try {
  new App({
    target: app,
    initialState,
  });
  
} catch(e) {
  alert(e);
}
