import { SearchFilterBase } from '@/shared/type';
import { FilterTagButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';
import { useState } from 'react';

const FilterContainerExplore = () => {
  const [props, setProps] = useState<SearchFilterBase>({
    scrap: false,
    country: 'FR',
    city: 'paris',
    theme: ['1', '2'],
    category: ['11', '22'],
  });

  return (
    <div className="flex flex-col gap-4">
      <ButtonList className="gap-3">
        <li>
          <FilterTagButton
            value={props.theme?.includes('1')}
            onToggle={isActive =>
              setProps(prev => ({
                ...prev,
                theme: isActive
                  ? ['1', '2']
                  : prev.theme?.filter(t => t !== '1'),
              }))
            }
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
    </div>
  );
};

export default FilterContainerExplore;
