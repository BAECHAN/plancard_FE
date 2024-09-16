import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import React from 'react';

import {
  amber,
  buttonLarge as large,
  buttonMedium as medium,
  buttonSmall as small,
  disabledStyle,
  flexCenter,
  gray,
  hoverStyle,
  navy,
  primary,
  skyblue,
} from '@/shared/const';
import { ButtonSize, ButtonVariant } from '@/shared/type';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;

  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

export const BaseButton = ({
  children,
  onClick,

  variant = 'primary',
  disabled = false,
  size = 'medium',
  ...props
}: BaseButtonProps) => {
  const sizeClass: Record<ButtonSize, string> = {
    small,
    medium,
    large,
  };

  const variantClass: Record<ButtonVariant, string> = {
    primary,
    gray,
    skyblue,
    amber,
    navy,
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