import { Size } from '@/shared/type';

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;

  size?: Size;
}

const MenuItem = ({
  children,
  active,
  size = 'medium',
  onClick,
}: MenuItemProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base',
  };

  const activeClass = active ? 'bg-skyblue text-white' : '';

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={`${sizeClass[size]} ${activeClass} w-full px-3 py-2 cursor-pointer`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default MenuItem;
