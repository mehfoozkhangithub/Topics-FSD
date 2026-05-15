import React from 'react';
import { Form } from './Components/Form';

export const App = () => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <>
      <Form props={{ email, pass, phone, setEmail, setPass, setPhone }} />
    </>
  );
};
