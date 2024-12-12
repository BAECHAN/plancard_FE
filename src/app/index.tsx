import { LoginPage } from '@/pages/login/ui';
import {
  CardPage,
  MainPage,
  MyPage,
  NotFound,
  PlanPage,
} from '@/pages/main/ui';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import '@/app/index.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';

import 'react-toastify/dist/ReactToastify.css';

import { queryClient } from '@/shared/query';
import { MainLayout } from '@/widgets/layout/ui';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <Router>
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
            path="/card"
            element={<CardPage />}
          />
          <Route
            path="/plan"
            element={<PlanPage />}
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
        {/* 404 페이지 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
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
