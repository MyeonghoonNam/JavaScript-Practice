const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  coordinate.style.left = `${x}px`;
  coordinate.style.top = `${y}px`;

  coordinate.innerHTML = `${x}, ${y}`;
});
