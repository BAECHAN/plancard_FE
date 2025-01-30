import { Badge } from '@/shared/lib/shadcn-ui/components/ui';

import {
  amber,
  cream,
  disabledStyle,
  flexCenter,
  gray,
  hoverStyle,
  badgeLarge as large,
  badgeMedium as medium,
  navy,
  periwinkle,
  primary,
  skyblue,
  badgeSmall as small,
  white,
  badgeXSmall as xSmall,
} from '@/shared/const';
import { SizeWithXSmall, Variant } from '@/shared/type';

type BaseBadgeProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: SizeWithXSmall;
  className?: string;
};

const BaseBadge = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
}: BaseBadgeProps) => {
  const sizeClass: Record<SizeWithXSmall, string> = {
    xSmall,
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
    white,
  };

  return (
    <Badge
      className={`${sizeClass[size]} ${variantClass[variant]} ${disabledStyle} ${hoverStyle} border-none ${className}`}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </Badge>
  );
};

export default BaseBadge;
