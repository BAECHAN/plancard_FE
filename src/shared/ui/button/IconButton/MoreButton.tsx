import { SizeWithXSmall } from '@/shared/type';
import { IconButton } from '@/shared/ui';
import { FiMoreVertical } from 'react-icons/fi';

const MoreButton = ({ size = 'small' }: { size?: SizeWithXSmall }) => {
  return (
    <IconButton
      IconComponent={FiMoreVertical}
      alt="더보기 아이콘"
      size={size}
      className="rounded p-1.5 hover:bg-mono200"
    />
  );
};

export default MoreButton;
