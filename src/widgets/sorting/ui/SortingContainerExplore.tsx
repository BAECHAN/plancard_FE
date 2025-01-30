import {
  usePathStore,
  useSearchCardStore,
  useSearchPlanStore,
} from '@/shared/store';
import { Option, SearchSortCard, SearchSortPlan } from '@/shared/type';
import { SortingTitleButton } from '@/shared/ui';
import { TypeGuard } from '@/shared/util';
import { ButtonList } from '@/widgets/button/ui';

type SortingOptionsType = {
  cards: Option<SearchSortCard>[];
  plans: Option<SearchSortPlan>[];
};

const sortingOptions: SortingOptionsType = {
  cards: [
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
  ],
  plans: [
    {
      label: '최근 등록순',
      value: {
        sortBy: 'createdDate',
        sortOrder: 'desc',
      },
    },
    {
      label: '최근 업데이트순',
      value: {
        sortBy: 'lastUpdateDate',
        sortOrder: 'desc',
      },
    },
    {
      label: '좋아요 많은 순',
      value: {
        sortBy: 'likeCount',
        sortOrder: 'desc',
      },
    },
  ],
};

// TODO: API 처리하는 로직은 Props로 받아올 예정
const SortingContainerExplore = () => {
  const { currentPage } = usePathStore();

  const {
    searchCard: {
      sort: { sortBy: cardSortBy, sortOrder: cardSortOrder },
    },
    updateSort: updateCardSort,
  } = useSearchCardStore();

  const {
    searchPlan: {
      sort: { sortBy: planSortBy, sortOrder: planSortOrder },
    },
    updateSort: updatePlanSort,
  } = useSearchPlanStore();

  const handleButtonClick = (newValue: SearchSortCard | SearchSortPlan) => {
    if (TypeGuard.isSearchSortCard(newValue)) {
      updateCardSort(newValue);
    } else if (TypeGuard.isSearchSortPlan(newValue)) {
      updatePlanSort(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <ButtonList className="">
        {sortingOptions[currentPage].map(option => (
          <li key={option.label}>
            <SortingTitleButton
              title={option.label}
              isActive={
                option.value.sortBy ===
                  (currentPage === 'cards' ? cardSortBy : planSortBy) &&
                option.value.sortOrder ===
                  (currentPage === 'cards' ? cardSortOrder : planSortOrder)
              }
              onClick={() => handleButtonClick(option.value)}
            />
          </li>
        ))}
      </ButtonList>
    </div>
  );
};

export default SortingContainerExplore;
