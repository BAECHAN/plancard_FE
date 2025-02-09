import {
  amber,
  cream,
  flexCenter,
  gray,
  navy,
  periwinkle,
  primary,
  skyblue,
  white,
} from '@/shared/const';
import { Size, Variant } from '@/shared/type';
import React from 'react';

interface BaseAlertProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
}
const BaseAlert = ({
  children,
  variant = 'cream',
  size = 'medium',
  ...props
}: BaseAlertProps) => {
  const sizeClass: Record<Size, string> = {
    small: 'text-sm p-2',
    medium: 'text-base p-2',
    large: 'text-xl p-2',
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
    <div
      className={`${sizeClass[size]} ${variantClass[variant]} fixed left-1/2 top-1 z-10 -translate-x-1/2 shadow-custom`}
      {...props}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </div>
  );
};

export default BaseAlert;
