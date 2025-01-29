import { LoginPage } from '@/pages/login/ui';
import {
  CardPage,
  MainPage,
  MyPage,
  NotFound,
  PlanEditPage,
  PlanPage,
} from '@/pages/main/ui';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import '@/app/index.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';

import 'react-toastify/dist/ReactToastify.css';

import { queryClient } from '@/shared/query';
import { useContentPageStore } from '@/shared/store';
import { ContentPage } from '@/shared/type';
import { MainLayout } from '@/widgets/layout/ui';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

const isContentPage = (pathname: string): pathname is ContentPage => {
  return pathname === 'plans' || pathname === 'cards';
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const { setPageType } = useContentPageStore();

  React.useEffect(
    function updateActiveTabBasedOnPathname() {
      const pathname = location.pathname.replace('/', '');

      if (isContentPage(pathname)) {
        setPageType(pathname);
      }
    },
    [location.pathname],
  );

  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path="/cards"
          element={<CardPage />}
        />
        <Route
          path="/plans"
          element={<PlanPage />}
        />
        {/* 플랜 생성 */}
        <Route
          path="/plans/new"
          element={<PlanEditPage />}
        />
        {/* 플랜 수정 */}
        <Route
          path="/plans/:planId"
          element={<PlanEditPage />}
        />
      </Route>

      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/mypage"
        element={<MyPage />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
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
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={isDevtoolsOpen} />
        </QueryClientProvider>
      </React.StrictMode>,
    );
  }
});

export default App;
