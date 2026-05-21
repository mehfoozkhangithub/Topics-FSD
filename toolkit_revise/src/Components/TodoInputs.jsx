import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Slicer/todoSlice';

export const TodoInputs = () => {
  const InputValue = React.useRef(null);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const textVal = InputValue.current.value;
    dispatch(addTodo(textVal));
    InputValue.current.value = '';
  };

  return (
    <>
      <input type="text" ref={InputValue} />
      <button onClick={handleAdd}>add todo</button>
    </>
  );
};
