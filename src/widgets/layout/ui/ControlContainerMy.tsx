import { CardOrPlan, usePathStore } from '@/shared/store';
import { FilterContainerMy } from '@/widgets/filter/ui';
import { SearchContainerMy } from '@/widgets/search/ui';
import { SortingContainerMy } from '@/widgets/sorting/ui';

const ControlContainerMy = ({ contentPage }: { contentPage?: CardOrPlan }) => {
  const { currentPage } = usePathStore();
  return (
    <>
      <SearchContainerMy />
      <FilterContainerMy contentPage={contentPage ?? currentPage} />
      <SortingContainerMy contentPage={contentPage ?? currentPage} />
    </>
  );
};

export default ControlContainerMy;
