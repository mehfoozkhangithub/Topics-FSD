import { useRef } from 'react';
import './App.css';

function App() {
  const inputValue = useRef(null);

  // const [text, setText] = useState('');
  // console.log('🚀 ~ text:', text);

  const showData = () => {
    const answer = inputValue.current.value;
    console.log('🚀 ~ answer:', answer);
  };

  return (
    <>
      {/* <input type="text" onChange={(e) => setText(e.target.value)} /> */}
      <input type="text" ref={inputValue} />
      <button onClick={showData}>click</button>
    </>
  );
}

export default App;
