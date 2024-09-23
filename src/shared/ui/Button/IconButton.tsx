import { Size } from '@/shared/type';
import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons'; // FontAwesome이나 react-icons 같은 라이브러리용

const small = 'w-6 h-auto';
const medium = 'w-10 h-auto';
const large = 'w-14 h-auto';

interface IconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  iconPath?: string; // SVG 경로를 전달할 때
  IconComponent?: IconType; // FontAwesome 같은 라이브러리에서 컴포넌트를 전달할 때
  alt?: string; // SVG에 대한 설명
  size?: Size;
}

const IconButton = ({
  iconPath,
  IconComponent,
  alt = '',
  onClick,
  size = 'small',
}: IconButtonProps) => {
  const sizeClass: Record<Size, string> = {
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
        />
      )}
      {IconComponent && <IconComponent className={`${sizeClass[size]}`} />}
    </button>
  );
};

export default IconButton;
