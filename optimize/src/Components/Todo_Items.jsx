import { useMemo } from 'react';

const expensiveFunction = (ms) => {
  let start = Date.now();

  while (Date.now() - start < ms) {
    continue;
  }
  return true;
};

const Todo_Items = ({ id, text, isEdited, handleDelete, handleEdit }) => {
  useMemo(() => expensiveFunction(200), []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'baseline',
        alignItems: 'baseline',
        gap: '1rem',
      }}
    >
      <h3>{id}</h3>
      <h4>{text}</h4>
      <h5>{isEdited ? 'true' : 'false'}</h5>
      <button onClick={() => handleEdit(id)}>edit</button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

// const shallowCheck = (prev, curr) => {
//   return prev.text === curr.text;
// };

export default Todo_Items;

// export default memo(Todo_Items, shallowCheck);

/* 
prv.id === curr.id
prv.text === curr.text
prv.handleDelete[func] === curr.handleDelete[func]


*/
