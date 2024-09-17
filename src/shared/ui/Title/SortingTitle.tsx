import {
  flexCenter,
  titleLarge as large,
  titleMedium as medium,
  titleSmall as small,
} from '@/shared/const';
import { Size } from '@/shared/type';
import { TbPointFilled } from 'react-icons/tb';

interface SortingTitleProps {
  title: string;
  onClick: () => void;

  size?: Size;
  active?: boolean;
}
export const SortingTitle = ({
  title,
  onClick,
  active = false,
  size = 'medium',
  ...props
}: SortingTitleProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const activeClass = active
    ? 'text-black hover:text-mono400'
    : 'text-mono400 hover:text-black hover:underline';

  return (
    <span
      className={`${flexCenter} ${sizeClass[size]} mx-2 ${activeClass} cursor-pointer`}
      {...props}
    >
      <span className="mt-[2px]">
        <TbPointFilled />
      </span>
      {title}
    </span>
  );
};
