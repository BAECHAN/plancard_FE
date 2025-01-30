import { useCallback, useEffect } from 'react';
import { Location as RouterLocation, useBlocker } from 'react-router-dom';

const usePreventLeave = (
  message: string = '페이지를 나가시겠습니까?',
): void => {
  // 네비게이션 차단 핸들러
  const handleBlockNavigation = useCallback(
    ({
      currentLocation,
      nextLocation,
    }: {
      currentLocation: RouterLocation;
      nextLocation: RouterLocation;
      historyAction: string;
    }) => {
      // 같은 페이지로의 이동은 허용
      if (currentLocation.pathname === nextLocation.pathname) {
        return true;
      }

      return !window.confirm(message);
    },
    [message],
  );

  // React Router의 네비게이션 블로커 설정
  useBlocker(handleBlockNavigation);

  // 브라우저 기본 이벤트 처리
  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = message;
      return message;
    },
    [message],
  );

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [handleBeforeUnload]);
};

export default usePreventLeave;
