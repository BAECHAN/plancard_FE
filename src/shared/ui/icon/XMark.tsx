import { SizeWithXSmall } from '@/shared/type';
import { FaXmark } from 'react-icons/fa6';

const xSmall = 'text-[10px]';
const small = 'text-sm';
const medium = 'text-base';
const large = 'text-xl';

interface IconProps {
  size?: SizeWithXSmall;
}
const XMark: React.FC<IconProps> = ({ size = 'medium' }) => {
  const sizeClass: Record<SizeWithXSmall, string> = {
    xSmall,
    small,
    medium,
    large,
  };

  return <FaXmark className={`${sizeClass[size]} `} />;
};

export default XMark;
