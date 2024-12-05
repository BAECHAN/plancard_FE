import { useSearchCardStore } from '@/shared/store';
import { FilterTagButton, ToggleFilterTab } from '@/shared/ui';
import { TOGGLE_FILTER_TAB_OPTION } from '@/shared/util/const';
import { ButtonList } from '@/widgets/button/ui';
import { useEffect } from 'react';

const FilterContainerMy = () => {
  const { searchCard, updateFilter, toggleScrapFilter } = useSearchCardStore();

  useEffect(() => {
    updateFilter({
      scrap: false,
      country: 'FR',
      city: 'paris',
      theme: ['1', '2'],
      category: ['11', '22'],
    });
  }, []);

  const handleToggleScrapFilterButtonClick = () => {
    toggleScrapFilter();
  };
  return (
    <div className="flex flex-col gap-4">
      <ButtonList className="gap-3">
        <li>
          <FilterTagButton
            value={searchCard.filter?.theme?.includes('1')}
            onToggle={isActive => {
              updateFilter({
                theme: isActive ? ['1', '2'] : ['2'],
              });
            }}
          >
            Sports
          </FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Music</FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Food</FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Travel</FilterTagButton>
        </li>
        <li>
          <FilterTagButton defaultValue={false}>Art</FilterTagButton>
        </li>
      </ButtonList>
      <ButtonList className="gap-3">
        {TOGGLE_FILTER_TAB_OPTION.filter((_, index) => index === 1).map(
          option => (
            <li key={option[1].label}>
              <ToggleFilterTab
                size="medium"
                option={option}
                onClick={handleToggleScrapFilterButtonClick}
              />
            </li>
          ),
        )}
      </ButtonList>
    </div>
  );
};

export default FilterContainerMy;
