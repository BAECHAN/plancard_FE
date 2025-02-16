import { CardOrPlan, usePathStore } from '@/shared/store';
import { FilterContainerExplore } from '@/widgets/filter/ui';
import { SearchContainerExplore } from '@/widgets/search/ui';
import { SortingContainerExplore } from '@/widgets/sorting/ui';

const ControlContainerExplore = ({
  contentPage,
}: {
  contentPage?: CardOrPlan;
}) => {
  const { currentPage } = usePathStore();
  return (
    <>
      <SearchContainerExplore />
      <FilterContainerExplore contentPage={contentPage ?? currentPage} />
      <SortingContainerExplore contentPage={contentPage ?? currentPage} />
    </>
  );
};

export default ControlContainerExplore;
