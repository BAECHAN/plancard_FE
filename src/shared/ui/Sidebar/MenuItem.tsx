import { Size } from '@/shared/type';

const small = 'text-xs';
const medium = 'text-sm';
const large = 'text-base';

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
