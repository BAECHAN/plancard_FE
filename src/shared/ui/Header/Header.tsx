import { Size } from '@/shared/type';
import React from 'react';

import {
  headerLarge as large,
  headerMedium as medium,
  headerSmall as small,
} from '@/shared/const';

interface HeaderProps {
  children: React.ReactNode;

  size?: Size;
}
export const Header = ({ children, size = 'medium' }: HeaderProps) => {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  return (
    <header
      className={`${sizeClass[size]} flex justify-between w-[100vw] bg-skyblue text-white items-center py-2 px-3`}
    >
      {children}
    </header>
  );
};
