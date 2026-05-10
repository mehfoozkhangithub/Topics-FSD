import React, { useState } from 'react';

import './App.css';

export function App() {
  // hooks
  const [count, setCount] = useState(0);

  const handleDec = () => {
    // setCount(count - 1);
    setCount((prv) => prv - 1);
  };

  const handleInc = () => {
    // setCount(count + 1);
    setCount((prv) => prv + 1);
  };

  // let count = 0;

  // const handleDec = () => {
  //   count--;
  //   document.getElementById('count').innerText = `count ${count}`;
  // };

  // const handleInc = () => {
  //   count++;
  //   document.getElementById('count').innerText = `count ${count}`;
  // };

  return (
    <>
      <h1 id="count">count {count}</h1>
      <button onClick={handleDec}>dec</button>
      <button onClick={handleInc}>inc</button>
    </>
  );
}
