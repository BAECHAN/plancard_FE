import { Textarea } from '@/shared/lib/shadcn-ui/components/ui';
import { forwardRef, useEffect } from 'react';

interface BaseTextareaProps {
  onEscape?: () => void;
  value?: string;
  // 필요한 다른 props들도 여기에 추가
}

const BaseTextarea = forwardRef<HTMLTextAreaElement, BaseTextareaProps>(
  ({ value, onEscape, ...props }, ref) => {
    useEffect(
      function attachEscapeKeyListener() {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            e.stopPropagation();
            onEscape?.();
          }
        };

        const element =
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current ||
          window;

        element.addEventListener('keydown', handleKeyDown as EventListener);

        return () => {
          element.removeEventListener(
            'keydown',
            handleKeyDown as EventListener,
          );
        };
      },
      [onEscape, ref],
    );

    return (
      <Textarea
        ref={ref}
        className="border-gray-300 bg-transparent w-full resize-none border p-2 focus:border-2 focus:border-navy focus:outline-none"
        defaultValue={value}
        {...props}
      />
    );
  },
);

// 개발 환경에서 컴포넌트 디버깅을 위한 displayName 설정
BaseTextarea.displayName = 'BaseTextarea';

export default BaseTextarea;
