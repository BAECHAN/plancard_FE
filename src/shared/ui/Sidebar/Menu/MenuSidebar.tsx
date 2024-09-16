import { SidebarSize } from '@/shared/type';

import {
  sidebarLarge as large,
  sidebarMedium as medium,
  sidebarSmall as small,
} from '@/shared/const';

interface MenuSidebarProps {
  children: React.ReactNode;
  size?: SidebarSize;
}

export const MenuSidebar = ({
  children,
  size = 'medium',
  ...props
}: MenuSidebarProps) => {
  const sizeClass: Record<SidebarSize, string> = {
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
