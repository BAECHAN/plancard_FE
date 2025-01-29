import { Size } from '@/shared/type';
import { IconButton } from '@/shared/ui';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface HeaderProps {
  size?: Size;
}

const Header = ({ size = 'medium' }: HeaderProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl',
  };

  const gapClass: Record<Size, string> = {
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8',
  };

  return (
    <header
      className={`${sizeClass[size]} flex w-dvw items-center justify-between bg-skyblue py-2 pl-3 pr-10 text-white`}
    >
      <Link to="/cards">PlanCard</Link>
      <div className="flex grow-0" />
      <div className={`flex ${gapClass[size]}`}>
        <IconButton
          IconComponent={FaUser}
          size={size}
        />
        <IconButton
          IconComponent={MdLogout}
          size={size}
        />
      </div>
    </header>
  );
};

export default Header;
