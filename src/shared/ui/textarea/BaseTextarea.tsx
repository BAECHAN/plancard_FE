import { Textarea } from '@/shared/lib/shadcn-ui/components/ui';
import { forwardRef } from 'react';

interface BaseTextareaProps {
  onEscape?: () => void;
  value?: string;
  // 필요한 다른 props들도 여기에 추가
}

const BaseTextarea = forwardRef<HTMLTextAreaElement, BaseTextareaProps>(
  ({ value, onEscape, ...props }, ref) => {
    const handleEscape = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onEscape?.();
      }
    };

    return (
      <Textarea
        ref={ref}
        className="w-full p-2 border border-gray-300 bg-transparent focus:outline-none focus:border-navy focus:border-2 resize-none"
        defaultValue={value}
        {...props}
        onKeyDown={handleEscape}
      />
    );
  },
);

// 개발 환경에서 컴포넌트 디버깅을 위한 displayName 설정
BaseTextarea.displayName = 'BaseTextarea';

export default BaseTextarea;
