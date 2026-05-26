import { useContext } from 'react';
import { ReducerContext } from '../Context/ReducerContext';

import * as types from '../App/Actions';

export const TodoList = () => {
  const { state, dispatch } = useContext(ReducerContext);

  const handleDelete = (id) => {
    console.log(id);
    dispatch({ type: types.Todo_Delete, payload: id });
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
            <p>{el.todo}</p>
            <button>edit</button>
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};
