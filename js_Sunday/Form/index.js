let local_data = JSON.parse(localStorage.getItem('formData')) || [];

let editID = null;

const handleForm = (e) => {
  e.preventDefault();

  const email = document.getElementById('userEmail').value;
  const pass = document.getElementById('userPassword').value;
  const msg = document.querySelectorAll('.message');
  console.log('🚀 ~ msg:', msg);

  // mehfoozkhan@gmail.com
  // mehfoozkhan@gmail.in

  if (!email) {
    msg[0].innerHTML = '<b>email must be present??</b>';
  } else if (email.indexOf('@') === 0) {
    msg[0].innerHTML = "<b>Invalid Email it's present zeroth index '@'??? </b>";
  } else if (
    email.charAt(email.length - 4) !== '.' &&
    email.charAt(email.length - 3) !== '.'
  ) {
    msg[0].innerHTML = 'Invalid domain, enter proper domain ".com/.in"!! ';
  } else {
    msg[0].innerHTML = '';
  }

  // Mehfooz@!90 => 8-chart

  if (!email && !pass) return;

  if (editID !== null) {
    let editValue = local_data.map((items) =>
      items.id === editID ? { ...items, email, pass } : items,
    );

    local_data = editValue;
    editID = null;
    document.querySelector('button[type=submit]').textContent = 'submit';
  } else {
    local_data.push({ id: Date.now(), email, pass });
  }

  localStorage.setItem('formData', JSON.stringify(local_data));
  Render_UI(local_data);
  document.getElementById('userEmail').value = '';
  document.getElementById('userPassword').value = '';
};

// [{},{},{}]

const Render_UI = (value) => {
  const table = document.querySelector('#table');

  if (local_data.length === 0) {
    return (table.innerHTML = 'No Data⛔❗');
  }

  table.innerHTML = '';

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const id_th = document.createElement('th');
  const email_th = document.createElement('th');
  const pass_th = document.createElement('th');
  const actions = document.createElement('th');

  const head_tr = document.createElement('tr');

  id_th.innerText = ' Id';
  email_th.innerText = 'Email';
  pass_th.innerText = 'Pass';
  actions.innerText = 'Actions';

  head_tr.append(id_th, email_th, pass_th, actions);

  thead.append(head_tr);

  value &&
    value?.forEach((el, i) => {
      // console.log('🚀 ~ el:', el);
      const body_tr = document.createElement('tr');
      const id_td = document.createElement('td');
      const email_td = document.createElement('td');
      const pass_td = document.createElement('td');
      const action_td = document.createElement('td');
      const edit_btn_td = document.createElement('button');
      const delete_btn_td = document.createElement('button');

      id_td.innerText = i + 1;

      email_td.innerText = el.email;
      pass_td.innerText = el.pass;

      edit_btn_td.innerText = 'edit';
      delete_btn_td.innerText = 'delete';

      edit_btn_td.onclick = function () {
        document.querySelector('#userEmail').value = el.email;
        document.querySelector('#userPassword').value = el.pass;
        editID = el.id;
        document.querySelector('button[type=submit]').textContent = 'reset';

        // let editData = local_data.map((ed) =>
        //   ed.id === el.id ? { ...ed, isEdit: true } : ed,
        // );
        // local_data = editData;
        // localStorage.setItem('formData', JSON.stringify(local_data));
        // Render_UI(local_data);
      };

      delete_btn_td.onclick = function () {
        let deleteData = local_data.filter((dl) => {
          return dl.email != el.email;
        });
        local_data = deleteData;
        localStorage.setItem('formData', JSON.stringify(local_data));
        Render_UI(local_data);
      };

      action_td.append(edit_btn_td, delete_btn_td);

      body_tr.append(id_td, email_td, pass_td, action_td);
      tbody.append(body_tr);
      table.append(thead, tbody);
    });
};

document.addEventListener('DOMContentLoaded', () => {
  Render_UI(local_data);
});
