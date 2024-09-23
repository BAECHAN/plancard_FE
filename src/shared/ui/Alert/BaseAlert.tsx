import {
  amber,
  cream,
  flexCenter,
  gray,
  navy,
  periwinkle,
  primary,
  skyblue,
} from '@/shared/const';
import { Size, Variant } from '@/shared/type';
import React from 'react';

const small = 'text-sm p-2';
const medium = 'text-base p-2';
const large = 'text-xl p-2';

interface BaseAlertProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
}
export const BaseAlert = ({
  children,
  variant = 'cream',
  size = 'medium',
  ...props
}: BaseAlertProps) => {
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
    <div
      className={`${sizeClass[size]} ${variantClass[variant]} shadow-custom`}
      {...props}
    >
      <span className={`${flexCenter} gap-2`}>{children}</span>
    </div>
  );
};
