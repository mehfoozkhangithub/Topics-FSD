# update dom content

```js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('header').innerHTML = Navbar();
  document.head.querySelector('style').innerHTML = All_style();
  document.querySelector('#data').innerHTML = signup();

  const form = document.querySelector('form');

  form.addEventListener('submit', handleSubmit);
});
```

## create validation

```js
const handleSubmit = (e) => {
  e.preventDefault();

  let user = {
    name: document.querySelector('#name').value.trim(),
    email: document.querySelector('#email').value.trim(),
    phone: document.querySelector('#phone').value.trim(),
    pass: document.querySelector('#pass').value.trim(),
    confirm_pass: document.querySelector('#confirm_pass').value.trim(),
    gender: document.querySelector('input[name="gender"]:checked')?.value || '',
  };

  let isValid = validate(user);

  if (isValid) {
    saveToLocalStorage(user);
    alert('Signup Successful ✅');
    e.target.reset();
  }
};
```

### validation logic function

```js
const validate = (user) => {
  let isValid = true;

  let messages = document.querySelectorAll('.message');
  messages.forEach((msg) => (msg.innerText = ''));

  // NAME
  if (user.name.length < 3) {
    messages[0].innerText = 'Name must be at least 3 characters';
    isValid = false;
  }

  // EMAIL
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user.email)) {
    messages[1].innerText = 'Invalid email';
    isValid = false;
  }

  // PHONE
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(user.phone)) {
    messages[2].innerText = 'Phone must be 10 digits';
    isValid = false;
  }

  // PASSWORD
  if (user.pass.length < 6) {
    messages[3].innerText = 'Password must be at least 6 characters';
    isValid = false;
  }

  // CONFIRM PASSWORD
  if (user.pass !== user.confirm_pass) {
    messages[4].innerText = 'Passwords do not match';
    isValid = false;
  }

  // GENDER
  if (!user.gender) {
    alert('Please select gender');
    isValid = false;
  }

  return isValid;
};
```

## save data in ls

```js
const saveToLocalStorage = (user) => {
  let users = JSON.parse(localStorage.getItem('users')) || [];

  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));
};
```
