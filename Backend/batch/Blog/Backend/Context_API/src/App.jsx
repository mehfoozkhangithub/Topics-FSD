import { Counter } from './Components/Counter';
import { Button } from './Components/Button';
import { Dummy } from './Components/Dummy';

export const App = () => {
  return (
    <>
      <h1>hello</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          gap: '10px',
        }}
      >
        <h1>counter</h1>
        <Counter />
      </div>
      <Button />
      <Dummy />
    </>
  );
};
