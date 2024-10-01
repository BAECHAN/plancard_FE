import {
  iconLarge as large,
  iconMedium as medium,
  iconSmall as small,
} from '@/shared/const';
import { Size } from '@/shared/type';
import { IconType } from 'react-icons';

interface IconBadgeProps {
  iconPath?: string; // SVG 경로를 전달할 때
  IconComponent?: IconType; // FontAwesome 같은 라이브러리에서 컴포넌트를 전달할 때
  alt?: string; // SVG에 대한 설명
  size?: Size;
}

const IconBadge = ({
  iconPath,
  IconComponent,
  alt = '',
  size = 'medium',
}: IconBadgeProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  return (
    <div>
      {iconPath && (
        <img
          src={iconPath}
          alt={alt}
          className={`${sizeClass[size]}`}
        />
      )}
      {IconComponent && <IconComponent className={`${sizeClass[size]}`} />}
    </div>
  );
};

export default IconBadge;
