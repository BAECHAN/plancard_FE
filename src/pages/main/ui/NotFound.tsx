// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const imageUrl = `${import.meta.env.BASE_URL}images/error.jpg`;

  return (
    <div
      className="flex h-dvh items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-[250px] font-bold text-black">404</h1>
        <div className="flex flex-col gap-6">
          <p className="text-4xl">페이지를 찾을 수 없습니다.</p>
          <Link
            to="/cards/explore"
            className="text-3xl font-bold text-skyblue hover:underline"
            aria-label="PlanCard 구경하기"
            tabIndex={0}
          >
            PlanCard 구경가기
          </Link>
        </div>
      </div>
    </div>
  );
};
