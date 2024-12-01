import { Option, SearchSortCard } from '@/shared/type';
import { SortingTitleButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';
import { useState } from 'react';

// TODO: API 처리하는 로직은 Props로 받아올 예정
const SortingContainerMy = ({
  options,
}: {
  options: Option<SearchSortCard>[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    console.log(options[index].value);
  };

  return (
    <div className="flex flex-col gap-2">
      <ButtonList className="">
        {options.map((option, index) => (
          <li key={option.label}>
            <SortingTitleButton
              title={option.label}
              value={activeIndex === index}
              onClick={() => handleButtonClick(index)}
            />
          </li>
        ))}
      </ButtonList>
    </div>
  );
};

export default SortingContainerMy;
