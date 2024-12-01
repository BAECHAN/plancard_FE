import { SearchFilterBase } from '@/shared/type';
import { InteractiveTagButton } from '@/shared/ui';
import { TagList } from '@/widgets/tag/ui';
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
    <div className="flex flex-col gap-2">
      <TagList>
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
      </TagList>
    </div>
  );
};

export default FilterContainerMy;
