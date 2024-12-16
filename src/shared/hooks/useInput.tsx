import { useCallback, useEffect, useRef, useState } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const ref = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback((updatedValue: string) => {
    setValue(updatedValue);
  }, []);

  const onReset = useCallback(() => {
    onChange('');
  }, [onChange]);

  useEffect(
    function attachESCKeydownEventListener() {
      const handleResetESCKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onReset();
        }
      };

      const target = ref.current;
      if (!value || !target) {
        return;
      }

      target.addEventListener('keydown', handleResetESCKeyDown);
      return () => {
        target.removeEventListener('keydown', handleResetESCKeyDown);
      };
    },
    [value, onReset],
  );

  return { ref, value, onChange, onReset };
};

export default useInput;
