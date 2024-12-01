import {
  flexCenter,
  titleLarge as large,
  titleMedium as medium,
  titleSmall as small,
} from '@/shared/const';
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { Size } from '@/shared/type';
import { MouseEvent } from 'react';
import { TbPointFilled } from 'react-icons/tb';

interface SortingTitleButtonProps {
  title: string;
  onClick: () => void;

  isActive?: boolean;
  size?: Size;
}
const SortingTitleButton = ({
  title,
  onClick,

  isActive = false,
  size = 'medium',
  ...props
}: SortingTitleButtonProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const activeClass = isActive ? 'text-black' : 'text-mono400 hover:underline';

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    onClick();
  };

  return (
    <Button
      className={`${flexCenter} ${sizeClass[size]} mx-2 ${activeClass} cursor-pointer p-0`}
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
