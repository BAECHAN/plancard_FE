import {
  amber,
  buttonLarge as large,
  buttonMedium as medium,
  buttonSmall as small,
  buttonXSmall as xsmall,
  cream,
  disabledStyle,
  flexCenter,
  gray,
  hoverStyle,
  navy,
  periwinkle,
  primary,
  skyblue,
} from '@/shared/const';
import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import { ExtendedSize, Variant } from '@/shared/type';
import React from 'react';

interface TagButtonProps {
  children: React.ReactNode;
  onClick: () => void;

  variant?: Variant;
  size?: ExtendedSize;
  disabled?: boolean;
}

const TagButton = ({
  children,
  onClick,

  variant = 'primary',
  disabled = false,
  size = 'medium',
  ...props
}: TagButtonProps) => {
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
    <Button
      className={`rounded-full ${sizeClass[size]} ${variantClass[variant]} ${disabledStyle} ${hoverStyle}`}
      disabled={disabled}
      {...props}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </Button>
  );
};

export default TagButton;
