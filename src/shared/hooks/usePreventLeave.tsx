import { useCallback, useEffect } from 'react';

const usePreventLeave = (
  message: string = '페이지를 나가시겠습니까?',
): void => {
  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    },
    [message],
  );

  const handlePopState = useCallback(
    (event: PopStateEvent) => {
      if (window.confirm(message)) {
        return;
      }

      // 현재 상태를 history에 다시 추가하여 이동을 방지
      window.history.pushState(null, '', window.location.href);
    },
    [message],
  );

  useEffect(() => {
    // 현재 상태를 history에 추가
    window.history.pushState(null, '', window.location.href);

    // 이벤트 리스너 등록
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [handlePopState, handleBeforeUnload]);
};

export default usePreventLeave;
