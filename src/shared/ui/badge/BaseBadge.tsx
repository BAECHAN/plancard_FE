import { Badge } from '@/shared/lib/shadcn-ui/components/ui';

import {
  amber,
  cream,
  flexCenter,
  gray,
  buttonLarge as large,
  buttonMedium as medium,
  navy,
  periwinkle,
  primary,
  skyblue,
  buttonSmall as small,
  white,
  buttonXSmall as xSmall,
} from '@/shared/const';
import { SizeWithXSmall, Variant } from '@/shared/type';

interface BaseBadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: SizeWithXSmall;
}

const BaseBadge = ({
  children,
  variant = 'primary',
  size = 'medium',
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
      className={`${sizeClass[size]} ${variantClass[variant]} border-none`}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </Badge>
  );
};

export default BaseBadge;
