import { ToggleSearchTab } from '@/shared/ui';
import { Footer, Header, MenuSidebar } from '@/widgets/layout/ui';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="">
      <div className="flex min-h-dvh flex-col">
        <Header size="medium" />
        <main className="flex flex-1">
          <MenuSidebar size="medium" />
          <section className="w-full p-4">
            <article className="flex flex-col gap-4">
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
