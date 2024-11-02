import { flexCenter } from '@/shared/const';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/lib/shadcn-ui/components/ui';

import { Size } from '@/shared/type';
import { Util } from '@/shared/util';

import { useToggle } from '@/shared/hooks';
import { ToggleArrowDown } from '@/shared/ui';

interface DayDropdownProps {
  optionList: Date[];
  index: number;
  size?: Size;
  onClick: () => void;
}

const DayDropdown = ({
  optionList,
  index,
  onClick,
  size = 'medium',
  ...props
}: DayDropdownProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base',
  };

  const { value: isOpen, toggle } = useToggle(false);

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={toggle}
    >
      <DropdownMenuTrigger className={`${sizeClass[size]} ${flexCenter} gap-2`}>
        <b>day {index + 1}</b>
        <b className="text-mono400">
          {Util.formatDateForDayPlan(optionList[index])}
        </b>
        <ToggleArrowDown
          isOpen={isOpen}
          size={size}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        {optionList.map((date, i) => (
          <DropdownMenuItem
            key={i}
            onClick={onClick}
            className={`${flexCenter} ${sizeClass[size]} gap-2 hover:bg-skyblue cursor-pointer rounded-md`}
          >
            <b>day {i + 1}</b>
            <b className="text-mono400">{Util.formatDateForDayPlan(date)}</b>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DayDropdown;
