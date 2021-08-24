export default function TodoForm({ target, onSubmit }) {
  const form = document.createElement('form');

  target.appendChild(form);

  this.render = () => {
    form.innerHTML = /* html */ `
      <input type="text" placeholder="할일을 입력하세요."/>
      <button>추가하기</button>
    `;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.querySelector('input');
    const content = input.value;

    onSubmit(content);
    input.value = '';
  });

  this.render();
}
