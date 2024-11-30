import {
  flexCenter,
  titleLarge as large,
  titleMedium as medium,
  titleSmall as small,
} from '@/shared/const';
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { Size } from '@/shared/type';
import { useState } from 'react';
import { TbPointFilled } from 'react-icons/tb';

interface SortingTitleButtonProps {
  title: string;
  onClick: () => void;

  size?: Size;
}
const SortingTitleButton = ({
  title,
  onClick,
  size = 'medium',
  ...props
}: SortingTitleButtonProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const [active, setActive] = useState(false);

  const activeClass = active ? 'text-black' : 'text-mono400 hover:underline';

  const handleActiveToggle = () => {
    setActive(prev => !prev);
  };

  return (
    <Button
      className={`${flexCenter} ${sizeClass[size]} mx-2 ${activeClass} cursor-pointer p-0`}
      onClick={() => handleActiveToggle()}
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
