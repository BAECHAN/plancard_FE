import { SearchFilterBase } from '@/shared/type';
import { InteractiveTagButton, ToggleFilterTab } from '@/shared/ui';
import { TOGGLE_FILTER_TAB_OPTION } from '@/shared/util/const';
import { ButtonList } from '@/widgets/button/ui';
import { useState } from 'react';

const FilterContainerMy = () => {
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
          <InteractiveTagButton
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
          </InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton defaultValue={false}>
            Music
          </InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton defaultValue={false}>Food</InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton defaultValue={false}>
            Travel
          </InteractiveTagButton>
        </li>
        <li>
          <InteractiveTagButton defaultValue={false}>Art</InteractiveTagButton>
        </li>
      </ButtonList>
      <ButtonList className="gap-3">
        {TOGGLE_FILTER_TAB_OPTION.filter((_, index) => index === 1).map(
          option => (
            <li key={option[1].label}>
              <ToggleFilterTab
                size="medium"
                option={option}
                onClick={() => {
                  setProps(prev => ({
                    ...prev,
                    scrap: !prev.scrap,
                  }));
                }}
              />
            </li>
          ),
        )}
      </ButtonList>
    </div>
  );
};

export default FilterContainerMy;
