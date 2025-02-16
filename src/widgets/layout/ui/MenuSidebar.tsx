import { useToggle } from '@/shared/hooks';
import { usePathStore } from '@/shared/store';
import { Size } from '@/shared/type';
import { MenuItem } from '@/shared/ui';
import SidebarToggleButton from '@/widgets/layout/ui/SidebarToggleButton';
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

  const { value: isOpen, toggle } = useToggle(true);

  return (
    <aside
      className={`${sizeClass[size]} ${isOpen ? 'w-60 bg-mono200' : 'w-fit bg-white'}`}
      {...props}
    >
      <div className="flex items-center justify-between">
        <SidebarToggleButton
          isOpen={isOpen}
          toggle={toggle}
        />
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/cards/my">
              <MenuItem
                active={currentPage === 'cards'}
                size={size}
              >
                <b>카드</b>
              </MenuItem>
            </Link>
          </li>
          <li>
            <Link to="/plans/my">
              <MenuItem
                active={currentPage === 'plans'}
                size={size}
              >
                <b>플랜</b>
              </MenuItem>
            </Link>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default MenuSidebar;
