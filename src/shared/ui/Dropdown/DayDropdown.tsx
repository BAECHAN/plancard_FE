import { flexCenter } from '@/shared/const';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

import { Size } from '@/shared/type';
import { Util } from '@/shared/util';
import { useState } from 'react';

import { ToggleArrowDown } from '../Icon/ToggleArrowDown';

const small = 'text-xs';
const medium = 'text-sm';
const large = 'text-base';

interface DayDropdownProps {
  option: Date[];
  index: number;
  size?: Size;
  onClick: () => void;
}

export const DayDropdown = ({
  option,
  index,
  onClick,
  size = 'medium',
  ...props
}: DayDropdownProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChange = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <DropdownMenuTrigger className={`${sizeClass[size]} ${flexCenter} gap-2`}>
        <b>day {index + 1}</b>
        <b className="text-mono400">
          {Util.formatDateForDayPlan(option[index])}
        </b>
        <ToggleArrowDown
          isOpen={isOpen}
          size={size}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${sizeClass[size]}`}>
        {option.map((date, i) => (
          <DropdownMenuItem
            key={i}
            onClick={onClick}
            className={`${flexCenter} gap-2 hover:bg-skyblue cursor-pointer`}
          >
            <b>day {i + 1}</b>
            <b className="text-mono400">{Util.formatDateForDayPlan(date)}</b>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
