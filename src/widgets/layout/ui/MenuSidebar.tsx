import { useContentPageStore } from '@/shared/store';
import { ContentPage, Size } from '@/shared/type';
import { MenuItem } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

interface MenuSidebarProps {
  size?: Size;
}

const MenuSidebar = ({ size = 'medium', ...props }: MenuSidebarProps) => {
  const navigate = useNavigate();

  const sizeClass: Record<Size, string> = {
    small: 'w-48 text-xs',
    medium: 'w-60 text-sm',
    large: 'w-72 text-base',
  };

  const { pageType, setPageType } = useContentPageStore();

  const handleTabClick = (activeMenu: ContentPage) => {
    setPageType(activeMenu);
    navigate(`/${activeMenu}`);
  };

  return (
    <aside
      className={`${sizeClass[size]} flex flex-col gap-2 bg-lightgray pt-8`}
      {...props}
    >
      <MenuItem
        active={pageType === 'card'}
        size={size}
        onClick={() => handleTabClick('card')}
      >
        <b>카드</b>
      </MenuItem>
      <MenuItem
        active={pageType === 'plan'}
        size={size}
        onClick={() => handleTabClick('plan')}
      >
        <b>플랜</b>
      </MenuItem>
    </aside>
  );
};

export default MenuSidebar;
