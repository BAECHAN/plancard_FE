import { ForgotPasswordPage, LoginPage, SignUpPage } from '@/pages/login/ui';
import {
  CardPage,
  MainPage,
  NotFound,
  PlanDetailPage,
  PlanPage,
} from '@/pages/main/ui';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';

import '@/app/index.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';

import 'react-toastify/dist/ReactToastify.css';

import { queryClient } from '@/shared/query';
import { usePathStore } from '@/shared/store';
import { LoginLayout, MainLayout, ModalContainer } from '@/widgets/layout/ui';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

const RedirectComponent: React.FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
};

const router = createHashRouter([
  {
    path: '/login',
    element: <LoginLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: '/forgot-password',
    element: <LoginLayout />,
    children: [{ index: true, element: <ForgotPasswordPage /> }],
  },
  {
    path: '/signup',
    element: <LoginLayout />,
    children: [{ index: true, element: <SignUpPage /> }],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'cards',
        children: [
          { path: 'my', element: <CardPage /> },
          { path: 'explore', element: <CardPage /> },
          { index: true, element: <RedirectComponent to="/cards/my" /> },
        ],
      },
      {
        path: 'plans',
        children: [
          { path: 'my', element: <PlanPage /> },
          { path: 'explore', element: <PlanPage /> },
          { index: true, element: <RedirectComponent to="/plans/my" /> },
          { path: 'my/edit', element: <PlanDetailPage /> },
          { path: ':planId/edit', element: <PlanDetailPage /> },
          { path: ':planId', element: <PlanDetailPage /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

// 라우터의 변경을 감지하기 위한 subscriber 설정
const { setPath } = usePathStore.getState();

// 라우터 변경 시
router.subscribe(state => {
  setPath(state.location.pathname);
});

// 초기 path 지정
setPath(window.location.hash.slice(1) || '/');

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

Modal.setAppElement('#root');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);

    const isDevtoolsOpen =
      import.meta.env.VITE_IS_TANSTACK_QUERY_DEVTOOLS_OPEN === 'true';

    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <App />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <ModalContainer />
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={isDevtoolsOpen} />
        </QueryClientProvider>
      </React.StrictMode>,
    );
  }
});

export default App;
