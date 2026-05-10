import React, { useState } from 'react';

import { addNotify } from '../Redux/action.Type';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    pass: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email.length <= 0 || form.pass.length <= 0) {
      dispatch(addNotify("please fill all the field's", 'warning'));
    } else if (
      form.email === 'mehfoozkhan@gmail.com' &&
      form.pass === 'mehfooz_khan@786'
    ) {
      dispatch(addNotify('Login', 'success'));
    } else {
      dispatch(addNotify('Login fail', 'error'));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: '100px auto',
        gap: '1rem',
        textTransform: 'capitalize',
      }}
    >
      <label htmlFor="email">email</label>
      <input type="text" id="email" name="email" onChange={handleChange} />
      <label htmlFor="pass">pass</label>
      <input type="text" id="pass" name="pass" onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
};
