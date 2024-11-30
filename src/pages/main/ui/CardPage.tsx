import { MyOrExploreAtom } from '@/shared/store';
import { FilterContainerMy } from '@/widgets/filter/ui';
import { SearchContainerExplore, SearchContainerMy } from '@/widgets/search/ui';
import { useRecoilValue } from 'recoil';

export const CardPage = () => {
  const activeTab = useRecoilValue(MyOrExploreAtom);

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        {/* <ControlContainerExplore /> */}
        <div className="flex flex-col gap-2">
          {activeTab === 'explore' ? (
            <SearchContainerExplore />
          ) : (
            <>
              <SearchContainerMy />
              <FilterContainerMy />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
