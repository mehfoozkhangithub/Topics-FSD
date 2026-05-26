import { useState } from 'react';

export const useToggle = (defaultValue) => {
  const [state, setState] = useState(defaultValue); // react env

  function setToggleState(val) {
    if (typeof val != 'boolean') {
      setState(!val);
    } else {
      setState(val);
    }
  }
  return [state, setToggleState];
};
