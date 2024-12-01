import { Option, SearchSortCard } from '@/shared/type';
import { SortingTitleButton } from '@/shared/ui';
import { SortingTitleButtonList } from '@/widgets/sorting/ui';
import { useState } from 'react';

const sortingOptions: Option<SearchSortCard>[] = [
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

// TODO: API 처리하는 로직은 Props로 받아올 예정
const SortingContainerMy = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    console.log(sortingOptions[index].value);
  };

  return (
    <div className="flex flex-col gap-2">
      <SortingTitleButtonList>
        {sortingOptions.map((option, index) => (
          <li key={option.label}>
            <SortingTitleButton
              title={option.label}
              onClick={() => handleButtonClick(index)}
              isActive={activeIndex === index}
            />
          </li>
        ))}
      </SortingTitleButtonList>
    </div>
  );
};

export default SortingContainerMy;
