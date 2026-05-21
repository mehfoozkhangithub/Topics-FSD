import React from 'react';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  console.log(`🚀 ~ email:`, email);
  console.log(`🚀 ~ password:`, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7300/signup', { email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input
        id="email"
        type="text"
        placeholder="enter your email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="pass"></label>
      <input
        id="pass"
        type="text"
        placeholder="enter your password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
