import { DOMAIN_NAME as DN, PORT as P } from './constants.js';
import App, { printToday } from './App.js'; // default와 그냥 export 둘 다 가져오기 가능

const body = document.querySelector('body');

body.innerHTML = body.innerHTML + `<div>${DN}</div>`;
body.innerHTML = body.innerHTML + `<div>${P}</div>`;

printToday();
new App();
