let dataBase = JSON.parse(localStorage.getItem(localStorage.key(0))) || [];

const addTodo = () => {
  const value = document.querySelector('#taskVal').value;

  if (value.trim() === '') return;

  const todo = {
    id: Date.now(),
    text: value,
    isEdits: false,
    isComplete: false,
  };

  dataBase.push(todo);

  localStorage.setItem('todo', JSON.stringify(dataBase));
  document.querySelector('#taskVal').value = '';
  Render_UI();
};

// read

const Render_UI = () => {
  const mainDiv = document.querySelector('#todo');

  mainDiv.innerHTML = '';

  if (!Array.isArray(dataBase)) {
    localStorage.removeItem(localStorage.key(0));
  }

  dataBase &&
    dataBase?.forEach((element) => {
      const cardDiv = document.createElement('div');

      const text = document.createElement('h3');

      const inputCheckBox = document.createElement('input');

      const inputEdits = document.createElement('input');

      const editBtn = document.createElement('button');

      const deleteBtn = document.createElement('button');

      const confirmBtn = document.createElement('button');

      const cancelBtn = document.createElement('button');

      inputCheckBox.type = 'checkbox';
      text.textContent = element.text;

      cardDiv.style =
        'display:flex;justify-content:center;align-items:center; gap:1rem ';

      editBtn.textContent = 'edit';
      deleteBtn.textContent = 'delete';

      cancelBtn.textContent = 'cancel';
      confirmBtn.textContent = 'confirm';

      inputEdits.value = element.text;

      if (element.isEdits) {
        text.style = 'display:none';
        editBtn.style = 'display:none';
        deleteBtn.style = 'display:none';

        cancelBtn.style = 'display:block';
        confirmBtn.style = 'display:block';
      } else {
        cancelBtn.style = 'display:none';
        confirmBtn.style = 'display:none';
        inputEdits.style = 'display:none';

        text.style = 'display:block';
        editBtn.style = 'display:block';
        deleteBtn.style = 'display:block';
      }

      confirmBtn.onclick = function () {
        localStorage.setItem('todo', JSON.stringify(dataBase));
        let confirmData = dataBase.map((el) =>
          el.id === element.id
            ? { ...el, text: inputEdits.value, isEdits: false }
            : el,
        );
        dataBase = confirmData;
        Render_UI();
      };

      cancelBtn.onclick = function () {
        let editData = dataBase.map((el) =>
          el.id === element.id ? { ...el, isEdits: false } : el,
        );
        dataBase = editData;
        localStorage.setItem('todo', JSON.stringify(dataBase));
        Render_UI();
      };

      editBtn.onclick = function () {
        let editData = dataBase.map((el) =>
          el.id === element.id ? { ...el, isEdits: true } : el,
        );
        dataBase = editData;
        localStorage.setItem('todo', JSON.stringify(dataBase));
        Render_UI();
      };

      deleteBtn.onclick = function () {
        dataBase.splice(
          dataBase.findIndex((el) => el.id === element.id),
          1,
        );
        console.log('🚀 ~ dataBase:', dataBase);

        localStorage.setItem('todo', JSON.stringify(dataBase));
        Render_UI();
      };

      cardDiv.append(
        inputCheckBox,
        text,
        inputEdits,
        editBtn,
        deleteBtn,
        cancelBtn,
        confirmBtn,
      );
      mainDiv.append(cardDiv);
    });
};

document.addEventListener('DOMContentLoaded', function () {
  Render_UI();
});
