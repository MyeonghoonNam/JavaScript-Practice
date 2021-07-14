const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();

  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.transform = `translateX(${x}px)`;

    horizontal.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;

    coordinate.style.transform = `translate(${x + 20}px, ${y + 20}px)`;

    coordinate.innerHTML = `${x}px, ${y}px`;
  });
});
