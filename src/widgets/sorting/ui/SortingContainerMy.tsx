import { useSearchCardStore } from '@/shared/store';
import { Option, SearchSortCard } from '@/shared/type';
import { SortingTitleButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';

// TODO: API 처리하는 로직은 Props로 받아올 예정
const SortingContainerMy = ({
  options,
}: {
  options: Option<SearchSortCard>[];
}) => {
  const {
    searchCard: {
      sort: { sortBy, sortOrder },
    },
    updateSort,
  } = useSearchCardStore();

  const handleButtonClick = (newValue: SearchSortCard) => {
    updateSort(newValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <ButtonList className="">
        {options.map(option => (
          <li key={option.label}>
            <SortingTitleButton
              title={option.label}
              isActive={
                option.value.sortBy === sortBy &&
                option.value.sortOrder === sortOrder
              }
              onClick={() => handleButtonClick(option.value)}
            />
          </li>
        ))}
      </ButtonList>
    </div>
  );
};

export default SortingContainerMy;
