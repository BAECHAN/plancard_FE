import { LoginPage } from '@/pages/login';
import { MainPage, MyPage } from '@/pages/main';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@/app/index.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';

import { queryClient } from '@/shared/query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/mypage"
          element={<MyPage />}
        />
      </Routes>
    </Router>
  );
};

// React 18 createRoot 사용
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
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={isDevtoolsOpen} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}

export default App;
