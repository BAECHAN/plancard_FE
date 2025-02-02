// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex h-dvh items-center justify-center overflow-hidden bg-[url('/images/error.jpg')] bg-cover bg-center">
      <div className="text-center text-white">
        <h1 className="text-[250px] font-bold text-black">404</h1>
        <div className="flex flex-col gap-6">
          <p className="text-4xl">페이지를 찾을 수 없습니다.</p>
          <Link
            to="/cards/explore"
            className="text-3xl font-bold text-skyblue hover:underline"
          >
            PlanCard 구경가기
          </Link>
        </div>
      </div>
    </div>
  );
};
