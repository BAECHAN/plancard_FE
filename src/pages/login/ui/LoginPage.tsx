import { counterAtom } from '@/shared/store';
import { CounterTestLayout, LoginFormLayout } from '@/widgets/layout/ui';
import { useRecoilState } from 'recoil';

export const LoginPage = () => {
  const [count, setCount] = useRecoilState(counterAtom);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="flex justify-center">Login Page</h1>
      <CounterTestLayout
        count={count}
        addCount={addCount}
        linkTo="/"
        linkName="Main"
      />

      <LoginFormLayout />
    </div>
  );
};
