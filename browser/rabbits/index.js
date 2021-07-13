const rabbit = document.querySelector('#rabbit');
const findButton = document.querySelector('button');

findButton.addEventListener('click', () => {
  rabbit.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
