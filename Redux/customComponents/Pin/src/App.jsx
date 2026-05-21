import React from 'react';
import { InputBox } from './Components/InputBox';

import { dummy as Dummy } from './Components/dummy';

export const App = () => {
  const [value, setValue] = React.useState('');
  return (
    <>
      <InputBox lable={'OTP Boxs'} length={4} />
      <h3>{value}</h3>

      {/* <Dummy /> */}
    </>
  );
};
