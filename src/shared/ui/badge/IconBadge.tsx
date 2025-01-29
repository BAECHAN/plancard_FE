import {
  iconLarge as large,
  iconMedium as medium,
  iconSmall as small,
  iconXSmall as xSmall,
} from '@/shared/const';
import { SizeWithXSmall } from '@/shared/type';
import { IconType } from 'react-icons';

interface IconBadgeProps {
  iconPath?: string; // SVG 경로를 전달할 때
  IconComponent?: IconType; // FontAwesome 같은 라이브러리에서 컴포넌트를 전달할 때
  alt?: string; // SVG에 대한 설명
  size?: SizeWithXSmall; // 아이콘 크기
  className?: string; // 추가 클래스 이름
}

const IconBadge = ({
  iconPath,
  IconComponent,
  alt = '',
  size = 'medium',
  className = '',
}: IconBadgeProps) => {
  const sizeClass: Record<SizeWithXSmall, string> = {
    xSmall,
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
          className={`${sizeClass[size]} ${className}`}
        />
      )}
      {IconComponent && (
        <IconComponent className={`${sizeClass[size]} ${className}`} />
      )}
    </div>
  );
};

export default IconBadge;
