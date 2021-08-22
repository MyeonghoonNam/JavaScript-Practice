export default function toDoForm({ target, onSubmit }) {
  try {
    if(!new.target) {
      throw new Error('경고 : toDoForm 컴포넌트를 new로 생성해주세요 !')
    }
  
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

  } catch(e) {
    alert(e.message);
  }
}
