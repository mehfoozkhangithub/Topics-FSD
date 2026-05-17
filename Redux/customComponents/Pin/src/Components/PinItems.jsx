import React from 'react';

export const PinItems = React.forwardRef(
  ({ max, handleChangeEvent, onBackSpace }, ref) => {
    const handlePintItems = (e) => {
      // console.log('🚀 ~ e:', e);
      const { value } = e.target;

      switch (e.keyCode) {
        // backSpace
        case 8:
          onBackSpace(value);
          break;

        // tab key
        case 9:
          e.preventDefault();
          break;

        default:
          handleChangeEvent(value);
          break;
      }
    };

    return (
      <>
        <input
          style={{
            width: '35px',
            height: '35px',
            border: '0.15rem solid gray',
            borderRadius: '0.2rem',
            textAlign: 'center',
          }}
          type="text"
          maxLength={max}
          onKeyUp={handlePintItems}
          ref={ref}
        />
      </>
    );
  },
);
