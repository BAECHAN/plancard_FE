import { RefObject, useEffect } from 'react';

const useKeydown = (
  targetKey: string,
  callback: () => void,
  targetRef?: RefObject<HTMLElement> | null,
) => {
  useEffect(() => {
    const handleKeydown = (event: globalThis.KeyboardEvent) => {
      if (event.key === targetKey) {
        event.preventDefault();
        event.stopPropagation();
        callback();
      }
    };

    const element = targetRef?.current || window;

    element.addEventListener('keydown', handleKeydown as EventListener);

    return () => {
      element.removeEventListener('keydown', handleKeydown as EventListener);
    };
  }, [targetKey, callback, targetRef]);
};

export default useKeydown;
