import { FilterContainerMy } from '@/widgets/filter/ui';
import { SearchContainerMy } from '@/widgets/search/ui';
import { SortingContainerMy } from '@/widgets/sorting/ui';

const ControlContainerMy = () => {
  return (
    <>
      <SearchContainerMy />
      <FilterContainerMy />
      <SortingContainerMy />
    </>
  );
};

export default ControlContainerMy;
