import * as types from './Action';

const initialValue = [];

export const Reducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case types.ADD_NOTFICATION:
      return [...state, payload];

    case types.REMOVE_NOTFICATION:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};
