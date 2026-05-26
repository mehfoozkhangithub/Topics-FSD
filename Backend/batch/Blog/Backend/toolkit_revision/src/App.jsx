import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import * as actionsTypes from './Redux/counterActions.js';

import { stateValue } from './Redux/createSelector';
function App() {
  const dispatch = useDispatch();
  const data = useSelector(stateValue);
  console.log('🚀 ~ data:', data);

  return (
    <>
      <h1>Count: {data}</h1>
      <button onClick={() => dispatch({ type: actionsTypes.countDecrement })}>
        -
      </button>
      <button onClick={() => dispatch({ type: actionsTypes.countReset })}>
        reset
      </button>
      <button onClick={() => dispatch({ type: actionsTypes.countIncrement })}>
        +
      </button>
    </>
  );
}

export default App;
