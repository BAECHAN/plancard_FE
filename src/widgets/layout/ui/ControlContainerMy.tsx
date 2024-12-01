import { Option, SearchSortCard } from '@/shared/type';
import { FilterContainerMy } from '@/widgets/filter/ui';
import { SearchContainerMy } from '@/widgets/search/ui';
import { SortingContainerMy } from '@/widgets/sorting/ui';

export const sortingOptions: Option<SearchSortCard>[] = [
  {
    label: '빠른 획득순',
    value: {
      sortBy: 'getDate',
      sortOrder: 'asc',
    },
  },
  {
    label: '느린 획득순',
    value: {
      sortBy: 'getDate',
      sortOrder: 'desc',
    },
  },
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
    label: '도시 이름순',
    value: {
      sortBy: 'cityTitle',
      sortOrder: 'asc',
    },
  },
  {
    label: '도시 이름역순',
    value: {
      sortBy: 'cityTitle',
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
  {
    label: '최신 업데이트순',
    value: {
      sortBy: 'lastUpdateDate',
      sortOrder: 'desc',
    },
  },
];
const ControlContainerMy = () => {
  return (
    <>
      <SearchContainerMy />
      <FilterContainerMy />
      <SortingContainerMy options={sortingOptions} />
    </>
  );
};

export default ControlContainerMy;
