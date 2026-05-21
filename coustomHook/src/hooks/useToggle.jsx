import { useState } from 'react';

export const useToggle = (incomeVal) => {
  const [value, setValue] = useState(incomeVal);

  function toggleValue(val) {
    if (typeof val !== 'boolean') {
      setValue(!value);
    } else {
      setValue(val);
    }
  }

  return [value, toggleValue];
};
