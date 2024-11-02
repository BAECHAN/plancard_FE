import { Header } from '@/shared/ui';
import React from 'react';

// Layout 컴포넌트의 Props 타입 정의
interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header size="large" />
      {children}
    </div>
  );
};
export default MainLayout;
