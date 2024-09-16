import {
  menuLarge as large,
  menuMedium as medium,
  menuSmall as small,
} from '@/shared/const';
import { Size } from '@/shared/type';

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;

  size?: Size;
}

export const MenuItem = ({
  children,
  active,
  size = 'medium',
}: MenuItemProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  const activeClass = active ? 'bg-skyblue text-white' : '';

  return (
    <div className={`${sizeClass[size]} ${activeClass} w-full px-3 py-2`}>
      {children}
    </div>
  );
};