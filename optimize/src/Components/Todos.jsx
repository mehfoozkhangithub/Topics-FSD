import { useCallback, useState } from 'react';
import Todo_Items from './Todo_Items';

export const Todo = () => {
  const initialVal = [
    {
      text: 'learn js',
      id: 1,
      isEdited: false,
      isCompleted: false,
    },
    {
      text: 'learn react',
      id: 2,
      isEdited: false,
      isCompleted: false,
    },
    {
      text: 'learn react-redux',
      id: 3,
      isEdited: false,
      isCompleted: false,
    },
  ];

  const [task, setTask] = useState(initialVal);
  const [text, setText] = useState('');

  const handleTask = () => {
    if (text.trim() === '') return;
    const todo = {
      id: task.length + 1,
      text: text,
      isEdited: false,
      isCompleted: false,
    };
    setTask((prev) => [...prev, todo]);
  };

  /*   const handleEdit = useCallback(
    (id) => {
      setTask(
        task.map((item) =>
          item.id === id ? { ...item, isEdited: true } : item,
        ),
      );
    },
    [task],
  ); */
  const handleEdit = useCallback((id) => {
    setTask((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isEdited: true } : item)),
    );
  }, []);

  /* const handleDelete = useCallback(
    (id) => {
      setTask(task.filter((item) => item.id !== id));
    },
    [task],
  );
 */

  const handleDelete = useCallback((id) => {
    setTask((prev) => prev.filter((item) => item.id !== id));
  }, []);

  /* 
  
  AX99 === AY99 

  prev === curr
  
  */

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Todo 📕</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleTask}>Add Task</button>
      </div>
      {task &&
        task.map((items) => (
          <Todo_Items
            key={items.id}
            {...items}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
    </>
  );
};
