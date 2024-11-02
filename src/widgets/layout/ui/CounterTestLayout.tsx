import { Badge } from '@/shared/lib/shadcn-ui/components/ui';
import { Link } from 'react-router-dom';

type CounterTestLayoutProps = {
  count: number;
  addCount: () => void;
  linkTo: string;
  linkName: string;
};

/** Recoil 정상작동 테스트 */
const CounterTestLayout = ({
  count,
  addCount,
  linkTo,
  linkName,
}: CounterTestLayoutProps) => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">{count}</div>
      <button onClick={addCount}>+</button>
      <Link
        to={linkTo}
        className="flex justify-center"
      >
        <Badge>Go {linkName}</Badge>
      </Link>
    </div>
  );
};

export default CounterTestLayout;
