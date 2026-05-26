import { ADD_NOTFICATION, REMOVE_NOTFICATION } from './Action';

let id = 0;

export const addNotify = (msg, type) => (dispatch) => {
  let newId = ++id;

  dispatch({
    type: ADD_NOTFICATION,
    payload: { id: newId, msg, type },
  });

  // Auto-remove after 3–5 seconds

  setTimeout(() => {
    dispatch({ type: REMOVE_NOTFICATION, payload: newId });
  }, 3000);
};

export const removNotify = (id) => (dispatch) => {
  dispatch({ type: REMOVE_NOTFICATION, payload: id });
};
