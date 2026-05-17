import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as types from '../Redux/ActionTypes';

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch({ type: types.DECREMENT_COUNTER })}>
        dec
      </button>
      <button onClick={() => dispatch({ type: types.RESET_COUNTER })}>
        res
      </button>
      <button onClick={() => dispatch({ type: types.INCREMENT_COUNTER })}>
        inc
      </button>
    </>
  );
};
