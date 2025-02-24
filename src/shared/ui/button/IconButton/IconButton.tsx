import {
  iconLarge as large,
  iconMedium as medium,
  iconSmall as small,
  iconXSmall as xSmall,
} from '@/shared/const';
import { useToggle } from '@/shared/hooks';
import { SizeWithXSmall } from '@/shared/type';
import { Image } from '@/shared/ui';
import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons'; // FontAwesome이나 react-icons 같은 라이브러리용

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconPath?: string; // SVG 경로를 전달할 때
  IconComponent?: IconType; // FontAwesome 같은 라이브러리에서 컴포넌트를 전달할 때
  HoverIconComponent?: IconType; // 마우스 호버 시 보여줄 아이콘
  alt?: string; // SVG에 대한 설명
  size?: SizeWithXSmall;
  color?: string;
  hoverIconColor?: string;
  className?: string;
  stopPropagation?: boolean;
}

const IconButton = ({
  iconPath,
  IconComponent,
  HoverIconComponent,
  alt = '',
  onClick,
  size = 'small',
  color,
  hoverIconColor,
  className = '',
  stopPropagation = true,
}: IconButtonProps) => {
  const sizeClass: Record<SizeWithXSmall, string> = {
    xSmall,
    small,
    medium,
    large,
  };

  const { value: isHovered, openToggle, closeToggle } = useToggle();

  const handleIconButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    stopPropagation && e.stopPropagation();
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <button
      onClick={handleIconButtonClick}
      onMouseEnter={openToggle}
      onMouseLeave={closeToggle}
      className={`inline-flex cursor-pointer items-center justify-center p-0 transition-colors duration-300 ${className}`}
    >
      {iconPath && (
        <Image
          src={iconPath}
          alt={alt}
          className={`${sizeClass[size]}`}
          color={color}
        />
      )}
      {IconComponent &&
        (HoverIconComponent ? (
          isHovered ? (
            <HoverIconComponent
              className={`${sizeClass[size]} `}
              color={hoverIconColor}
            />
          ) : (
            <IconComponent
              className={`${sizeClass[size]} `}
              color={color}
            />
          )
        ) : (
          <IconComponent
            className={`${sizeClass[size]} `}
            color={color}
          />
        ))}
    </button>
  );
};

export default IconButton;
