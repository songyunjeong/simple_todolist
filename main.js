const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = creatItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0;
function creatItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item-name">${text}</span>
      <button class="item-delete" data-id=${id}>
        X
      </button>
    </div>
  `;
  id++;
  return itemRow;
}

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item-row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
