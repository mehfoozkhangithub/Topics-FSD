import { useContext } from 'react';
import { ReducerContext } from '../Context/ReducerContext';

import * as types from '../App/Actions';

export const TodoList = () => {
  const { state, dispatch, editText, setEditText } = useContext(ReducerContext);

  const handleDelete = (id) => {
    dispatch({ type: types.Todo_Delete, payload: id });
  };

  const handleEdits = (id) => {
    dispatch({ type: types.Todo_Update, payload: id });
  };

  const handleCancel = (id) => {
    dispatch({ type: types.Todo_Cancel, payload: id });
  };
  const handleConfirm = (id) => {
    dispatch({ type: types.Todo_Confirm, payload: { id: id, text: editText } });
  };

  return (
    <>
      {state.todo?.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <input type="checkbox" />
            {el.isEdit ? (
              <input
                type="text"
                defaultValue={el.todo}
                onChange={(el) => setEditText(el.target.value)}
              />
            ) : (
              <p>{el.todo}</p>
            )}
            {el.isEdit ? (
              <>
                <button onClick={() => handleCancel(el.id)}>cancel</button>
                <button onClick={() => handleConfirm(el.id)}>confirm</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEdits(el.id)}>edit</button>
                <button onClick={() => handleDelete(el.id)}>delete</button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
