const Base_URL = `http://localhost:8080/todo`;

// ================= FETCH =================
const fetchData = async () => {
  const res = await fetch(Base_URL);
  return res.json();
};

// ================= LOADER =================
const showLoader = () => {
  document.querySelector('#loader').classList.remove('hidden');
  document.querySelector('#todo').classList.add('hidden'); // ✅ hide todo
};

const hideLoader = () => {
  document.querySelector('#loader').classList.add('hidden');
  document.querySelector('#todo').classList.remove('hidden'); // ✅ show todo
};

// ================= RELOAD EFFECT =================
const triggerReloadEffect = () => {
  const main = document.querySelector('#todo');

  main.classList.remove('reload');
  void main.offsetWidth;
  main.classList.add('reload');
};

// ================= ADD TODO =================
const addTodo = async (e) => {
  e.preventDefault();

  const input = document.querySelector('#value');
  const textValue = input.value.trim();

  if (!textValue) return;

  showLoader();

  const todo = {
    text: textValue,
    isEdit: false,
    isCompleted: false,
  };

  const res = await fetch(Base_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();

  createTodoCard(newTodo);
  triggerReloadEffect();

  input.value = '';

  hideLoader();
};

// ================= DELETE =================
const deleteTodo = async (id, card) => {
  showLoader();

  await fetch(`${Base_URL}/${id}`, {
    method: 'DELETE',
  });

  card.remove();
  triggerReloadEffect();

  hideLoader();
};

// ================= TOGGLE EDIT =================
const toggleEdit = async (item, text, input, buttons) => {
  showLoader();

  const updated = !item.isEdit;

  await fetch(`${Base_URL}/${item.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isEdit: updated }),
  });

  item.isEdit = updated;

  if (updated) {
    text.style.display = 'none';
    input.style.display = 'block';
    buttons.edit.style.display = 'none';
    buttons.delete.style.display = 'none';
    buttons.save.style.display = 'inline';
    buttons.cancel.style.display = 'inline';
    input.focus();
  } else {
    text.style.display = 'block';
    input.style.display = 'none';
    buttons.edit.style.display = 'inline';
    buttons.delete.style.display = 'inline';
    buttons.save.style.display = 'none';
    buttons.cancel.style.display = 'none';
  }

  triggerReloadEffect();
  hideLoader();
};

// ================= UPDATE TEXT =================
const updateTodo = async (item, input, text, buttons) => {
  showLoader();

  const newText = input.value;

  await fetch(`${Base_URL}/${item.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: newText,
      isEdit: false,
    }),
  });

  item.text = newText;
  item.isEdit = false;

  text.innerText = newText;

  toggleEdit(item, text, input, buttons);

  triggerReloadEffect();
  hideLoader();
};

// ================= TOGGLE COMPLETE =================
const toggleComplete = async (item, text, checkbox) => {
  showLoader();

  const updated = !item.isCompleted;

  await fetch(`${Base_URL}/${item.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      isCompleted: updated,
    }),
  });

  item.isCompleted = updated;

  text.style.textDecoration = updated ? 'line-through' : 'none';
  checkbox.checked = updated;

  triggerReloadEffect();
  hideLoader();
};

// ================= CREATE CARD =================
const createTodoCard = (item) => {
  const main = document.querySelector('#todo');

  const card = document.createElement('div');
  card.className = 'card_div';

  const text = document.createElement('h3');
  const input = document.createElement('input');
  const checkbox = document.createElement('input');

  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.checked = item.isCompleted;

  text.innerText = item.text;
  input.value = item.text;

  editBtn.innerText = 'Edit';
  deleteBtn.innerText = 'Delete';
  saveBtn.innerText = 'Save';
  cancelBtn.innerText = 'Cancel';

  input.style.display = 'none';
  saveBtn.style.display = 'none';
  cancelBtn.style.display = 'none';

  if (item.isCompleted) {
    text.style.textDecoration = 'line-through';
  }

  const buttons = {
    edit: editBtn,
    delete: deleteBtn,
    save: saveBtn,
    cancel: cancelBtn,
  };

  editBtn.onclick = () => toggleEdit(item, text, input, buttons);
  cancelBtn.onclick = () => toggleEdit(item, text, input, buttons);

  deleteBtn.onclick = () => deleteTodo(item.id, card);

  saveBtn.onclick = () => updateTodo(item, input, text, buttons);

  checkbox.onchange = () => toggleComplete(item, text, checkbox);

  card.append(checkbox, text, input, editBtn, deleteBtn, saveBtn, cancelBtn);

  main.append(card);
};

// ================= INITIAL LOAD =================
const Render_UI = async () => {
  showLoader();

  const apiData = await fetchData();
  const main = document.querySelector('#todo');

  main.innerHTML = '';

  apiData.forEach((item) => {
    createTodoCard(item);
  });

  hideLoader();
};

window.addEventListener('DOMContentLoaded', Render_UI);
