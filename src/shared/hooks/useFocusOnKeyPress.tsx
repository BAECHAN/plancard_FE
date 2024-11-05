import { RefObject, useEffect } from 'react';

function useFocusOnKeyPress(ref: RefObject<HTMLElement>, targetKey: string) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        event.preventDefault();
        ref.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, targetKey]);
}

export default useFocusOnKeyPress;
