import { Option, SearchSortCard } from '@/shared/type';
import { FilterContainerExplore } from '@/widgets/filter/ui';
import { SearchContainerExplore } from '@/widgets/search/ui';
import { SortingContainerMy } from '@/widgets/sorting/ui';

export const sortingOptions: Option<SearchSortCard>[] = [
  {
    label: '카드 이름순',
    value: {
      sortBy: 'cardTitle',
      sortOrder: 'asc',
    },
  },
  {
    label: '카드 이름역순',
    value: {
      sortBy: 'cardTitle',
      sortOrder: 'desc',
    },
  },
  {
    label: '높은 등급순',
    value: {
      sortBy: 'rating',
      sortOrder: 'desc',
    },
  },
  {
    label: '낮은 등급순',
    value: {
      sortBy: 'rating',
      sortOrder: 'asc',
    },
  },
];
const ControlContainerExplore = () => {
  return (
    <>
      <SearchContainerExplore />
      <FilterContainerExplore />
      {
        // TODO: activeCity 가 있을 경우에만 렌더링
        <SortingContainerMy options={sortingOptions} />
      }
    </>
  );
};

export default ControlContainerExplore;
