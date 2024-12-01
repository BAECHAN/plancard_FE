import useControlledToggle from '@/shared/hooks/useControlledToggle';
import { SizeWithXSmall } from '@/shared/type';
import IconButton from '@/shared/ui/button/IconButton/IconButton';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const ScrapButton = ({
  size = 'small',

  value,
  onClick,
  defaultValue = false,
}: {
  size?: SizeWithXSmall;

  value?: boolean;
  onClick?: () => void;
  defaultValue?: boolean;
}) => {
  const { actualValue, handleToggle } = useControlledToggle({
    value,
    defaultValue,
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
