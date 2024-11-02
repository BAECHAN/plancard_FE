import { useCallback, useState } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = useCallback((updatedValue: string) => {
    setValue(updatedValue);
  }, []);

  return { value, onChange };
};

export default useInput;
