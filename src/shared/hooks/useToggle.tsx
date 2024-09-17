import { useCallback, useState } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [value, setIsValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setIsValue(prev => !prev);
  }, []);

  const closeToggle = useCallback(() => {
    setIsValue(false);
  }, []);

  const openToggle = useCallback(() => {
    setIsValue(true);
  }, []);

  return { value, toggle, closeToggle, openToggle };
};

export default useToggle;
