import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import React from 'react';

import {
  amber,
  buttonLarge as large,
  buttonMedium as medium,
  buttonSmall as small,
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
import { Size, Variant } from '@/shared/type';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;

  variant?: Variant;
  size?: Size;
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
  const sizeClass: Record<Size, string> = {
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
      className={`${sizeClass[size]} ${variantClass[variant]} ${disabledStyle} ${hoverStyle}`}
      disabled={disabled}
      {...props}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </Button>
  );
};

export default BaseButton;
