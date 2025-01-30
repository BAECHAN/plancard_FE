import { Button } from '@/shared/lib/shadcn-ui/components/ui';
import React, { forwardRef } from 'react';

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

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant;
  size?: SizeWithXLarge;
  disabled?: boolean;
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      children,
      onClick,
      type = 'button',
      variant = 'primary',
      disabled = false,
      size = 'medium',
      ...props
    },
    ref,
  ) => {
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
        ref={ref}
        className={`${sizeClass[size]} ${variantClass[variant]} ${disabledStyle} ${hoverStyle}`}
        disabled={disabled}
        type={type}
        onClick={onClick}
        {...props}
      >
        <span className={`${flexCenter} gap-2`}>{children}</span>
      </Button>
    );
  },
);

BaseButton.displayName = 'BaseButton';

export default BaseButton;
