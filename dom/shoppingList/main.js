const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') onAdd();
});

items.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);

    toBeDeleted.remove();
  }
});

function onAdd() {
  const text = input.value;

  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView();
  input.value = '';
  input.focus();
}

// 중요 프로젝트에서는 고유한 UUID를 사용하자.
let id = 0;

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__deleteBtn">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;

  id++;

  return itemRow;
}
