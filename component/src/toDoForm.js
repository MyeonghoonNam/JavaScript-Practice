export default function toDoForm({ target, onSubmit }) {
  try {
    if(!new.target) {
      throw new Error('경고 : toDoForm 컴포넌트를 new로 생성해주세요 !')
    }
  
    const footer = document.createElement('footer');
    const form = document.createElement('form');

    target.appendChild(footer);
    footer.appendChild(form);
  
    let isInit = false;
  
    this.render = () => {
      form.innerHTML = `
        <input class="footer__input" type="text" name="todoText" placeholder="Add to List..."
        autocomplete="off"/>
        <button class="footer__button">
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button>
      `;
  
      if (!isInit) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
  
          const input = form.querySelector('input[name=todoText]');
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
