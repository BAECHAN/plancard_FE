import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// future 플래그를 설정하여 v7 동작 활성화
const router = createBrowserRouter(
  createRoutesFromElements(),
  // 기존 라우트 구조
  {
    future: {
      v7_startTransition: true,
    },
  },
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
