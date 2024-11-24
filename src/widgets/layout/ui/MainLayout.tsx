import { ToggleSearchTab } from '@/shared/ui';
import { Footer, Header, MenuSidebar } from '@/widgets/layout/ui';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="">
      <div className="flex flex-col min-h-dvh">
        <Header size="medium" />
        <main className="flex flex-1">
          <MenuSidebar size="medium" />
          <section className="w-full p-3">
            <article>
              <ToggleSearchTab size="small" />
              <Outlet />
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
