import { SizeWithXSmall } from '@/shared/type';
import IconButton from '@/shared/ui/button/IconButton';
import { MouseEventHandler, useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const ScrapButton = ({
  size = 'small',
  initialScrap = false,
  onClick,
}: {
  size?: SizeWithXSmall;
  initialScrap?: boolean;
  onClick: () => void;
}) => {
  const [scrap, setScrap] = useState(initialScrap);

  const handleScrapButtonClick: MouseEventHandler = e => {
    e.preventDefault();
    e.stopPropagation();

    setScrap(prev => !prev);
    onClick();
  };

  return (
    <IconButton
      IconComponent={scrap ? FaBookmark : FaRegBookmark}
      alt="북마크"
      size={size}
      onClick={handleScrapButtonClick}
    />
  );
};

export default ScrapButton;
