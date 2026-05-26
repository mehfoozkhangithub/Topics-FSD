// Reducer

import * as types from './Actions';

export const Reducer = (oldState, action) => {
  switch (action.type) {
    case types.Todo_Create:
      return {
        ...oldState,
        todo: [...oldState.todo, action.payload],
      };

    default:
      return oldState;
  }
};
