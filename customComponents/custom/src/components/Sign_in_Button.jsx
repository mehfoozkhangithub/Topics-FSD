import { Button } from './Button';

export const Sign_in_Button = ({ value }) => {
  return (
    <>
      <Button
        value={{
          name: value,
          style: {
            padding: '.25rem 1rem',
            borderRadius: '.4rem',
            border: '2px solid green',
            background: 'transparent',
          },
        }}
      />
    </>
  );
};
