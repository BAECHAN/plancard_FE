import { useKeydown } from '@/shared/hooks';
import { Textarea } from '@/shared/lib/shadcn-ui/components/ui';
import { forwardRef, RefObject } from 'react';

interface BaseTextareaProps {
  onEscape?: () => void;
  value?: string;
  // 필요한 다른 props들도 여기에 추가
}

const BaseTextarea = forwardRef<HTMLTextAreaElement, BaseTextareaProps>(
  ({ onEscape, value, ...props }, ref) => {
    onEscape && useKeydown('Escape', onEscape, ref as RefObject<HTMLElement>);

    return (
      <Textarea
        ref={ref}
        className="w-full p-2 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-navy focus:border-2"
        defaultValue={value}
        {...props}
      />
    );
  },
);

// 개발 환경에서 컴포넌트 디버깅을 위한 displayName 설정
BaseTextarea.displayName = 'BaseTextarea';

export default BaseTextarea;
