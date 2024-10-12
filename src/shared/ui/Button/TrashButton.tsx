import { SizeWithXSmall } from '@/shared/type';
import IconButton from '@/shared/ui/button/IconButton';
import { TbTrashX, TbTrashXFilled } from 'react-icons/tb';

const TrashButton = ({ size = 'small' }: { size: SizeWithXSmall }) => {
  return (
    <IconButton
      IconComponent={TbTrashX}
      HoverIconComponent={TbTrashXFilled}
      color="gray"
      alt="삭제 버튼"
      size={size}
    />
  );
};

export default TrashButton;
