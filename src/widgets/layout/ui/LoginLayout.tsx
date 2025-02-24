import { Footer, Header } from '@/widgets/layout/ui';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div className="">
      <div className="flex min-h-dvh flex-col">
        <Header size="medium" />
        <main className="flex flex-1">
          <section className="w-full p-4">
            <article className="flex flex-col gap-4">
              <Outlet />
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default LoginLayout;
