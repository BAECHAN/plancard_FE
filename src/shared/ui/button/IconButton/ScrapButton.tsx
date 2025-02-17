import { useControlledToggle } from '@/shared/hooks';
import { SizeWithXSmall } from '@/shared/type';
import { IconButton } from '@/shared/ui';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const ScrapButton = ({
  size = 'small',

  isActive,
  onClick,
  defaultIsActive = false,
}: {
  size?: SizeWithXSmall;
  isActive?: boolean;
  defaultIsActive?: boolean; // internalValue 초기값
  onClick: (isActive: boolean) => void;
}) => {
  const { actualValue, handleToggle } = useControlledToggle({
    value: isActive,
    defaultValue: defaultIsActive,
    onChange: onClick,
  });

  return (
    <IconButton
      IconComponent={actualValue ? FaBookmark : FaRegBookmark}
      alt="북마크"
      size={size}
      onClick={handleToggle}
    />
  );
};

export default ScrapButton;
