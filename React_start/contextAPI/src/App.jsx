import React from 'react';

import { counterCreateContext } from './Context/CounterContext';

export const App = () => {
  const { count, setCount } = React.useContext(counterCreateContext);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};
