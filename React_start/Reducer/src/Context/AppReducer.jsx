import React from 'react';

import { Reducer } from '../App/Reducer';
import { initialState } from '../App/InitialValue';

import { ReducerContext } from './ReducerContext';

export const AppReducer = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
