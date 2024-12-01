import { MyOrExploreAtom } from '@/shared/store';
import { FilterContainerExplore, FilterContainerMy } from '@/widgets/filter/ui';
import { SearchContainerExplore, SearchContainerMy } from '@/widgets/search/ui';
import { SortingContainerMy } from '@/widgets/sorting/ui';
import { useRecoilValue } from 'recoil';

export const CardPage = () => {
  const activeTab = useRecoilValue(MyOrExploreAtom);

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        {/* <ControlContainerExplore /> */}
        <div className="flex flex-col gap-2">
          {activeTab === 'explore' ? (
            <>
              <SearchContainerExplore />
              <FilterContainerExplore />
            </>
          ) : (
            <>
              <SearchContainerMy />
              <FilterContainerMy />
              <SortingContainerMy />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
