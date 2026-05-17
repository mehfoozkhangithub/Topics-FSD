import { useState } from 'react';
import { Counter } from './Components/Counter';

export const App = () => {
  const [toggle, setToggle] = useState(null);

  return (
    <>
      {toggle && <Counter />}
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </>
  );
};
