import { flexCenter } from '@/shared/const';
import useToggle from '@/shared/hooks/useToggle';
import { Size } from '@/shared/type';
import React from 'react';
import { ToggleArrowDown } from '../Icon/ToggleArrowDown';
import { EditableTitle } from '../Title/EditableTitle';

interface DayAccordionProps {
  children: React.ReactNode;
  onSaveTitle: (title: string) => void;
  size?: Size;
  title?: string;
}

export const DayAccordion = ({
  children,
  onSaveTitle,
  title = '',
  size = 'medium',
  ...props
}: DayAccordionProps) => {
  const { value: isOpen, toggle, closeToggle } = useToggle(false);

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    closeToggle();
  };

  return (
    <div className={`accordion-container w-svw ${flexCenter} flex-col`}>
      <div
        className={`accordion-header ${flexCenter} gap-2 cursor-pointer`}
        onClick={toggle}
        onDoubleClick={handleDoubleClick}
      >
        <EditableTitle
          initialTitle={title}
          onSaveTitle={onSaveTitle}
          size={size}
          onFocusTitle={closeToggle}
        />
        <ToggleArrowDown
          isOpen={isOpen}
          size={size}
        />
      </div>
      <div
        className={`${flexCenter} w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[200px] p-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
