import { Size } from '@/shared/type';
import { IoIosArrowDown } from 'react-icons/io';

const small = 'text-sm';
const medium = 'text-base';
const large = 'text-xl';

interface IconProps {
  size?: Size;
  isOpen: boolean;
}
export const ToggleArrowDown: React.FC<IconProps> = ({
  size = 'medium',
  isOpen,
}) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  return (
    <IoIosArrowDown
      className={`${sizeClass[size]} transition-transform duration-300 ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
    />
  );
};
