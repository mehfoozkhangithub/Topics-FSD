import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const saveData = localStorage.getItem(key);
    return saveData ? JSON.parse(saveData) : initialValue;
  });
  console.log('🚀 ~ value:', value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const finaVal = (payload) => {
    setValue((prev) => [...prev, payload]);
  };

  return [value, finaVal];
};

// blood presure high -> baby high by khushal bhai
