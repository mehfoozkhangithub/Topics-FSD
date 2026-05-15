import React from 'react';

import PropTypes from 'prop-types';

export const Form = ({ props }) => {
  const { email, pass, phone, setEmail, setPass, setPhone } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`🚀 ~  email, pass, phone:`, email, pass, phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>{' '}
      <input
        id="email"
        type="text"
        placeholder="enter the value"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="pass">pass</label>{' '}
      <input
        id="pass"
        type="text"
        placeholder="enter the value"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="phone">phone</label>{' '}
      <input
        id="phone"
        type="text"
        placeholder="enter the value"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit">submit</button>
    </form>
  );
};

Form.propTypes = {
  email: PropTypes.string,
  pass: PropTypes.string,
  phone: PropTypes.number,
};

Form.defaultPropTypes = {
  email: 'not given yet',
  pass: 'default',
  phone: 'unset-0000',
};
