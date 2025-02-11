import { SizeWithXSmall } from '@/shared/type';
import { IconButton } from '@/shared/ui';
import { TbTrashX, TbTrashXFilled } from 'react-icons/tb';

const TrashButton = ({
  size = 'small',
  onClick,
}: {
  size: SizeWithXSmall;
  onClick: () => void;
}) => {
  return (
    <IconButton
      IconComponent={TbTrashX}
      HoverIconComponent={TbTrashXFilled}
      color="gray"
      alt="삭제 버튼"
      size={size}
      onClick={onClick}
    />
  );
};

export default TrashButton;
