import { FilterContainerExplore } from '@/widgets/filter/ui';
import { SearchContainerExplore } from '@/widgets/search/ui';
import { SortingContainerExplore } from '@/widgets/sorting/ui';

const ControlContainerExplore = () => {
  return (
    <>
      <SearchContainerExplore />
      <FilterContainerExplore />
      <SortingContainerExplore />
    </>
  );
};

export default ControlContainerExplore;
