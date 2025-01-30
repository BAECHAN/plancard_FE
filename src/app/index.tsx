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
  Route,
  HashRouter as Router,
  Routes,
  useLocation,
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

const AppRoutes: React.FC = () => {
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

        <Route path="/cards">
          <Route
            path="my"
            element={<CardPage />}
          />
          <Route
            path="explore"
            element={<CardPage />}
          />
          <Route
            index
            element={<RedirectComponent to="/cards/my" />}
          />
        </Route>

        <Route path="/plans">
          <Route
            path="my"
            element={<PlanPage />}
          />
          <Route
            path="explore"
            element={<PlanPage />}
          />
          <Route
            index
            element={<RedirectComponent to="/plans/my" />}
          />
        </Route>

        {/* 플랜 생성 */}
        <Route
          path="/plans/my/new"
          element={<PlanDetailPage />}
        />
        {/* 플랜 수정 */}
        <Route
          path="/plans/:planId/edit"
          element={<PlanDetailPage />}
        />
        {/* 플랜 상세 */}
        <Route
          path="/plans/:planId"
          element={<PlanDetailPage />}
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

const AppContent: React.FC = () => {
  const location = useLocation();
  const setPath = usePathStore(state => state.setPath);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname, setPath]);

  return <AppRoutes />;
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
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
            <ModalContainer />
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={isDevtoolsOpen} />
        </QueryClientProvider>
      </React.StrictMode>,
    );
  }
});

export default App;
