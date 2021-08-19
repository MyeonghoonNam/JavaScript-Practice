export default function toDoForm({ target, onSubmit }) {
  const form = document.createElement('form');

  target.appendChild(form);

  let isInit = false;

  this.render = () => {
    form.innerHTML = `
      <input type="text" name="todo">
      <button>Add</button>
    `;

    if (!isInit) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const input = form.querySelector('input[name=todo]');
        const text = input.value;

        if (text.length > 1) {
          input.value = '';
          onSubmit(text);
        }
      });
    }
  };

  this.render();
}
