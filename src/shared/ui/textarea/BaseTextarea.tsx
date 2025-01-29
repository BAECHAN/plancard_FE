import { Textarea } from '@/shared/lib/shadcn-ui/components/ui';
import { Size } from '@/shared/type';
import { useEffect, useRef } from 'react';

interface BaseTextareaProps {
  onEscape?: () => void;
  value?: string;
  hasBorder?: boolean;
  textSize?: Size;
  placeholder?: string;
  // 필요한 다른 props들도 여기에 추가
}

const BaseTextarea = ({ value, onEscape, ...props }: BaseTextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(
    function attachEscapeKeyListener() {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.stopPropagation();
          e.preventDefault();
          onEscape?.();
        }
      };

      const element =
        (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current ||
        window;

      element.addEventListener('keydown', handleKeyDown as EventListener);

      return () => {
        element.removeEventListener('keydown', handleKeyDown as EventListener);
      };
    },
    [onEscape, ref],
  );

  const onScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    // 외부 스크롤은 동작안하도록
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Textarea
      ref={ref}
      onScroll={onScroll}
      className="border-gray-300 bg-transparent w-full resize-none border p-2 focus:border-2 focus:border-navy focus:outline-none"
      defaultValue={value}
      {...props}
    />
  );
};

export default BaseTextarea;
