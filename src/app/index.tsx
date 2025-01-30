import { LoginPage } from '@/pages/login/ui';
import {
  CardPage,
  MainPage,
  MyPage,
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
import { MainLayout, ModalContainer } from '@/widgets/layout/ui';
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
          { path: 'my/new', element: <PlanDetailPage /> },
          { path: ':planId/edit', element: <PlanDetailPage /> },
          { path: ':planId', element: <PlanDetailPage /> },
        ],
      },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/mypage', element: <MyPage /> },
  { path: '*', element: <NotFound /> },
]);

// 라우터의 변경을 감지하기 위한 subscriber 설정
router.subscribe(state => {
  const setPath = usePathStore.getState().setPath;
  setPath(state.location.pathname);
});

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
