import {
  iconLarge as large,
  iconMedium as medium,
  iconSmall as small,
  iconXSmall as xsmall,
} from '@/shared/const';
import { SizeWithXSmall } from '@/shared/type';
import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons'; // FontAwesome이나 react-icons 같은 라이브러리용

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  iconPath?: string; // SVG 경로를 전달할 때
  IconComponent?: IconType; // FontAwesome 같은 라이브러리에서 컴포넌트를 전달할 때
  alt?: string; // SVG에 대한 설명
  size?: SizeWithXSmall;
  color?: string;
}

const IconButton = ({
  iconPath,
  IconComponent,
  alt = '',
  onClick,
  size = 'small',
  color,
}: IconButtonProps) => {
  const sizeClass: Record<SizeWithXSmall, string> = {
    xsmall,
    small,
    medium,
    large,
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full p-0 transition-colors duration-300`}
    >
      {iconPath && (
        <img
          src={iconPath}
          alt={alt}
          className={`${sizeClass[size]}`}
          color={color}
        />
      )}
      {IconComponent && (
        <IconComponent
          className={`${sizeClass[size]} `}
          color={color}
        />
      )}
    </button>
  );
};

export default IconButton;
