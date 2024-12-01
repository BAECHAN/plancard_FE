import { MyOrExploreAtom } from '@/shared/store';
import {
  ControlContainerExplore,
  ControlContainerMy,
} from '@/widgets/layout/ui';
import { useRecoilValue } from 'recoil';

export const CardPage = () => {
  const activeTab = useRecoilValue(MyOrExploreAtom);

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        {/* <ControlContainerExplore /> */}
        <div className="flex flex-col gap-2">
          {activeTab === 'explore' ? (
            <ControlContainerExplore />
          ) : (
            <>
              <ControlContainerMy />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
