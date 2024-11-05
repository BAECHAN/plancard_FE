import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number = 300): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // 이전 타이머 클리어
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;