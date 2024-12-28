import { Size } from '@/shared/type';
import { MenuItem } from '@/shared/ui';
import { useState } from 'react';

interface MenuSidebarProps {
  size?: Size;
}

type MenuTabOption = 'card' | 'plan';

const MenuSidebar = ({ size = 'medium', ...props }: MenuSidebarProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'w-48 text-xs',
    medium: 'w-60 text-sm',
    large: 'w-72 text-base',
  };

  const [activeTab, setActiveTab] = useState<MenuTabOption>('card');

  const handleTabClick = (activeMenu: MenuTabOption) => {
    setActiveTab(activeMenu);
  };

  return (
    <aside
      className={`${sizeClass[size]} flex flex-col gap-2 bg-lightgray pt-8`}
      {...props}
    >
      <MenuItem
        active={activeTab === 'card'}
        size={size}
        onClick={() => handleTabClick('card')}
      >
        <b>카드</b>
      </MenuItem>
      <MenuItem
        active={activeTab === 'plan'}
        size={size}
        onClick={() => handleTabClick('plan')}
      >
        <b>플랜</b>
      </MenuItem>
    </aside>
  );
};

export default MenuSidebar;
