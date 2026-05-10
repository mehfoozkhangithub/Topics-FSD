import React from 'react';

import { Api } from '../Utils/Api';

console.log(`🚀 ~ Api:`, Api);

export const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    Api.post(`/signup`, { email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="text"
          placeholder="enter your email...."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password"></label>
        <input
          id="password"
          type="text"
          placeholder="enter your password...."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
