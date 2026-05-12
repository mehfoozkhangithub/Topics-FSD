import React, { useState } from 'react';

// import { Counter } from './Components/Counter';
import { Todo } from './Components/Todo';

export const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: 'hello', isEdits: false, isComplete: false },
  ]);
  const [text, setText] = useState('');
  const [isEdit, setEdit] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const addTodo = () => {
    const todoValue = {
      text: text,
      isEdit: isEdit,
      isComplete: isComplete,
    };
    setTodo([...todo, todoValue]);
    console.log('todo:state_wala:function k ander', todo);
  };
  console.log('todo:state_wala:function se bahar', todo);

  /*   const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  }; */

  return (
    <>
      {/* <Counter props={{ counter, increment, decrement }} /> */}
      {/* <Counter counter={counter} increment={increment} decrement={decrement} /> */}
      <Todo props={{ todo, addTodo, setTodo, setText, setEdit, setComplete }} />
    </>
  );
};
