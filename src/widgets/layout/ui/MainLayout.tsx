import { ToggleSearchTab } from '@/shared/ui';
import { Footer, Header, MenuSidebar } from '@/widgets/layout/ui';
import React from 'react';

// Layout 컴포넌트의 Props 타입 정의
interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <div className="flex flex-col min-h-dvh">
        <Header size="medium" />
        <main className="flex flex-1">
          <MenuSidebar size="medium" />
          <section className="w-full p-3">
            <article>
              <ToggleSearchTab size="small" />
              {children}
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
