import { SizeWithXSmall } from '@/shared/type';
import IconButton from '@/shared/ui/button/IconButton/IconButton';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

const CheckboxButton = ({ size = 'small' }: { size: SizeWithXSmall }) => {
  return (
    <IconButton
      IconComponent={ImCheckboxUnchecked}
      HoverIconComponent={ImCheckboxChecked}
      hoverIconColor="#28A745"
      alt="체크박스 버튼"
      size={size}
    />
  );
};

export default CheckboxButton;
