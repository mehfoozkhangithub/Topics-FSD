import React, { useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handelIncrement = () => {
    setCount(count + 1);
  };

  const handelDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    let id = setInterval(() => {
      console.log('timmer', Date.now());
    }, 200);

    console.log('🚀 ~ id :', id);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>Counter</h1>
      <h3>
        counter <b>{count}</b>
      </h3>
      <button onClick={handelIncrement}>increment</button>
      <button onClick={handelDecrement}>decrement</button>
    </>
  );
};
