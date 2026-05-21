import React, { useRef } from 'react';

export const dummy = () => {
  const dataOfRef = useRef();

  const handleClick = () => {
    const value = dataOfRef.current.value;
    console.log('🚀 ~ dataOfRef.current;:', dataOfRef.current);
    console.log('🚀 ~ value:', value);
  };
  return (
    <>
      <h1>hello</h1>
      <input type="text" ref={dataOfRef} />
      <button onClick={handleClick}>click</button>
    </>
  );
};
