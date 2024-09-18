import { Badge } from '@/shared/lib/shadcn-ui/components/ui';

import {
  amber,
  buttonLarge as large,
  buttonMedium as medium,
  buttonSmall as small,
  buttonXSmall as xsmall,
  cream,
  flexCenter,
  gray,
  navy,
  periwinkle,
  primary,
  skyblue,
} from '@/shared/const';
import { ExtendedSize, Variant } from '@/shared/type';

interface BaseBadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: ExtendedSize;
}

export const BaseBadge = ({
  children,
  variant = 'primary',
  size = 'medium',
}: BaseBadgeProps) => {
  const sizeClass: Record<ExtendedSize, string> = {
    xsmall,
    small,
    medium,
    large,
  };

  const variantClass: Record<Variant, string> = {
    primary,
    gray,
    cream,
    skyblue,
    amber,
    navy,
    periwinkle,
  };

  return (
    <Badge
      className={`${sizeClass[size]} ${variantClass[variant]} border-none`}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </Badge>
  );
};
