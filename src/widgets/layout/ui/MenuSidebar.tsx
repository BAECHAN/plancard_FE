import { usePathStore } from '@/shared/store';
import { Size } from '@/shared/type';
import { MenuItem } from '@/shared/ui';
import { Link } from 'react-router-dom';

interface MenuSidebarProps {
  size?: Size;
}

const MenuSidebar = ({ size = 'medium', ...props }: MenuSidebarProps) => {
  const { currentPage } = usePathStore();

  const sizeClass: Record<Size, string> = {
    small: 'w-48 text-xs',
    medium: 'w-60 text-sm',
    large: 'w-72 text-base',
  };

  return (
    <aside
      className={`${sizeClass[size]} flex flex-col gap-2 bg-lightgray pt-8`}
      {...props}
    >
      <Link to="/cards/my">
        <MenuItem
          active={currentPage === 'cards'}
          size={size}
        >
          <b>카드</b>
        </MenuItem>
      </Link>
      <Link to="/plans/my">
        <MenuItem
          active={currentPage === 'plans'}
          size={size}
        >
          <b>플랜</b>
        </MenuItem>
      </Link>
    </aside>
  );
};

export default MenuSidebar;
