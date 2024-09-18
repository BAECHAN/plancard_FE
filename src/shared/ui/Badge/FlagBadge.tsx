import {
  buttonLarge as large,
  buttonMedium as medium,
  buttonSmall as small,
} from '@/shared/const';
import { Size } from '@/shared/type';

interface FlagBadgeProps {
  imgPath: string;
  alt?: string;
  size?: Size;
}

export const FlagBadge = ({
  imgPath,
  alt = '국기',
  size = 'medium',
}: FlagBadgeProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };
  return (
    <img
      src={imgPath}
      alt={alt}
      className={`${sizeClass[size]}`}
    />
  );
};
