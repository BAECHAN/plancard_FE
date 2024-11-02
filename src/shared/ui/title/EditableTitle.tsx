import {
  titleLarge as large,
  titleMedium as medium,
  titleSmall as small,
} from '@/shared/const';
import { useInput, useToggle } from '@/shared/hooks';

import { Size } from '@/shared/type';
import { ChangeEvent, useEffect, useRef } from 'react';

interface EditableTitleProps {
  initialTitle: string;
  onSaveTitle: (title: string) => void;
  onFocusTitle?: () => void;
  size?: Size;
  placeholder?: string;
}
const EditableTitle = ({
  initialTitle,
  onFocusTitle,
  onSaveTitle,
  size = 'medium',
  placeholder = '제목 입력',
}: EditableTitleProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const { value: isOpen, toggle } = useToggle(false);

  const { value: title, onChange } = useInput(initialTitle);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTitleBlur = () => {
    toggle();
    onSaveTitle(title);
  };

  const handleTitleDoubleClick = (
    e: React.MouseEvent<HTMLParagraphElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  };

  useEffect(() => {
    isOpen && inputRef.current?.focus();
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <span className={`${sizeClass[size]}`}>
      {isOpen ? (
        <input
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onClick={handleClick}
          onBlur={handleTitleBlur}
          onFocus={onFocusTitle}
          ref={inputRef}
        />
      ) : (
        <p
          onDoubleClick={handleTitleDoubleClick}
          className="text-mono400 cursor-pointer"
        >
          {initialTitle !== '' ? initialTitle : placeholder}
        </p>
      )}
    </span>
  );
};

export default EditableTitle;
