import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../Redux/Slicer/todoSlice';

export const Todos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  console.log('🚀 ~ todoList:', todoList);
  return (
    <>
      {todoList.map((el) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '15px',
            }}
            key={el.id}
          >
            <input type="checkbox" />
            <h2>{el.text}</h2>
            <button>edit</button>
            <button
              onClick={() => {
                dispatch(deleteTodo(el.id));
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};
