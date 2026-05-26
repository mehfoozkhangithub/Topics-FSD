import React from 'react';
import { useToggle } from './Components/useToggle';

export const App = () => {
  const [toggle, setToggleState] = useToggle(false);
  const [toggle1, setToggleState1] = useToggle(true);

  return (
    <>
      {toggle && <h1>hello</h1>}
      {toggle1 && <h1>hello1</h1>}

      <button onClick={() => setToggleState(!toggle)}>toggle </button>

      <button onClick={() => setToggleState1(!toggle1)}>toggle1 </button>
    </>
  );
};
