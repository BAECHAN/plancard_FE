import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import React from 'react';

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
  buttonXLarge as xLarge,
} from '@/shared/const';
import { SizeWithXLarge, Variant } from '@/shared/type';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;

  variant?: Variant;
  size?: SizeWithXLarge;
  disabled?: boolean;
}

const BaseButton = ({
  children,
  onClick,

  variant = 'primary',
  disabled = false,
  size = 'medium',
  ...props
}: BaseButtonProps) => {
  const sizeClass: Record<SizeWithXLarge, string> = {
    small,
    medium,
    large,
    xLarge,
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
      className={`${sizeClass[size]} ${variantClass[variant]} ${disabledStyle} ${hoverStyle}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </Button>
  );
};

export default BaseButton;
