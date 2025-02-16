import { Textarea } from '@/shared/lib/shadcn-ui/components/ui';
import { cn } from '@/shared/lib/shadcn-ui/lib/utils';
import { Size } from '@/shared/type';
import { useEffect, useRef, useState } from 'react';

interface BaseTextareaProps {
  onEscape?: () => void;
  value?: string;
  hasBorder?: boolean;
  textSize?: Size;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  showMaxLength?: boolean;
  maxLengthTextSize?: Size;
  hasScroll?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  // 필요한 다른 props들도 여기에 추가
}

const textSizeClass = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

const textAlignClass = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const BaseTextarea = ({
  value = '',
  onEscape,
  maxLength = 2000,
  showMaxLength = true,
  hasBorder = true,
  hasScroll = true,
  textSize = 'medium',
  rows = 5,
  textAlign = 'left',
  maxLengthTextSize = textSize,
  placeholder = '텍스트 입력',
  ...props
}: BaseTextareaProps) => {
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

  const [isFocused, setIsFocused] = useState(false);
  const [currentLength, setCurrentLength] = useState(value.length);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentLength(e.target.value.length);
  };

  return (
    <div className="relative w-full">
      <Textarea
        ref={ref}
        onScroll={onScroll}
        className={cn(
          'border-gray-300 w-full resize-none p-2 focus:border-2 focus:outline-none',
          textSizeClass[textSize],
          'h-full',
          hasBorder ? 'border' : 'border-none',
          hasScroll ? '' : 'scrollbar-hide',
          textAlignClass[textAlign],
        )}
        defaultValue={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={handleFocus}
        rows={rows}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      {isFocused && showMaxLength && (
        <div
          className={`text-gray-500 absolute bottom-0 right-2 ${textSizeClass[maxLengthTextSize]}`}
        >
          {currentLength}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default BaseTextarea;
