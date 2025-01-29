import { LEAVE_CONFIRM_MESSAGE } from '@/shared/const';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UsePreventLeaveProps {
  message?: string;
  when?: boolean;
}

const usePreventLeave = ({
  message = LEAVE_CONFIRM_MESSAGE,
  when = true,
}: UsePreventLeaveProps = {}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!when) {
      return;
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [when]);

  const handleNavigateWithConfirm = useCallback(
    (to: string) => {
      if (!when || window.confirm(message)) {
        navigate(to);
      }
    },
    [navigate, message, when],
  );

  return { handleNavigateWithConfirm };
};

export default usePreventLeave;
