import React from 'react';

export const TodoList = ({ props }) => {
  const { todo } = props;
  console.log(`🚀 ~ todo:inside the list compo`, todo);
  return (
    <>
      {todo.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <input type="checkbox" />
            <p>{el.text}</p>
            <button>edit</button>
            <button>delete</button>
          </div>
        );
      })}
    </>
  );
};
