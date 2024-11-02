import { Alert } from '@/shared/lib/shadcn-ui/components/ui';
import { counterAtom } from '@/shared/store';
import { DropdownMenu } from '@/shared/ui';
import { CounterTestLayout } from '@/widgets/layout';
import { useRecoilState } from 'recoil';

export const MainPage = () => {
  const [count, setCount] = useRecoilState(counterAtom);

  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Main Page</h1>
      <Alert>ddd</Alert>
      <CounterTestLayout
        count={count}
        addCount={addCount}
        linkTo="/login"
        linkName="Login"
      />
      <div className="overflow-hidden h-20">
        <DropdownMenu />
        {/* <ul>
          <li>Profile</li>
          <li>Profile</li>
          <li>Profile</li>
          <li>Profile</li>
          <li>Profile</li>
        </ul> */}
      </div>
    </div>
  );
};
