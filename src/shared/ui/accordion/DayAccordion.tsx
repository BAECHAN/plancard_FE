import { flexCenter } from '@/shared/const';
import { useToggle } from '@/shared/hooks';
import { Size } from '@/shared/type';
import { DayDropdown, EditableTitle, ToggleArrowDown } from '@/shared/ui';

import React from 'react';

interface DayAccordionProps {
  children: React.ReactNode;
  onSaveTitle: (title: string) => void;
  size?: Size;
  title?: string;
  optionDateList: Date[];
  index: number;
  onChangeDate: (date: Date) => void;
}

const DayAccordion = ({
  optionDateList,
  children,
  onSaveTitle,
  title = '',
  size = 'medium',
  index,
  onChangeDate,
}: DayAccordionProps) => {
  const { value: isOpen, toggle, closeToggle } = useToggle(true);

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('double click');
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDayDropdownClick = (date: Date) => {
    //onChangeDate(date);
  };

  return (
    <div className={`accordion-container ${flexCenter} flex-col`}>
      <div
        className={`accordion-header flex w-full cursor-pointer items-center justify-between gap-2`}
        onClick={toggle}
        onDoubleClick={handleDoubleClick}
      >
        <div className="flex w-1/3 min-w-[100px] whitespace-nowrap">
          <DayDropdown
            optionList={optionDateList}
            index={index}
            onClick={clickedDate => handleDayDropdownClick(clickedDate)}
          />
        </div>
        <div className="flex w-1/3 min-w-[300px] items-center justify-center gap-2">
          <EditableTitle
            initialTitle={title}
            onSaveTitle={onSaveTitle}
            size={size}
          />
          <ToggleArrowDown
            isOpen={isOpen}
            size={size}
          />
        </div>
        <div className="flex w-1/3" />
      </div>
      <div
        className={`flex w-full justify-start overflow-hidden px-4 transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-fit py-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DayAccordion;
