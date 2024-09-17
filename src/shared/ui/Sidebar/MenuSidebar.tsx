import { Size } from '@/shared/type';

const small = 'w-48 text-xs';
const medium = 'w-60 text-sm';
const large = 'w-72 text-base';

interface MenuSidebarProps {
  children: React.ReactNode;
  size?: Size;
}

export const MenuSidebar = ({
  children,
  size = 'medium',
  ...props
}: MenuSidebarProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
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
