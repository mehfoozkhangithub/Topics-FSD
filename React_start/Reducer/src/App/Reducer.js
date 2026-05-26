// Reducer

import * as types from './Actions';

export const Reducer = (oldState, action) => {
  console.log(`🚀 ~ action:`, action);
  switch (action.type) {
    case types.Todo_Create:
      return {
        ...oldState,
        todo: [...oldState.todo, action.payload],
      };

    case types.Todo_Delete:
      return {
        ...oldState,
        todo: oldState.todo.filter((el) => el.id !== action.payload),
      };

    default:
      return oldState;
  }
};
