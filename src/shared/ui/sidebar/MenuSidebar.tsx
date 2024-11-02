import { Size } from '@/shared/type';

interface MenuSidebarProps {
  children: React.ReactNode;
  size?: Size;
}

const MenuSidebar = ({
  children,
  size = 'medium',
  ...props
}: MenuSidebarProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'w-48 text-xs',
    medium: 'w-60 text-sm',
    large: 'w-72 text-base',
  };

  return (
    <aside
      className={`${sizeClass[size]} bg-lightgray h-full absolute top-0 left-0 flex flex-col gap-2 pt-8`}
      {...props}
    >
      {children}
    </aside>
  );
};

export default MenuSidebar;
