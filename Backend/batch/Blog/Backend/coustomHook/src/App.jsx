/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useToggle } from './hooks/useToggle';

import { useFetch } from './hooks/useFetch';

function App() {
  const [string, setString] = useState('');

  const [localStorage, setLocalStorage] = useLocalStorage('name', []);

  const { data } = useFetch('https://fakestoreapi.com/products');
  console.log('🚀 ~ data:', data);

  /*  const [toggle, setToggle] = useToggle();
  const [toggle_2, setToggle_2] = useToggle(); */

  return (
    <>
      <input type="text" onChange={(e) => setString(e.target.value)} />
      <button onClick={() => setLocalStorage(string)}>click</button>

      {/*   {toggle && <h1>i am toggle</h1>}
      <br />
      <br />

      <button onClick={setToggle}>toggle</button>
      <button onClick={() => setToggle(false)}>off</button>
      <button onClick={() => setToggle(true)}>on</button>

      <br />
      <br />

      {toggle_2 && <h1>i am toggle_2</h1>}
      <br />
      <br />

      <button onClick={setToggle_2}>toggle_2</button>
      <button onClick={() => setToggle_2(false)}>off_2</button>
      <button onClick={() => setToggle_2(true)}>on_2</button> */}
    </>
  );
}

export { App };
