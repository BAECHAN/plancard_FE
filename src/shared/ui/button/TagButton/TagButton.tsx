import {
  amber,
  cream,
  disabledStyle,
  flexCenter,
  gray,
  hoverStyle,
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
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { SizeWithXSmall, Variant } from '@/shared/type';
import { MouseEventHandler } from 'react';

export type TagButtonProps = {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;

  variant?: Variant;
  size?: SizeWithXSmall;
  disabled?: boolean;
};

const TagButton = ({
  children,
  onClick,

  variant = 'primary',
  disabled = false,
  size = 'medium',
  ...props
}: TagButtonProps) => {
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
    <Button
      className={`rounded-full ${sizeClass[size]} ${variantClass[variant]} ${disabledStyle} ${hoverStyle}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </Button>
  );
};

export default TagButton;
