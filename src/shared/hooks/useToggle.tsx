import { useCallback, useState } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const closeToggle = useCallback(() => {
    setValue(false);
  }, []);

  const openToggle = useCallback(() => {
    setValue(true);
  }, []);

  return { value, toggle, closeToggle, openToggle, setValue };
};

export default useToggle;
