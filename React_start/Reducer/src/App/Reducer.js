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

    case types.Todo_Update:
      return {
        ...oldState,
        todo: oldState.todo.map((el) =>
          el.id === action.payload ? { ...el, isEdit: true } : el,
        ),
      };

    case types.Todo_Cancel:
      return {
        ...oldState,
        todo: oldState.todo.map((el) =>
          el.id === action.payload ? { ...el, isEdit: false } : el,
        ),
      };
    case types.Todo_Confirm:
      return {
        ...oldState,
        todo: oldState.todo.map((el) =>
          el.id === action.payload.id
            ? { ...el, todo: action.payload.text, isEdit: false }
            : el,
        ),
      };

    default:
      return oldState;
  }
};
