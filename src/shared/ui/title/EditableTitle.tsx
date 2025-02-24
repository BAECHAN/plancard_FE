import {
  titleLarge as large,
  titleMedium as medium,
  titleSmall as small,
} from '@/shared/const';
import { useInput, useToggle } from '@/shared/hooks';

import { Size } from '@/shared/type';
import { IconButton, Input } from '@/shared/ui';
import { ChangeEvent, useEffect, useRef } from 'react';
import { HiPencilSquare } from 'react-icons/hi2';

interface EditableTitleProps {
  initialTitle: string;
  onSaveTitle: (title: string) => void;
  size?: Size;
  placeholder?: string;
}
const EditableTitle = ({
  initialTitle,
  onSaveTitle,
  size = 'medium',
  placeholder = '제목 입력',
}: EditableTitleProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const { value: isOpen, toggle: toggleInput } = useToggle(false);

  const { value: title, onChange } = useInput(initialTitle);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTitleBlur = () => {
    toggleInput();
    onSaveTitle(title);
  };

  useEffect(() => {
    isOpen && inputRef.current?.focus();
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    toggleInput();
  };

  return (
    <span className={`${sizeClass[size]}`}>
      {isOpen ? (
        <Input
          id={'editable-title-input'}
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onBlur={handleTitleBlur}
          ref={inputRef}
          hasResetButton={false}
        />
      ) : (
        <div className="flex items-center gap-2">
          <p className="cursor-pointer text-mono400">
            {initialTitle || placeholder}
          </p>
          <IconButton
            IconComponent={HiPencilSquare}
            onClick={e => handleClick(e)}
          />
        </div>
      )}
    </span>
  );
};

export default EditableTitle;
