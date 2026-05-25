import { useReducer, useState } from 'react';

import { Reducer } from '../App/Reducer';
import { initialState } from '../App/InitialValue';

import * as types from '../App/Actions';

export const TodoInput = () => {
  const [text, setText] = useState('');

  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleAdd = () => {
    const todoData = {
      id: Date.now(),
      todo: text,
      isEdit: false,
      isCompleted: false,
    };
    dispatch({ payload: todoData, type: types.Todo_Create });
  };

  console.log(`🚀 ~ state:`, state);

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
