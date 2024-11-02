import { Size } from '@/shared/type';

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;

  size?: Size;
}

const MenuItem = ({ children, active, size = 'medium' }: MenuItemProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base',
  };

  const activeClass = active ? 'bg-skyblue text-white' : '';

  return (
    <div className={`${sizeClass[size]} ${activeClass} w-full px-3 py-2`}>
      {children}
    </div>
  );
};

export default MenuItem;
