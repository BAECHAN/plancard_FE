import {
  flexCenter,
  titleLarge as large,
  titleMedium as medium,
  titleSmall as small,
} from '@/shared/const';
import { useControlledToggle } from '@/shared/hooks';
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { Size } from '@/shared/type';
import { MouseEvent } from 'react';
import { TbPointFilled } from 'react-icons/tb';

interface SortingTitleButtonProps {
  title: string;

  onClick?: (newValue: boolean) => void;
  isActive?: boolean;
  defaultIsActive?: boolean; // internalValue 초기값
  size?: Size;
}
const SortingTitleButton = ({
  title,

  onClick,
  isActive,
  defaultIsActive = false,
  size = 'medium',
  ...props
}: SortingTitleButtonProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const { actualValue, handleToggle } = useControlledToggle({
    value: isActive,
    defaultValue: defaultIsActive,
    onChange: onClick,
  });

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    !isActive && handleToggle(e);
  };

  return (
    <Button
      className={`${flexCenter} ${sizeClass[size]} mx-2 ${actualValue ? 'font-bold text-primary' : 'text-mono400 hover:underline'} cursor-pointer p-0`}
      onClick={handleButtonClick}
      {...props}
    >
      <span className="mt-[2px]">
        <TbPointFilled />
      </span>
      {title}
    </Button>
  );
};

export default SortingTitleButton;
