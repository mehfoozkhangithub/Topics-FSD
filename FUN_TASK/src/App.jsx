import React from 'react';

export const App = () => {
  const [flag1, setFlag1] = React.useState(false);
  const [flag2, setFlag2] = React.useState(false);
  const [flag3, setFlag3] = React.useState(false);

  const handleFlag1 = (e) => {
    const value = e.target.checked;
  };

  const handleFlag2 = (e) => {
    const value = e.target.checked;
  };

  const handleFlag3 = (e) => {
    const value = e.target.checked;
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input type="checkbox" checked={flag1} onChange={handleFlag1} />
        <h1>flag1</h1>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <input type="checkbox" checked={flag2} onChange={handleFlag2} />
        <h1>flag2</h1>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <input type="checkbox" checked={flag3} onChange={handleFlag3} />
        <h1>flag3</h1>
      </div>
    </>
  );
};
